<?php

namespace App\Models;

use App\Trait\FilterByShopId;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Sale extends Model
{
    use HasFactory, SoftDeletes,FilterByShopId;
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
}