<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class ProfileInformationController extends Controller
{
    public function show(Request $request): Response
    {
        $user = $request->user();

        return Inertia::render('profile', [
            'user' => $user
        ]);
    }
}
