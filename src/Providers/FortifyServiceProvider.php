<?php

declare(strict_types=1);

namespace App\Providers;

use Illuminate\Http\Request;
use Laravel\Fortify\Fortify;
use App\Actions\Fortify\CreateNewUser;
use Illuminate\Support\ServiceProvider;
use Illuminate\Cache\RateLimiting\Limit;
use App\Http\Responses\Fortify\LoginView;
use App\Actions\Fortify\ResetUserPassword;
use App\Actions\Fortify\UpdateUserPassword;
use Illuminate\Support\Facades\RateLimiter;
use App\Http\Responses\Fortify\RegisterView;
use Laravel\Fortify\Contracts\LoginViewResponse;
use App\Http\Responses\Fortify\ResetPasswordView;
use Laravel\Fortify\Contracts\RegisterViewResponse;
use App\Actions\Fortify\UpdateUserProfileInformation;
use App\Http\Responses\Fortify\PasswordResetLinkView;
use Laravel\Fortify\Contracts\ResetPasswordViewResponse;
use Laravel\Fortify\Contracts\RequestPasswordResetLinkViewResponse;

final class FortifyServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->configureViews();

        $this->configureActions();

        $this->configureRateLimiter();
    }

    private function configureViews(): void
    {
        $this->app->singleton(LoginViewResponse::class, LoginView::class);
        $this->app->singleton(RegisterViewResponse::class, RegisterView::class);
        $this->app->singleton(RequestPasswordResetLinkViewResponse::class, PasswordResetLinkView::class);
        $this->app->singleton(ResetPasswordViewResponse::class, ResetPasswordView::class);
    }

    private function configureActions(): void
    {
        Fortify::createUsersUsing(CreateNewUser::class);
        Fortify::updateUserProfileInformationUsing(UpdateUserProfileInformation::class);
        Fortify::updateUserPasswordsUsing(UpdateUserPassword::class);
        Fortify::resetUserPasswordsUsing(ResetUserPassword::class);
    }

    private function configureRateLimiter(): void
    {
        RateLimiter::for('login', static function (Request $request): Limit {
            $email = (string) $request->string('email');

            return Limit::perMinute(5)->by($email.$request->ip());
        });

        RateLimiter::for('two-factor', static function (Request $request): Limit {
            return Limit::perMinute(5)->by($request->session()->get('login.id'));
        });
    }
}
