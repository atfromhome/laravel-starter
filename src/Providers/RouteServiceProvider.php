<?php

declare(strict_types=1);

namespace App\Providers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Foundation\Support\Providers;

final class RouteServiceProvider extends Providers\RouteServiceProvider
{
    public function boot(): void
    {
        $this->configureRateLimiting();

        $this->routes(function (): void {
            Route::middleware('api')
                ->prefix('api')
                ->group(\base_path('routes/api.php'));

            Route::middleware('web')
                ->group(\base_path('routes/web.php'));
        });
    }

    protected function configureRateLimiting(): void
    {
        RateLimiter::for('api', static function (Request $request) {
            /** @var User|null $user */
            $user = $request->user();

            if ($user === null) {
                return Limit::perMinute(60)->by(
                    $request->ip()
                );
            }

            return Limit::perMinute(160 * 3)->by(
                $user->getKey()
            );
        });
    }
}
