<?php

declare(strict_types=1);

namespace App\Actions\Fortify;

use App\Models\User;

final readonly class DeleteUser
{
    public function delete(User $user): void
    {
        $user->tokens()->delete();

        $user->delete();
    }
}
