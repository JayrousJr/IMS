<?php

namespace App\Http\Controllers;

use App\Http\Requests\RoleRequest;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\RoleResource;
use App\Http\Resources\ShopResource;
use App\Http\Resources\UserResource;
use App\Models\Role;
use App\Models\Shop;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::query()->latest()->paginate(10);
        return inertia("Resources/UsersResource/UserList",[
            "users" => UserResource::collection($users),
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $shops = Shop::all();
        $roles = Role::all();
            return inertia("Resources/UsersResource/UserCreate",[
            "shops" => ShopResource::collection($shops),
            "roles" => RoleResource::collection($roles),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $user = new User();
        $user->fill($request->validated());
        $role = Role::findOrFail($request->role_id);
        $user->assignRole($role);
        $user->save();
        return to_route("user.index")->with("success", "New user has been added successfully");
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user = User::findOrFail($id);
        $shop = Shop::all();        
        $roles = Role::all();
        return inertia("Resources/UsersResource/UserView", [
            "users" => new UserResource($user),
            "shops" => ShopResource::collection($shop),     
            "roles" => RoleResource::collection($roles),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, $id)
    {
        $validated = $request->validated();

        $user = User::findOrFail($id);

        $user->update($validated);
        $user->save();
 
        if($user->id === Auth::user()->id){
             Auth::guard('web')->logout();
             $request->session()->invalidate();
             $request->session()->regenerateToken();
            return back();
        }
        
        return to_route("user.index")->with("success", "User Details has been updated successfully");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return to_route("user.index")->with("success", "User has been deleted successifully");
    }
}