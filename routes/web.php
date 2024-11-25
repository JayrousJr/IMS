<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoutingController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
// Route::get("/", [RoutingController::class, "home"])->name("home");
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

foreach (config('tenancy.central_domains') as $domain) {
    Route::domain($domain)->group(function () {
        Route::get("/", [LandingPageController::class, "home"])->name("home");

        Route::get("get-started", [LandingPageController::class, "start"])->name("start");

        Route::get("registered", [LandingPageController::class, "registered"])->name("registered");


        Route::get("register", [RegisteredUserController::class, "create"]);
        Route::get("my_domain", [LandingPageController::class, "domain"])->name("domain");
        Route::post("find_domain", [LandingPageController::class, "searchdomain"])->name("getdomain");
        Route::post("processing", [RegisteredUserController::class, "store"])->name(name: "registering");
    });
}

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';