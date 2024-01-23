<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use Inertia\Middleware;
use Illuminate\Http\Request;
use App\Navigation\Navigation;
use App\Http\PageProps\AuthUserProps;

final class HandleInertiaRequests extends Middleware
{
    public function share(Request $request): array
    {
        return \array_merge(parent::share($request), [
            'auth.user' => fn () => AuthUserProps::load($request),

            'fortify.features' => fn () => \config('fortify.features', []),

            'menus' => fn () => Navigation::getUserNavigationGroups(
                $request->user()
            ),

            'location.params' => fn () => (object) $request->query(),
            'location.search' => fn () => \sprintf('?%s', $request->getQueryString() ?: ''),
        ]);
    }
}
