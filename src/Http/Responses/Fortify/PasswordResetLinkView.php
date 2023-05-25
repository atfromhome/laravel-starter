<?php

declare(strict_types=1);

namespace App\Http\Responses\Fortify;

use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;
use Laravel\Fortify\Contracts\RequestPasswordResetLinkViewResponse;

final class PasswordResetLinkView implements RequestPasswordResetLinkViewResponse
{
    public function toResponse($request): Response
    {
        return Inertia::render('password/forgot', [
            'status' => $request->session()->get('status'),
        ])->toResponse($request);
    }
}
