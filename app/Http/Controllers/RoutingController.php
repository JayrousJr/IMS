<?php

namespace App\Http\Controllers;

use App\Http\Resources\StockResource;
use App\Models\Customer;
use App\Models\Products;
use App\Models\Sale;
use App\Models\SaleDetail;
use App\Models\Stock;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class RoutingController extends Controller
{
    // function home()
    // {
    //     return inertia("system/Dashboard");
    // }
    function dashboard()
    {
        $productCount = Stock::count();
        $salesCount = Sale::count();
        $users = User::count();
        $customers = Customer::count();
        $topProducts = SaleDetail::select('stocks.name as product_name', DB::raw('SUM(sale_details.quantity) as total_sold'))
            ->join('products', 'sale_details.product_id', '=', 'products.id') // Join with products
            ->join('stocks', 'products.stock_id', '=', 'stocks.id')           // Join with stocks
            ->groupBy('products.stock_id', 'stocks.name')                     // Group by stock_id and name
            ->orderByDesc('total_sold')
            ->limit(4)                                 // Order by the total sold
            ->get();
        $outStock = Stock::where("available_quantity", "<=", 20)->get();

        // dd($outStock);
        return inertia("Resources/Dashboard", [
            "productCount" => $productCount,
            "salesCount" => $salesCount,
            "topProducts" => $topProducts,
            "outStock" => StockResource::collection($outStock),
            "users" => $users,
            "customers" => $customers
        ]);
    }
}