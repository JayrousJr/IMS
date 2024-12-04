<?php

namespace App\Models;

use App\Helpers\NumberFormatter;
use App\Trait\FilterByShopId;
use Carbon\Carbon;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Sale extends Model
{
    use HasFactory, SoftDeletes, FilterByShopId;
    protected $fillable = [
        "shop_id",
        "sale_id",
        "customer_id",
        "total_amount",
        "status",
        "receipt",
        "discounted_amount",
        "discount",
        "user_id"
    ];

    public function shops()
    {
        return $this->belongsTo(Shop::class, "shop_id", "id");
    }
    public function customer()
    {
        return $this->belongsTo(Customer::class, "customer_id", "id");
    }
    public function user()
    {
        return $this->belongsTo(User::class, "user_id", "id");
    }
    public function saleDetails()
    {
        return $this->hasMany(SaleDetail::class);
    }

    public function scopeThisWeek(Builder $query)
    {
        $startOfWeek = Carbon::now()->startOfWeek();
        $endOfWeek = Carbon::now()->endOfWeek();
        return $query->whereBetween("created_at", [$startOfWeek, $endOfWeek])
        ->selectRaw('DATE(created_at) as date, SUM(discounted_amount) as total')
        ->groupBy('date')
        ->orderBy('date')->get()->map(function($item){
            return [
                'day' => Carbon::parse($item->date)->format('D'),
                'date' => $item->date,
                // 'total' => NumberFormatter::money($item->total),
                'total' =>$item->total,
            ];
        });
    }
}