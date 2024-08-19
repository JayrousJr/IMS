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
        $categories = Category::query()->latest()->paginate(5);
        return inertia(
            "system/Categories",
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
        //
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
        dd($category);
        return inertia(
            "system/Categories",
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
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category, $id)
    {
        dd($id);
    }
}