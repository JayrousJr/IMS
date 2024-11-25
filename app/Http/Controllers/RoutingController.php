<?php

namespace App\Http\Controllers;

class RoutingController extends Controller
{
    // function home()
    // {
    //     return inertia("system/Dashboard");
    // }
    function dashboard()
    {
        return inertia("Resources/Dashboard");
    }
}