<?php

namespace App\Http\Middleware;

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'globaluserdata' => Auth::user() ? new UserResource($request->user()) : null,
            ],
            "flash" => [
                'success' => fn() => $request->session()->get("success"),
                'error' => fn() => $request->session()->get("error"),
                "logs" => fn() => $request->session()->get("logs"),
                "domain" => fn() => $request->session()->get("domain"),
                "not_found" => fn() => $request->session()->get("not_found"),
            ]
        ];

    }
}