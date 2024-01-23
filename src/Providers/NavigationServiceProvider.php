<?php

declare(strict_types=1);

namespace App\Providers;

use App\Navigation\Navigation;
use App\Navigation\NavigationItem;
use App\Navigation\NavigationGroup;
use App\Permissions\LoanPermission;
use App\Permissions\LeavePermission;
use App\Navigation\NavigationManager;
use App\Permissions\ReviewPermission;
use App\Permissions\PayrollPermission;
use App\Permissions\ApprovalPermission;
use App\Permissions\EmployeePermission;
use App\Permissions\OvertimePermission;
use App\Permissions\PresencePermission;
use Illuminate\Support\ServiceProvider;
use App\Permissions\TimetablePermission;
use App\Permissions\BankAccountPermission;

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
