<?php

declare(strict_types=1);

namespace App\Http\Responses\Fortify;

use Inertia\Inertia;
use Laravel\Fortify\Fortify;
use Illuminate\Http\JsonResponse;
use Laravel\Fortify\Contracts\LogoutResponse;

final class LogoutRedirectResponse implements LogoutResponse
{
    /**
     * Create an HTTP response that represents the object.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function toResponse($request)
    {
        return $request->wantsJson()
                    ? new JsonResponse('', 204)
                    : Inertia::location(Fortify::redirects('logout', '/'));
    }
}
