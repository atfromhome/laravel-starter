<?php

declare(strict_types=1);

namespace App\Navigation;

use App\Models\User;

final class Navigation
{
    public static function registerNavigationGroups(array $groups): void
    {
        /** @var NavigationManager $manager */
        $manager = app(NavigationManager::class);

        $manager->registerNavigationGroups($groups);
    }

    public static function getNavigationGroups(): array
    {
        /** @var NavigationManager $manager */
        $manager = app(NavigationManager::class);

        return $manager->getNavigationGroups();
    }

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
