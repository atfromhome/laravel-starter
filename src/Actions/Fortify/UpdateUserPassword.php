<?php

declare(strict_types=1);

namespace App\Actions\Fortify;

use App\Models\User;
use Laravel\Fortify\Rules\Password;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Laravel\Fortify\Contracts\UpdatesUserPasswords;

final class UpdateUserPassword implements UpdatesUserPasswords
{
    /**
     * @throws ValidationException
     */
    public function update(User $user, array $input): void
    {
        Validator::make($input, [
            'current_password' => [
                'required', 'string', 'current_password:web',
            ],
            'password' => [
                'required', 'string', new Password(), 'confirmed',
            ],
        ], [
            'current_password.current_password' => __('The provided password does not match your current password.'),
        ]);

        $user->forceFill([
            'password' => Hash::make($input['password']),
        ])->save();
    }
}
