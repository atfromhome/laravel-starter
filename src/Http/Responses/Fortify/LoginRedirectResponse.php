<?php

declare(strict_types=1);

namespace App\Http\Responses\Fortify;

use Inertia\Inertia;
use Laravel\Fortify\Fortify;
use Laravel\Fortify\Contracts\LoginResponse;

final class LoginRedirectResponse implements LoginResponse
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
                    ? response()->json(['two_factor' => false])
                    : Inertia::location(Fortify::redirects('login'));
    }
}
