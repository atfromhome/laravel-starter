<?php

declare(strict_types=1);

namespace App\Http\Responses\Fortify;

use Inertia\Inertia;
use Laravel\Fortify\Fortify;
use Illuminate\Http\JsonResponse;
use Laravel\Fortify\Contracts\LogoutResponse;
use Symfony\Component\HttpFoundation\Response;

final class LogoutRedirectResponse implements LogoutResponse
{
    /**
     * Create an HTTP response that represents the object.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function toResponse($request): Response
    {
        return $request->wantsJson()
                    ? new JsonResponse('', 204)
                    : Inertia::location(Fortify::redirects('logout', '/'));
    }
}
