<?php

namespace App\Http\Controllers;

use App\Models\Products;
use App\Http\Requests\StoreProductsRequest;
use App\Http\Requests\UpdateProductsRequest;
use App\Http\Resources\CategoriesResource;
use App\Http\Resources\ProductResource;
use App\Models\Category;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $product = Products::query()->latest()->paginate(5);
        return inertia("Resources/ProductResource/ProductsList",[
            "product" => ProductResource::collection($product),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::query()->latest()->get();
        return inertia("Resources/ProductResource/ProductCreate",[
            "categories" => CategoriesResource::collection($categories),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductsRequest $request)
    {
        $data = $request->validated();
        $data = Products::create($data);
        return to_route("product.index")->with("success", "Product has been created successifully");
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $categories = Category::query()->latest()->get();
        $product = Products::findOrFail($id);
        return inertia("Resources/ProductResource/ProductView",[
            "categories" => CategoriesResource::collection($categories),
            "product"=>new  ProductResource($product)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Products $products)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductsRequest $request, $id)
    {
         $product = Products::findOrFail($id);
        $product->update($request->validated());
        return to_route("product.index")->with("success", "Product has been updated successifully");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Products $products)
    {
        //
    }
}