<?php

declare(strict_types=1);

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions;

final class Handler extends Exceptions\Handler
{
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];
}
