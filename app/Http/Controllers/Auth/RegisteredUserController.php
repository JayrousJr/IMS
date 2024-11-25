<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Mail\AccountRegistered;
use App\Models\Permission;
use App\Models\Role;
use App\Models\Shop;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
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
    public function store(Request $request)
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            "contact" => 'required|string',
            "address" => 'required|string|max:255',
            "shop_name" => 'required|string|max:255',
            "shop_address" => 'required|string|max:255',
            "shop_contact" => 'required|string|max:255',
            "domain" => ["required", "string", "min:3", "max:10", "unique:domains,domain"],
        ]);
        // This code creates a user within the main database context
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'contact' => $request->contact,
            'password' => Hash::make($request->password),
            'role' => "IMS Manager",
            'shop_name' => $request->shop_name,
            'domain' => $request->domain . '.' . config('tenancy.central_domains')[0]
        ]);
        // This code creates a tenant in a main domain
        $tenant = Tenant::create([
            'name' => Str::slug($request->domain),
            'location' => $request->location,
            'phone' => $request->phone,
            'email' => $request->email,
            'shop_name' => $request->shop_name,
        ]);
        // this code throws an exception whentenant has failed to be created
        if (!$tenant) {
            throw new \Exception('Failed to create tenant');
        }
        // this code creates the domain of the so far created tenant
        $tenant->domains()->create(['domain' => $request->domain . '.' . config('tenancy.central_domains')[0]]);

        /**
         * this code initializes the tenants context by loading the tenant database and performs 
         * a set of actions like creating the user within the specific tenant database and cretting the shop immediately
         */
        tenancy()->initialize($tenant);

        $shop = Shop::create([
            "shop_name" => $request->shop_name,
            "shop_contact" => $request->shop_contact,
            "shop_address" => $request->shop_address,
        ]);

        if (!$shop) {
            throw new \Exception('Failed to create shop');
        }
        $role = Role::create(['name' => 'Manager']);
        $user = User::create([
            "shop_id" => $shop->id,
            'name' => $request->name,
            'contact' => $request->contact,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            "role_id" => 1,
            "address" => $request->address
        ]);
        $user->assignRole($role);

        // // Sale
        // Permission::create(['name' => 'Create Sale']);
        // Permission::create(['name' => 'View Sale']);
        // Permission::create(['name' => 'Edit Sale']);
        // Permission::create(['name' => 'Delete Sale']);
        // // Product
        // Permission::create(['name' => 'Create Product']);
        // Permission::create(['name' => 'View Product']);
        // Permission::create(['name' => 'Edit Product']);
        // Permission::create(['name' => 'Delete Product']);
        // // Stock
        // Permission::create(['name' => 'Create Stock']);
        // Permission::create(['name' => 'View Stock']);
        // Permission::create(['name' => 'Edit Stock']);
        // Permission::create(['name' => 'Delete Stock']);
        // // Category
        // Permission::create(['name' => 'Create Category']);
        // Permission::create(['name' => 'View Category']);
        // Permission::create(['name' => 'Edit Category']);
        // Permission::create(['name' => 'Delete Category']);
        // // Shop
        // Permission::create(['name' => 'Create Shop']);
        // Permission::create(['name' => 'View Shop']);
        // Permission::create(['name' => 'Edit Shop']);
        // Permission::create(['name' => 'Delete Shop']);
        // // Customer
        // Permission::create(['name' => 'Create Customer']);
        // Permission::create(['name' => 'View Customer']);
        // Permission::create(['name' => 'Edit Customer']);
        // Permission::create(['name' => 'Delete Customer']);
        // // Supplier
        // Permission::create(['name' => 'Create Supplier']);
        // Permission::create(['name' => 'View Supplier']);
        // Permission::create(['name' => 'Edit Supplier']);
        // Permission::create(['name' => 'Delete Supplier']);
        // // Report
        // Permission::create(['name' => 'Create Report']);
        // Permission::create(['name' => 'View Report']);
        // Permission::create(['name' => 'Edit Report']);
        // Permission::create(['name' => 'Delete Report']);
        // // User
        // Permission::create(['name' => 'Create User']);
        // Permission::create(['name' => 'View User']);
        // Permission::create(['name' => 'Edit User']);
        // Permission::create(['name' => 'Delete User']);
        // // Role
        // Permission::create(['name' => 'Create Role']);
        // Permission::create(['name' => 'View Role']);
        // Permission::create(['name' => 'Edit Role']);
        // Permission::create(['name' => 'Delete Role']);
        // // Setting
        // Permission::create(['name' => 'Create Setting']);
        // Permission::create(['name' => 'View Setting']);
        // Permission::create(['name' => 'Edit Setting']);
        // Permission::create(['name' => 'Delete Setting']);
        if (!$user) {
            throw new \Exception('Failed to create user');
        }

        event(new Registered($user));

        Auth::login($user);
        tenancy()->end();
        $mailto = "joshuajayrous@gmail.com";
        Mail::to($request->email)
            ->bcc($mailto)
            ->send(new AccountRegistered($request));
        return to_route('registered')->with("logs", [
            "domain" => $request->domain,
            "user" => $user,
            "shop" => $shop,
        ]);
        // return inertia("Landing/Registered",[
        //     "domain" => $request->domain,
        //     "user" => $user,
        //     "shop" => $shop,
        // ]);
    }
}