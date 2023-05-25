<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use Inertia\Middleware;
use Illuminate\Http\Request;
use App\Http\PageProps\AuthUserProps;

final class HandleInertiaRequests extends Middleware
{
    public function share(Request $request): array
    {
        return \array_merge(parent::share($request), [
            'auth.user' => fn () => AuthUserProps::load($request),
            'location.params' => fn () => (object) $request->query(),
            'location.search' => fn () => \sprintf('?%s', $request->getQueryString() ?: ''),
        ]);
    }
}
