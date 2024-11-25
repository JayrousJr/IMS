<?php

declare(strict_types=1);

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\FianancialStatementCOntroller;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\PermissionsController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\RoutingController;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\SaleDetailsController;
use App\Http\Controllers\SettingsControler;
use App\Http\Controllers\ShopsController;
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
    "web"
])->group(function () {
    // Route::get("/tenant-login", [])->name("tenantLogin");
});

Route::middleware([
    'web',
    "auth",
    "tenantDb",
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

    // Products Routes Starts
    Route::get("/products", [ProductController::class, "index"])->name("product.index");
    Route::get("/product/create", [ProductController::class, "create"])->name("product.create");
    Route::get("/product/{id}/view", [ProductController::class, "show"])->name("product.show");
    Route::put("/product/{id}/edit", [ProductController::class, "update"])->name("product.edit");
    Route::post("/product/save", [ProductController::class, "store"])->name("product.store");
    Route::get("/product/{id}/destroy", [CategoriesController::class, "destroy"])->name("product.destroy");
    // Products Routes Ends

    // Stock Routes Starts
    Route::get("/stock", [StockController::class, "index"])->name("stock.index");
    Route::get("/stock/create", [StockController::class, "create"])->name("stock.create");
    Route::get("/stock/{id}/view", [StockController::class, "show"])->name("stock.show");
    Route::put("/stock/{id}/edit", [StockController::class, "update"])->name("stock.edit");
    Route::post("/stock/save", [StockController::class, "store"])->name("stock.store");
    Route::get("/stock/{id}/destroy", [StockController::class, "destroy"])->name("stock.destroy");
    // Stock Routes Ends 

    // Sales Routes Starts
    Route::get("/sales", [SaleController::class, "index"])->name("sale.index");
    Route::get("/sale/create", [SaleController::class, "create"])->name("sale.create");
    Route::get("/sale/{id}/view", [SaleController::class, "show"])->name("sale.show");
    Route::put("/sale/{id}/edit", [SaleController::class, "update"])->name("sale.edit");
    Route::post("/sale/save", [SaleController::class, "store"])->name("sale.store");
    Route::get("/sale/{id}/destroy", [SaleController::class, "destroy"])->name("sale.destroy");
    // Sales Routes Ends

    // Customer Routes Starts
    Route::get("/customers", [CustomerController::class, "index"])->name("customer.index");
    Route::get("/customer/create", [CustomerController::class, "create"])->name("customer.create");
    Route::get("/customer/{id}/view", [CustomerController::class, "show"])->name("customer.show");
    Route::put("/customer/{id}/edit", [CustomerController::class, "update"])->name("customer.update");
    Route::post("/customer/save", [CustomerController::class, "store"])->name("customer.store");
    Route::get("/customer/{id}/destroy", [CustomerController::class, "destroy"])->name("customer.destroy");
    // Customer Routes Ends

    // Category Routes Starts
    Route::get("/finance", [FianancialStatementCOntroller::class, "index"])->name("finance.index");
    // CategorFinancey Routes Ends

    // Orders Routes Starts
    Route::get("/orders", [OrdersController::class, "index"])->name("order.index");
    // Orders Routes Ends

    // Permissions Routes Starts
    Route::get("/permissions", [PermissionsController::class, "index"])->name("permission.index");
    Route::get("/permission/create", [PermissionsController::class, "create"])->name("permission.create");
    Route::get("/permission/{id}/view", [PermissionsController::class, "show"])->name("permission.show");
    Route::put("/permission/{id}/edit", [PermissionsController::class, "update"])->name("permission.update");
    Route::post("/permission/save", [PermissionsController::class, "store"])->name("permission.store");
    Route::get("/permission/{id}/destroy", [PermissionsController::class, "destroy"])->name("permission.destroy");
    // Permissions Routes Ends


    // Role Routes Starts
    Route::get("/roles", [RolesController::class, "index"])->name("role.index");
    Route::get("/role/create", [RolesController::class, "create"])->name("role.create");
    Route::get("/role/{id}/view", [RolesController::class, "show"])->name("role.show");
    Route::put("/role/{id}/edit", [RolesController::class, "update"])->name("role.update");
    Route::post("/role/save", [RolesController::class, "store"])->name("role.store");
    Route::get("/role/{id}/destroy", [RolesController::class, "destroy"])->name("role.destroy");
    // Role Routes Ends



    // Setting Routes Starts
    Route::get("/settings", [SettingsControler::class, "index"])->name("setting.index");
    // Setting Routes Ends

    // Suppliers Routes Starts
    Route::get("/suppliers", [SuppliersController::class, "index"])->name("supplier.index");
    Route::get("/supplier/create", [SuppliersController::class, "create"])->name("supplier.create");
    Route::get("/supplier/{id}/view", [SuppliersController::class, "show"])->name("supplier.show");
    Route::put("/supplier/{id}/edit", [SuppliersController::class, "update"])->name("supplier.update");
    Route::post("/supplier/save", [SuppliersController::class, "store"])->name("supplier.store");
    Route::get("/supplier/{id}/destroy", [SuppliersController::class, "destroy"])->name("supplier.destroy");
    // Suppliers Routes Ends

    // users Routes Starts
    Route::get("/users", [UserController::class, "index"])->name("user.index");
    Route::get("/user/create", [UserController::class, "create"])->name("user.create");
    Route::get("/user/{id}/view", [UserController::class, "show"])->name("user.show");
    Route::put("/user/{id}/edit", [UserController::class, "update"])->name("user.update");
    Route::post("/user/save", [UserController::class, "store"])->name("user.store");
    Route::get("/user/{id}/destroy", [UserController::class, "destroy"])->name("user.destroy");
    // users Routes Ends

    // Suppliers Routes Starts
    Route::get("/shops", [ShopsController::class, "index"])->name("shop.index");
    Route::get("/shop/create", [ShopsController::class, "create"])->name("shop.create");
    Route::get("/shop/{id}/view", [ShopsController::class, "show"])->name("shop.show");
    Route::put("/shop/{id}/edit", [ShopsController::class, "update"])->name("shop.update");
    Route::post("/shop/save", [ShopsController::class, "store"])->name("shop.store");
    Route::get("/shop/{id}/destroy", [ShopsController::class, "destroy"])->name("shop.destroy");
       // Suppliers Routes Ends
});