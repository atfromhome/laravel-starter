<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use App\Supports\UserAgent;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Contracts\Auth\StatefulGuard;
use Laravel\Fortify\Actions\ConfirmPassword;
use App\Actions\Fortify\GetUserBrowserSession;
use Illuminate\Validation\ValidationException;
use App\Actions\Fortify\DeleteOtherBrowserSession;

final readonly class UserSessionBrowserController
{
    public function show(Request $request, GetUserBrowserSession $otherSession): Response
    {
        /** @phpstan-ignore-next-line */
        $browsers = $otherSession->handle($request->user())->map(function ($session) use ($request): object {

            /** @var UserAgent $agent */
            /** @phpstan-ignore-next-line property.nonObject */
            $agent = tap(new UserAgent(), static fn ($agent) => $agent->setUserAgent($session->user_agent));

            return (object) [
                'agent' => [
                    'is_desktop' => $agent->isDesktop(),
                    'platform' => $agent->platform(),
                    'browser' => $agent->browser(),
                ],

                /** @phpstan-ignore-next-line property.nonObject */
                'ip_address' => $session->ip_address,

                /** @phpstan-ignore-next-line property.nonObject */
                'is_current_device' => $session->id === $request->session()->getId(),

                /** @phpstan-ignore-next-line property.nonObject */
                'last_active' => Carbon::createFromTimestamp($session->last_activity)->diffForHumans(),
            ];
        });

        return Inertia::render('user-profile/session', compact('browsers'));
    }

    /**
     * @throws AuthenticationException
     * @throws ValidationException
     */
    public function destroy(Request $request, StatefulGuard $guard, DeleteOtherBrowserSession $browserSession): RedirectResponse
    {
        /** @var User $user */
        $user = $request->user();

        /** @var string $password */
        $password = $request->input('password');

        $confirmed = app(ConfirmPassword::class)(
            $guard, $user, $password
        );

        if (! $confirmed) {
            throw ValidationException::withMessages([
                'password' => __('The password is incorrect.'),
            ]);
        }

        $guard->logoutOtherDevices($password);

        $browserSession->handle($request);

        return back(303);
    }
}
