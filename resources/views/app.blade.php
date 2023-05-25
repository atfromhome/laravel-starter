<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Psanan') }}</title>

    <!-- Scripts -->
    @viteReactRefresh
    @vite(['resources/ts/app.tsx', "resources/ts/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>
