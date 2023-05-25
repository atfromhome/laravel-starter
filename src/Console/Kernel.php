<?php

declare(strict_types=1);

namespace App\Console;

use Illuminate\Foundation\Console;

final class Kernel extends Console\Kernel
{
    protected function commands(): void
    {
        $this->load(__DIR__ . '/Commands');
    }
}
