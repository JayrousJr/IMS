<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSupplierRequest;
use App\Http\Resources\SupplierResource;
use App\Models\Supplier;
use Illuminate\Http\Request;

use function App\Helpers\shop;

class SuppliersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $supplier = Supplier::query()->latest()->get();
        // dd($supplier);
        return inertia("Resources/SupplierResource/SupplierList",[
            "suppliers" => SupplierResource::collection($supplier),
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Resources/SupplierResource/SupplierCreate");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSupplierRequest $request)
    {
        $supplier = new Supplier();
        $supplier->fill($request->validated());
        $supplier->shop_id = shop();

        // dd($supplier);
       $supplier->save();
        return to_route("supplier.index")->with("success", "New Supplier has been added to stock successfully");
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $supplier = Supplier::findOrFail($id);
        return inertia("Resources/SupplierResource/SupplierView", [
            "supplier" => new SupplierResource($supplier)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Supplier $supplier)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $supplier = Supplier::findOrFail($id);
        $supplier->update($request->all());
        $supplier->save();
        return to_route("supplier.index")->with("success", "Supplier Details has been updated successfully");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $supplier = Supplier::findOrFail($id);
        $supplier->delete();
        return to_route("supplier.index")->with("success", "Supplier Deleted Successiful");
    }
}