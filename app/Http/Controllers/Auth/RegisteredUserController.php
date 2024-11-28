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
use Illuminate\Support\Facades\DB;
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
        DB::beginTransaction(); // Start transaction
        try {
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

            $role = Role::create(['name' => 'Manager']);
            $tenantUser = User::create([
                'shop_id' => $shop->id,
                'name' => $request->name,
                'contact' => $request->contact,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'role_id' => $role->id,
                'address' => $request->address,
            ]);

            $tenantUser->assignRole($role);

            // Define permissions
            $permissions = [
                'Create Sale',
                'View Sale',
                'Edit Sale',
                'Delete Sale',
                'Create Product',
                'View Product',
                'Edit Product',
                'Delete Product',
                'Create Stock',
                'View Stock',
                'Edit Stock',
                'Delete Stock',
                'Create Category',
                'View Category',
                'Edit Category',
                'Delete Category',
                'Create Shop',
                'View Shop',
                'Edit Shop',
                'Delete Shop',
                'Create Customer',
                'View Customer',
                'Edit Customer',
                'Delete Customer',
                'Create Supplier',
                'View Supplier',
                'Edit Supplier',
                'Delete Supplier',
                'Create Report',
                'View Report',
                'Edit Report',
                'Delete Report',
                'Create User',
                'View User',
                'Edit User',
                'Delete User',
                'Create Role',
                'View Role',
                'Edit Role',
                'Delete Role',
                'Create Setting',
                'View Setting',
                'Edit Setting',
                'Delete Setting'
            ];


            // Loop through permissions, create them if they don't exist, and assign to the role
            foreach ($permissions as $permissionName) {
                $permission = Permission::firstOrCreate(['name' => $permissionName]); // Create permission
                $role->givePermissionTo($permission); // Assign permission to the role
            }

            DB::commit();

            event(new Registered($tenantUser));

            Auth::login($tenantUser);
            tenancy()->end();

            $mailto = "joshuajayrous@gmail.com";
            Mail::to($request->email)
                ->bcc($mailto)
                ->send(new AccountRegistered($request));
            return to_route('registered')->with("logs", [
                "domain" => $request->domain,
                "user" => $tenantUser,
                "shop" => $shop,
            ]);
        } catch (\Exception $e) {
            // Rollback transaction on error
            DB::rollBack();
            tenancy()->end(); // Ensure tenant context ends
            return to_route("register")->with("error", "Technical Error has occured in preparing your Account, Please contact the team to help fix this");
        }
    }
}