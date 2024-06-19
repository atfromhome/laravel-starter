<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Actions\Fortify\DeleteUser;
use Symfony\Component\HttpFoundation;
use Illuminate\Contracts\Auth\StatefulGuard;
use Laravel\Fortify\Actions\ConfirmPassword;
use Illuminate\Validation\ValidationException;

final class CurrentUserInfoController extends Controller
{
    public function show(Request $request): Response
    {
        $user = $request->user();

        return Inertia::render('user-profile/profile', [
            'user' => $user,
        ]);
    }

    /**
     * @throws ValidationException
     */
    public function destroy(Request $request, StatefulGuard $guard, DeleteUser $deleteUser): HttpFoundation\Response
    {
        /** @var User $user */
        $user = $request->user();

        /** @var string|null $password */
        $password = $request->input('password');

        $confirmed = app(ConfirmPassword::class)(
            $guard, $user, $password
        );

        if (! $confirmed) {
            throw ValidationException::withMessages([
                'password' => __('The password is incorrect.'),
            ]);
        }

        $guard->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        $deleteUser->delete($user);

        return Inertia::location(
            url('/')
        );
    }
}
