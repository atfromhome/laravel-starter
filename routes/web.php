<?php

declare(strict_types=1);

use Laravel\Fortify\Features;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\CurrentUserInfoController;
use App\Http\Controllers\UserSessionBrowserController;
use App\Http\Controllers\PasswordCurrentUserController;

Route::prefix('/')->group(static function (Router $router): void {
    $router->get('/', [WelcomeController::class, 'index'])->name('home');

    $router->middleware('auth')->group(static function (Router $router): void {
        $router->get('/hub', [HomeController::class, 'index']);

        $router->get('/user/browser-sessions', [UserSessionBrowserController::class, 'show'])
            ->name('user-browser-session.show');
        $router->delete('/user/browser-sessions', [UserSessionBrowserController::class, 'destroy'])
            ->name('user-browser-session.destroy');

        if (Features::updatePasswords()) {
            $router->get('/user/password', [PasswordCurrentUserController::class, 'edit'])
                ->name('user-password.edit');
        }

        if (Features::enabled(Features::updateProfileInformation())) {
            $router->get('/user/profile-information', [CurrentUserInfoController::class, 'show'])
                ->name('user-profile-information.show');
            $router->delete('/user/profile-information', [CurrentUserInfoController::class, 'destroy'])
                ->name('user-profile-information.destroy');
        }
    });
});
