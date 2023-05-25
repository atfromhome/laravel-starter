<?php

declare(strict_types=1);

namespace App\Http\PageProps;

use Illuminate\Http\Request;

final class AuthUserProps
{
    public function loadData(Request $request): ?array
    {
        return $request->user()
            ? $request->user()->only('id', 'name', 'email')
            : null;
    }

    public static function load(Request $request): ?array
    {
        return (new self())->loadData($request);
    }
}
