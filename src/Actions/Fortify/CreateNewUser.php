<?php

declare(strict_types=1);

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;
use Laravel\Fortify\Contracts\CreatesNewUsers;

final class CreateNewUser implements CreatesNewUsers
{
    /**
     * @param  string[]  $input
     *
     * @throws ValidationException
     */
    public function create(array $input): User
    {
        Validator::make($input, [
            'name' => [
                'required', 'string', 'max:255',
            ],
            'email' => [
                'required', 'string', 'email', 'max:255', Rule::unique(User::class),
            ],
            'password' => [
                'required', 'string', Password::required(), 'confirmed',
            ],
        ])->validate();

        /** @var User */
        return User::query()->create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
        ]);
    }
}
