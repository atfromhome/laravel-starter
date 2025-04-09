<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Foundation\Auth;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

final class User extends Auth\User
{
    use HasApiTokens;
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory;
    use Notifiable;

    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * @return string[]
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
