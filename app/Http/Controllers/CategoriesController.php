<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoriesResource;
use App\Models\Category;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::query()->latest()->paginate(10);
        return inertia(
            "Resources/CategoryResource/Categories",
            [
                "category" => CategoriesResource::collection($categories)
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Resources/CategoryResource/CategoryCreate");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        $data = $request->validated();
        $data = Category::create($data);
        return to_route("category.index")->with("success", "Category has been created successifully");
        // dd($data);
    }

    /**
     * Display the specified resource.
     */
    public function show($id, Category $category)
    {
        $category = Category::findOrFail($id);
        return inertia(
            "Resources/CategoryResource/CategoryView",
            [
                "category" => new CategoriesResource($category)
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, $id)
    {
        $category = Category::findOrFail($id);
        $category->update($request->validated());
         return to_route("category.index")->with("success", "Category has been updated successifully");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $category= Category::findOrFail($id);
        $category->delete();
        return to_route("category.index")->with("success", "Category has been deleted successifully");
    }
}