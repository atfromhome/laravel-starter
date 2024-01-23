<?php

declare(strict_types=1);

namespace App\Providers;

use App\Navigation\Navigation;
use App\Navigation\NavigationItem;
use App\Navigation\NavigationGroup;
use App\Navigation\NavigationManager;
use Illuminate\Support\ServiceProvider;

final class NavigationServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->singleton(NavigationManager::class);

        $this->registerNavigationGroups();
    }

    private function registerNavigationGroups(): void
    {
        Navigation::registerNavigationGroups([
            NavigationGroup::new()->menus([
                NavigationItem::new()
                    ->label('Home')
                    ->href('/')
                    ->icon('home'),
            ]),
        ]);
    }
}
