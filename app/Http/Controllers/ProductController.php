<?php
namespace App\Http\Controllers;
use App\Models\Products;
use App\Http\Requests\StoreProductsRequest;
use App\Http\Requests\UpdateProductsRequest;
use App\Http\Resources\CategoriesResource;
use App\Http\Resources\ProductResource;
use App\Http\Resources\StockResource;
use App\Models\Category;
use App\Models\Shop;
use App\Models\Stock;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use function App\Helpers\shop;

class ProductController extends Controller
{ /** * Display a listing of the resource. */
    public function index()
    {
        $products = Products::query()->latest()->paginate(5);
        return inertia("Resources/ProductResource/ProductsList", [
            "product" => ProductResource::collection($products),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $stock = Stock::doesntHave("productOfStock")->latest()->get();
        return inertia("Resources/ProductResource/ProductCreate", [
            "stocks" => StockResource::collection($stock),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductsRequest $request)
    {
        $product = new Products();
        $product->fill($request->validated());
        $product->shop_id = shop();
        /**
         * The following code checks the specific stock from which the
         * product is being created and updates the stock quantity accordingly.
         */
        $stockID = $product->stock_id;
        $currentStock = Stock::findOrFail($stockID);
        $enteredQuantity = $product->available_quantity;
        $stockQuantity = $currentStock->available_quantity;
        $newStockQuantity = $stockQuantity - $enteredQuantity;

        $currentStock->update(['available_quantity' => $newStockQuantity]);
        $product->save();
        return to_route("product.index")->with("success", "Product has been created successfully");
    }
    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $product = Products::findOrFail($id);
        $stock = Stock::all();
        return inertia("Resources/ProductResource/ProductView", [
            "product" => new ProductResource( $product),
            "stocks" => StockResource::collection($stock),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Products $product)
    {
        $categories = Category::query()->latest()->get();
        return inertia("Resources/ProductResource/ProductEdit", [
            "categories" => CategoriesResource::collection($categories),
            "product" => new ProductResource($product)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductsRequest $request, $id)
    {
        $requestInput = $request->validated();
        $product = Products::findOrFail($id);
        /**
         * Get the stock id and stock quantity
         */ 
        $stockID = $product->stock_id;
        $currentStock = Stock::findOrFail($stockID);
        $stockQuantity = $currentStock->available_quantity;
        $stockInitialQuantity = $currentStock->initial_quantity;
        /**
         * Get the previous new stock quantity
         */ 
        $previousQuantity = $product->available_quantity;
        $newQuantity = $requestInput['available_quantity'];

        /**
         * The following is the algorithm to efficiently make the update basing 
         * on the previous and the new entered stock values
         */ 
        $newStockQuantity = $stockQuantity + $previousQuantity - $newQuantity;
        $newInitialStockQuantity = $stockInitialQuantity + $previousQuantity - $newQuantity;
        $currentStock->update(['available_quantity' => $newStockQuantity]);
        $currentStock->update(['initial_quantity' => $newInitialStockQuantity]);
        $product->fill($requestInput);
        $product->save();

         
        return to_route("product.index")->with("success", "Product has been updated successfully");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Products $product)
    {
        // Implement destroy method
        $product->delete();
        return to_route("product.index")->with("success", "Product has been deleted successfully");
    }
}