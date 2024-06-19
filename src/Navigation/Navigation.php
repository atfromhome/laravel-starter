<?php

declare(strict_types=1);

namespace App\Navigation;

use App\Models\User;

final class Navigation
{
    /**
     * @param  array<NavigationItem>  $groups
     */
    public static function registerNavigation(array $groups): void
    {
        /** @var NavigationManager $manager */
        $manager = app(NavigationManager::class);

        $manager->registerNavigationGroups($groups);
    }

    /**
     * @return array<NavigationItem>
     */
    public static function getNavigationItems(): array
    {
        /** @var NavigationManager $manager */
        $manager = app(NavigationManager::class);

        return $manager->getNavigationItems();
    }

    /**
     * @return array<NavigationItem>
     */
    public static function getUserNavigationItems(?User $user = null): array
    {
        if ($user === null) {
            return [];
        }

        /** @var NavigationManager $manager */
        $manager = app(NavigationManager::class);

        return $manager->getUserNavigationItems($user);
    }
}
