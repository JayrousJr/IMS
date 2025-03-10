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

use Milon\Barcode\DNS1D;
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
        $barcode = str_pad(mt_rand(1, 999999999999),12,'0', STR_PAD_LEFT);
        $stock->barcode = $barcode;
        // dd($stock);
        $stock->save();
        return to_route("stock.index")->with("success", "New Produc has been added to stock successfully");
    }

    /**
     * Display the specified resource.
     */
    public function show(Stock $stock, $id)
    {
        $stock = Stock::findOrFail($id);
        $barcode = new DNS1D();
        // $barcodeGen = $barcode->getBarcodePNG($stock->barcode, "C128");
        $barcodeGen = $barcode->getBarcodeSVG($stock->barcode, "EAN13");
        $categories = Category::query()->latest()->get();   
        $suplliers = Supplier::query()->latest()->get();
        return inertia("Resources/StocksResource/StockView", [
            "categories" => CategoriesResource::collection($categories),
            "stock" => new StockResource($stock),
            "suplliers" => SupplierResource::collection($suplliers),
            // "barcode" => 'data:image/png;base64,'.$barcodeGen
            "barcode" => 'data:image/png;base64,'.$barcodeGen
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
        $newQuantity = $request["available_quantity"];
        $prevInitialQ = $stock->initial_quantity;
        $prevAvQ = $stock->available_quantity;
        $updatedInitialQuantity = $prevInitialQ + $prevAvQ - $newQuantity;
        // dd("In ".$newQuantity,"Prev In" .$prevInitialQ,"Prev av: ".$prevAvQ,"Upd ".$updatedInitialQuantity);
        $stock->update($request->validated());
        $stock->update(['initial_quantity' => $updatedInitialQuantity]);
        
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