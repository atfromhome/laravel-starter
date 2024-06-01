<?php

declare(strict_types=1);

namespace App\Navigation;

use Illuminate\Database\Eloquent\Model;

final class NavigationManager
{
    /**
     * @var NavigationItem[]
     */
    private array $navigationItems = [];

    /**
     * @param  NavigationItem[]  $items
     */
    public function registerNavigationGroups(array $items): void
    {
        $this->navigationItems = \array_merge($this->navigationItems, $items);
    }

    /**
     * @return NavigationItem[]
     */
    public function getNavigationItems(): array
    {
        return $this->navigationItems;
    }

    /**
     * @return array<array-key, null|string|array<array-key, null|string>>
     */
    public function getUserNavigationItems(Model $user): array
    {
        $navigations = \collect($this->getNavigationItems())->sortBy(fn (NavigationItem $item): int => $item->getSort());

        if ($user->hasAttribute('is_super_admin') && $user->getAttribute('is_super_admin')) {
            /** @var array<array-key, null|string|array<array-key, null|string>> */
            return $navigations->values()->toArray();
        }

        /** @var array<array-key, null|string|array<array-key, null|string>> */
        return $navigations->filter(function (NavigationItem $item) use ($user): bool {
            return $this->checkNavigationPermission($item, $user);
        })->map(function (NavigationItem $item) use ($user): NavigationItem {
            $subs = collect($item->getSubs());

            if ($subs->isEmpty()) {
                return $item;
            }

            $navigations = $subs->sortBy(fn (NavigationItem $item): int => $item->getSort())
                ->filter(fn (NavigationItem $item): bool => $this->checkNavigationPermission($item, $user))
                ->values()
                ->all();

            return $item->subs($navigations);
        })->values()->toArray();
    }

    private function checkNavigationPermission(NavigationItem $item, Model $user): bool
    {
        if ($item->getPermission() === null) {
            return true;
        }

        if (\method_exists($user, 'checkPermissionTo')) {
            return $user->checkPermissionTo($item->getPermission());
        }

        return true;
    }
}
