<?php

declare(strict_types=1);

namespace App\Http\Responses\Fortify;

use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;
use Laravel\Fortify\Contracts\RegisterViewResponse;

final class RegisterView implements RegisterViewResponse
{
    public function toResponse($request): Response
    {
        return Inertia::render('auth/register')->toResponse($request);
    }
}
