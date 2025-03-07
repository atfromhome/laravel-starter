<?php

declare(strict_types=1);

namespace App\Navigation;

use App\Models\User;
use Illuminate\Support\Collection;

final class NavigationManager
{
    /** @var NavigationGroup[] */
    private array $navigationGroups = [];

    /**
     * @param  NavigationGroup[]  $groups
     */
    public function registerNavigationGroups(array $groups): void
    {
        $this->navigationGroups = \array_merge($this->navigationGroups, $groups);
    }

    /**
     * @return NavigationGroup[]
     */
    public function getNavigationGroups(): array
    {
        return $this->navigationGroups;
    }

    /**
     * @return NavigationGroup[]
     */
    public function getUserNavigationGroups(User $user): array
    {
        $groups = \collect($this->getNavigationGroups())
            ->sortBy(fn (NavigationGroup $group): int => $group->getSort())
            ->groupBy(fn (NavigationGroup $group): string => $group->getGroupKey())
            ->map(function (Collection $collection, string $key) {
                [$label, $icon] = \str_contains($key, '|') ? \explode('|', $key) : [$key, null];

                return NavigationGroup::new()->label($label)->icon($icon)->menus(
                    $collection
                        ->map(fn (NavigationGroup $group) => $group->getMenus())
                        ->flatten()
                        ->unique(fn (NavigationItem $item) => $item->getHref())
                        ->all()
                );
            });

        if ($user->getAttribute('is_super_admin')) {
            return $groups->values()->toArray();
        }

        return \collect($groups)
            ->map(function (NavigationGroup $group) use ($user): NavigationGroup {
                $menus = \array_filter($group->getMenus(), static function (NavigationItem $item) use ($user): bool {
                    if ($item->getPermission() === null) {
                        return true;
                    }

                    if (\method_exists($user, 'checkPermissionTo')) {
                        return $user->checkPermissionTo($item->getPermission());
                    }

                    return true;
                });

                return $group->menus(
                    \array_values($menus)
                );
            })
            ->reject(fn (NavigationGroup $group) => \count($group->getMenus()) <= 0)
            ->values()
            ->toArray();
    }
}
