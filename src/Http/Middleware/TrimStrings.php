<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware;

final class TrimStrings extends Middleware\TrimStrings
{
    protected $except = [
        'current_password',
        'password',
        'password_confirmation',
    ];
}
