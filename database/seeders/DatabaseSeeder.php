<?php

declare(strict_types=1);

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Factories\UserFactory;

final class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        UserFactory::new([
            'name' => 'Administrator',
            'email' => 'admin@fromhome.dev',
        ])->createOne();
    }
}
