<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use App\Models\Stock;
use App\Http\Requests\StoreStockRequest;
use App\Http\Requests\UpdateStockRequest;
use App\Http\Resources\CategoriesResource;
use App\Http\Resources\StockResource;
use App\Http\Resources\SupplierResource;
use App\Models\Category;
use App\Models\Supplier;

use function App\Helpers\shop;

class StockController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $stockData = Stock::all();
        return inertia("Resources/StocksResource/StockList", [
            "stocks" => StockResource::collection($stockData),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::query()->latest()->get();
        $suplliers = Supplier::query()->latest()->get();
        return inertia("Resources/StocksResource/StockCreate", [
            "categories" => CategoriesResource::collection($categories),
            "suplliers" => SupplierResource::collection($suplliers),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStockRequest $request)
    {
        $stock = new Stock();
        $stock->fill($request->validated());
        $stock->shop_id = shop();
        $stock->available_quantity = $stock->initial_quantity;
        // Validate shop_id
        if (!Shop::find($stock->shop_id) || Shop::find($stock->shop_id) === null) {
            return response()->json(["error" => "Looks like you are not registered to a shop, Invalid Shop ID!"], 422);
        }
        $stock->save();
        return to_route("stock.index")->with("success", "New Produc has been added to stock successfully");
    }

    /**
     * Display the specified resource.
     */
    public function show(Stock $stock, $id)
    {
        $stock = Stock::findOrFail($id);
        $categories = Category::query()->latest()->get();   
        $suplliers = Supplier::query()->latest()->get();
        return inertia("Resources/StocksResource/StockView", [
            "categories" => CategoriesResource::collection($categories),
            "stock" => new StockResource($stock),
            "suplliers" => SupplierResource::collection($suplliers),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Stock $stock)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStockRequest $request, $id)
    {
        $stock = Stock::findOrFail($id);
        $stock->update($request->validated());
        $stock->available_quantity = $stock->initial_quantity;
        $stock->save();
        return to_route("stock.index")->with("success", "Stock Details has been updated successfully");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Stock $stock)
    {
        //
    }
}