<?php

namespace App\Http\Controllers;

use App\Helpers\NumberFormatter;
use App\Http\Resources\SaleResource;
use App\Http\Resources\StockResource;
use App\Models\Category;
use App\Models\Customer;
use App\Models\Products;
use App\Models\Sale;
use App\Models\SaleDetail;
use App\Models\Stock;
use App\Models\User;
use Carbon\Carbon;
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

        $stockDistribution = Stock::with('category')
            ->select('category_id', DB::raw('COUNT(*) as total_products'))
            ->groupBy('category_id')
            ->get()
            ->map(function ($stock) {
                return [
                    'category' => $stock->category->name, // Access category name
                    'total' => $stock->total_products,
                ];
            });
        $outStock = Stock::where("available_quantity", "<=", 20)->get();
        $recentSales = Sale::query()->latest()->limit(5)->get();
        $weekSales = Sale::thisWeek();
        // dd($weekSales);
        return inertia("Resources/Dashboard", [
            "productCount" => $productCount,
            "salesCount" => $salesCount,
            "topProducts" => $topProducts,
            "outStock" => StockResource::collection($outStock),
            "users" => $users,
            "customers" => $customers,
            "recentSales" => SaleResource::collection($recentSales),
            "thisWeekSales" => $weekSales,
            "stockDistribution" => $stockDistribution,
        ]);
    }
}