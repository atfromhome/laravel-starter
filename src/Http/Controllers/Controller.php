<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Routing;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

abstract class Controller extends Routing\Controller
{
    use AuthorizesRequests;
    use ValidatesRequests;
}
