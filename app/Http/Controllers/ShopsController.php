<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use App\Http\Requests\StoreShopRequest;
use App\Http\Requests\UpdateShopRequest;
use App\Http\Resources\ShopResource;

class ShopsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $shops = Shop::query()->latest()->get();
        return inertia("Resources/ShopResource/ShopList",[
            "shops" => ShopResource::collection($shops)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Resources/ShopResource/ShopCreate");

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreShopRequest $request)
    {
        $shop = new Shop();
        $shop->fill($request->validated());

        // dd($shop);
       $shop->save();
        return to_route("shop.index")->with("success", "New Shop has been added successfully");
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $shop = Shop::findOrFail($id);
        return inertia("Resources/ShopResource/ShopView", [
            "shop" => new ShopResource($shop)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Shop $shop)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateShopRequest $request, $id)
    {
        $shop = Shop::findOrFail($id);
        $shop->update($request->validated());
        $shop->save();
        return to_route("shop.index")->with("success", "Shop Details has been updated successfully");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Shop $shop)
    {
        //
    }
}