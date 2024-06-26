<?php

declare(strict_types=1);

use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;

Route::prefix('/')->group(static function (Router $router): void {
    $router->middleware('auth:sanctum')->group(static function (): void {});
});
