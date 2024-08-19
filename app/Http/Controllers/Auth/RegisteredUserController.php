<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)//: RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            "domain" => ["required", "string", "min:3", "max:10"],
            "shop_name" => ["required", "string", "min:3", "max:30"],
            "location" => ["required", "string", "min:3", "max:50"],
            "phone" => ["required", "string", "min:10", "max:17"],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        // dd("passed validation");

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        // dd($request->shop_name);
        // dd("passed user creation");

        $tenant = Tenant::create([
            'name' => Str::slug($request->domain),
            'location' => $request->location,
            'phone' => $request->phone,
            'email' => $request->email,
            'shop_name' => $request->shop_name,
        ]);
        // dd("passed tenent creation");

        // $d_name = "$request->domain.localhost";

        // $tenant = Tenant::create(['id' => 'foo1']);
        // $tenant->domains()->create(['domain' => 'foo1.localhost']);
        $tenant->domains()->create(['domain' => $request->domain . '.' . config('tenancy.central_domains')[0]]);
        // dd("passed domain creation");
        $user->tenants()->attach($tenant->id);
        tenancy()->initialize($tenant);
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
            'role' => "Manager",
        ]);
        tenancy()->end();
        // dd("passed user in tenancy creation");

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
        // return redirect(tenant_route($d_name, 'dashboard'));

        // return redirect('http://' . $request->domain . '.' . config('tenancy.central_domains')[0] . '/dashboard');
        // return redirect(tenant_route($request->domain . '.' . config('tenancy.central_domains')[0], 'dashboard'));
    }
}