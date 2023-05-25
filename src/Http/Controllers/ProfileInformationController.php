<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

final class ProfileInformationController extends Controller
{
    public function show(Request $request): Response
    {
        $user = $request->user();

        return Inertia::render('profile', [
            'user' => $user,
        ]);
    }
}
