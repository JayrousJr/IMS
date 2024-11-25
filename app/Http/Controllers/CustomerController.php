<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCustomerRequest;
use App\Http\Requests\UpdateCustomerRequest;
use App\Http\Resources\CustomerResource;
use App\Models\Customer;
use Illuminate\Http\Request;

use function App\Helpers\shop;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $customer = Customer::query()->latest()->get();
        return inertia("Resources/CustomerResource/CustomersList",[
            "customer" => CustomerResource::collection($customer),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Resources/CustomerResource/CustomerCreate");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCustomerRequest $request)
    {

        $customer = new Customer();
        $customer->fill($request->validated());
        $customer->shop_id = shop();
        $customer->save();
        return to_route("customer.index")->with("success", "New Customer has been added successfully");
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $customer = Customer::query()->find($id);
        // dd($customer);
        return inertia("Resources/CustomerResource/CustomerView",[
            "customer" => new CustomerResource($customer),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Customer $customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCustomerRequest $request, $id)
    {
        $customer = Customer::findOrFail($id);
        $customer->update($request->validated());
        $customer->save();
        return to_route("customer.index")->with("success", "Customer Details has been updated successfully");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Customer $customer)
    {
        //
    }
}