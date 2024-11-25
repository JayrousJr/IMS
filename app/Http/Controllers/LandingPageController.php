<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class LandingPageController extends Controller
{
    function home() {
        $usersCount = User::all()->count();
            return inertia("Landing/Home",[
                "usersCount" => $usersCount,
            ]);
    }
    function start() {
        return inertia("Landing/GetStarted");
    }
    function registered() {
        return inertia("Landing/Registered");
    }
    function domain() {
        return inertia("Landing/GetDomain");
    }
    function searchdomain(Request $request) {
        $request->validate([
            "email"=>"required|email",
        ]);
        $email = $request->email;
        $user = User::where("email",$email);
        if($user->exists()){
           $id = $user->first()->id;
           $data = $user->findOrFail($id);
           $domain = $data->domain;
           return to_route("domain")->with("domain",$domain);
        }
        else
            return to_route("domain")->with("not_found","This email is not recognized");
    }
}