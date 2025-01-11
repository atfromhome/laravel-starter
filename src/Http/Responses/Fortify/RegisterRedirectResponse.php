<?php

declare(strict_types=1);

namespace App\Http\Responses\Fortify;

use Inertia\Inertia;
use Laravel\Fortify\Fortify;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Laravel\Fortify\Contracts\RegisterResponse;

final class RegisterRedirectResponse implements RegisterResponse
{
    /**
     * Create an HTTP response that represents the object.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function toResponse($request): Response
    {
        return $request->wantsJson()
                    ? new JsonResponse('', 201)
                    : Inertia::location(Fortify::redirects('register'));
    }
}
