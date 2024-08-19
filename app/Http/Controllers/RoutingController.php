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
        return inertia("system/Dashboard");
    }

    function customers()
    {
        return inertia("system/Customers");
    }
    function finance()
    {
        return inertia("system/Finantial");
    }
    function orders()
    {
        return inertia("system/Orders");
    }
    function permissions()
    {
        return inertia("system/Permisiions");
    }
    function products()
    {
        return inertia("system/Products");
    }
    function role()
    {
        return inertia("system/Role");
    }
    function settings()
    {
        return inertia("system/Settings");
    }
    function stock()
    {
        return inertia("system/Stock");
    }
    function suppliers()
    {
        return inertia("system/Supplier");
    }
    function users()
    {
        return inertia("system/Users");
    }
}