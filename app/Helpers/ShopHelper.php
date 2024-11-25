<?php
namespace App\Helpers;

use App\Models\Shop;
use Illuminate\Support\Facades\Auth;

/**
 * Return the Shop id that is currently enrolled to the authenticated user
 */ 
function shop()
{
    $shopId = Auth::user()->shop_id;
    return json_decode(response()->json($shopId)->getContent());
}