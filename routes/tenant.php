<?php

declare(strict_types=1);

use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\FianancialStatementCOntroller;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\PermissionsController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\RoutingController;
use App\Http\Controllers\SaleDetailsController;
use App\Http\Controllers\SalesController;
use App\Http\Controllers\SettingsControler;
use App\Http\Controllers\StockController;
use App\Http\Controllers\SuppliersController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Stancl\Tenancy\Middleware\InitializeTenancyByDomain;
use Stancl\Tenancy\Middleware\PreventAccessFromCentralDomains;

/*
|--------------------------------------------------------------------------
| Tenant Routes
|--------------------------------------------------------------------------
|
| Here you can register the tenant routes for your application.
| These routes are loaded by the TenantRouteServiceProvider.
|
| Feel free to customize them however you want. Good luck!
|
*/

Route::middleware([
    'web',
    InitializeTenancyByDomain::class,
    PreventAccessFromCentralDomains::class,
])->group(function () {
    Route::get("/", [RoutingController::class, "dashboard"])->name("dashboard");
    // Category Routes Starts
    Route::get("/categories", [CategoriesController::class, "index"])->name("category.index");
    Route::get("/category/{id}", [CategoriesController::class, "destroy"])->name("category.destroy");
    Route::get("/category/{id}/view", [CategoriesController::class, "show"])->name("category.show");
    Route::post("/category/save", [CategoriesController::class, "store"])->name("category.store");
    Route::get("/category/create/new", [CategoriesController::class, "create"])->name("category.create");
    Route::put("/category/{id}/edit", [CategoriesController::class, "update"])->name("category.update");
    // Category Routes Ends

    // Sales Routes Starts
    Route::get("/sales", [SalesController::class, "index"])->name("sale.index");
    // Sales Routes Ends

    // Customer Routes Starts
    Route::get("/customers", [CustomerController::class, "index"])->name("customer.index");
    // Customer Routes Ends

    // Category Routes Starts
    Route::get("/finance", [FianancialStatementCOntroller::class, "index"])->name("finance.index");
    // CategorFinancey Routes Ends

    // Orders Routes Starts
    Route::get("/orders", [OrdersController::class, "index"])->name("order.index");
    // Orders Routes Ends

    // Permissions Routes Starts
    Route::get("/permissions", [PermissionsController::class, "index"])->name("permission.index");
    // Permissions Routes Ends

    // Products Routes Starts
    Route::get("/products", [ProductController::class, "index"])->name("product.index");
    Route::get("/product/create", [ProductController::class,"create"])->name("product.create");
    Route::get("/product/{id}/view", [ProductController::class,"show"])->name("product.show");
    Route::put("/product/{id}/edit", [ProductController::class,"update"])->name("product.edit");
    Route::post("/product/save", [ProductController::class,"store"])->name("product.store");
    Route::get("/product/{id}", [CategoriesController::class, "destroy"])->name("product.destroy");

    // Products Routes Ends

    // Role Routes Starts
    Route::get("/role", [RolesController::class, "index"])->name("role.index");
    // Role Routes Ends


    // Stock Routes Starts
    Route::get("/stock", [StockController::class, "index"])->name("stock.index");
    // Stock Routes Ends 


    // Setting Routes Starts
    Route::get("/settings", [SettingsControler::class, "index"])->name("setting.index");
    // Setting Routes Ends

    // Suppliers Routes Starts
    Route::get("/suppliers", [SuppliersController::class, "index"])->name("supplier.index");
    // Suppliers Routes Ends

    // users Routes Starts
    Route::get("/users", [UserController::class, "index"])->name("user.index");
    // users Routes Ends

});