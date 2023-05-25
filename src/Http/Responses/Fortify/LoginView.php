<?php

declare(strict_types=1);

namespace App\Http\Responses\Fortify;

use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;
use Laravel\Fortify\Contracts\LoginViewResponse;

final class LoginView implements LoginViewResponse
{
    public function toResponse($request): Response
    {
        return Inertia::render('auth/login', [
            'status' => $request->session()->get('status'),
        ])->toResponse($request);
    }
}
