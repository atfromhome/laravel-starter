<?php

declare(strict_types=1);

namespace App\Http\Responses\Fortify;

use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;
use Laravel\Fortify\Contracts\ResetPasswordViewResponse;

final class ResetPasswordView implements ResetPasswordViewResponse
{
    public function toResponse($request): Response
    {
        return Inertia::render('password/reset', [
            'email' => (string) $request->string('email'),
            'token' => (string) $request->route('token'),
            'status' => $request->session()->get('status'),
        ])->toResponse($request);
    }
}
