<?php

declare(strict_types=1);

namespace App\Providers;

use App\Navigation\Navigation;
use App\Navigation\NavigationItem;
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
        Navigation::registerNavigation([
            NavigationItem::new()
                ->label('Home')
                ->href('/')
                ->icon('layout-dashboard'),
            NavigationItem::new()
                ->label('Error Pages')
                ->icon('exclamation-circle')
                ->subs([
                    NavigationItem::new()
                        ->label('Not Found')
                        ->href('/errors/404')
                        ->icon('error-404'),
                    NavigationItem::new()
                        ->label('Internal Server Error')
                        ->href('/errors/500')
                        ->icon('server-off'),
                    NavigationItem::new()
                        ->label('Maintenance Error')
                        ->href('/errors/503')
                        ->icon('barrier-block'),
                ]),
        ]);
    }
}
