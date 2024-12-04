<?php

namespace App\Http\Controllers;

use App\Http\Resources\CustomerResource;
use App\Http\Resources\ProductResource;
use App\Http\Resources\SaleResource;
use App\Models\Customer;
use App\Models\Products;
use App\Models\Sale;
use App\Models\SaleDetail;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

use function App\Helpers\shop;

class SaleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sales = Sale::query()->latest()->get();
        return inertia("Resources/SalesResource/SalesList", [
            "sales" => SaleResource::collection($sales)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $product = Products::query()->where("available_quantity", ">", 0)->latest()->get();
        $customer = Customer::all();
        return inertia("Resources/SalesResource/SaleCreate", [
            "products" => ProductResource::collection($product),
            "customers" => CustomerResource::collection($customer)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'customer_id' => 'required|exists:customers,id',
            'soldProducts' => 'required|array',
            'soldProducts.*.product_id' => 'required|exists:products,id',
            'soldProducts.*.quantity' => 'required|integer|min:1',
        ], [
            'soldProducts.*.product_id.required' => "Please select the product",
            'customer_id' => "Please select the customer"
        ]);

        DB::beginTransaction();
        try {
            $total = $request->input('total_amount') * 100 / (100 - $request->input('discount'));
            $receipt = "IMS" . Date("ymis");
            $user_id = Auth::user()->id;
            $sale = Sale::create([
                "customer_id" => $request->input('customer_id'),
                "discounted_amount" => $request->input('total_amount'),
                "total_amount" => $total,
                "discount" => $request->input('discount'),
                "status" => "Success",
                "shop_id" => shop(),
                "receipt" => $receipt,
                "user_id" => $user_id,
            ]);
            foreach ($request->soldProducts as $product) {
                $productModel = Products::findOrFail($product["product_id"]);
                $productModel->update([
                    "available_quantity" => $productModel->available_quantity - $product["quantity"],
                ]);
               
                SaleDetail::create([
                    "sale_id" => $sale->id,
                    "product_id" => $product["product_id"],
                    "quantity" => $product["quantity"],
                    "price" => $product["price"],
                    "total" => $product["amount"],
                ]);
            }
            DB::commit();
            return to_route("sale.index")->with("success", "Product has been Sold successfully");
        } catch (Exception $e) {
            DB::rollBack();
            return to_route("sale.index")->with("error", "Failed to record the sale, an internal error occured");
        }

    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $sale = Sale::with("saleDetails")->findOrFail($id);
        return inertia("Resources/SalesResource/SalesView", [
            "sale" => new SaleResource($sale),
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}