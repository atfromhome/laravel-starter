<?php

declare(strict_types=1);

namespace App\Actions\Fortify;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

final readonly class DeleteOtherBrowserSession
{
    public function handle(Request $request): void
    {
        if (config('session.driver') !== 'database') {
            return;
        }

        /** @phpstan-ignore-next-line */
        DB::connection(config('session.connection'))->table(config('session.table', 'sessions'))
            ->where('user_id', $request->user()?->getAuthIdentifier())
            ->where('id', '!=', $request->session()->getId())
            ->delete();
    }
}
