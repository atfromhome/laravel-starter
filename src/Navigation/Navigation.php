<?php

declare(strict_types=1);

namespace App\Navigation;

use App\Models\User;

final class Navigation
{
    /**
     * @param  NavigationGroup[]  $groups
     */
    public static function registerNavigationGroups(array $groups): void
    {
        /** @var NavigationManager $manager */
        $manager = app(NavigationManager::class);

        $manager->registerNavigationGroups($groups);
    }

    /**
     * @return NavigationGroup[]
     */
    public static function getNavigationGroups(): array
    {
        /** @var NavigationManager $manager */
        $manager = app(NavigationManager::class);

        return $manager->getNavigationGroups();
    }

    /**
     * @return NavigationGroup[]
     */
    public static function getUserNavigationGroups(?User $user = null): array
    {
        if ($user === null) {
            return [];
        }

        /** @var NavigationManager $manager */
        $manager = app(NavigationManager::class);

        return $manager->getUserNavigationGroups($user);
    }
}
