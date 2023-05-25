<?php

declare(strict_types=1);

use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileInformationController;

Route::prefix('/')->group(static function (Router $router): void {
    $router->middleware('auth')->group(static function (Router $router): void {
        $router->get('/', [HomeController::class, 'index'])->name('home');
        $router->get('/profile', [ProfileInformationController::class, 'show']);
    });
});
