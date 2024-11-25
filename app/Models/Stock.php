<?php

namespace App\Models;

use App\Trait\FilterByShopId;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Stock extends Model
{
    use HasFactory, SoftDeletes, FilterByShopId;
    protected $fillable = [
        'name',
        'shop_id',
        "category_id",
        "supplier_id",
        "buying_price",
        "selling_price", 
        "available_quantity",
        "description",
        "expiry_date",
        "batch_no",
        "initial_quantity",
        "manufacturer_name",
        "manufacture_date",
        "entry_date",
    ];

    public function category()
    {
        return $this->belongsTo(Category::class, "category_id", "id");
    }
    public function supplier()
    {
        return $this->belongsTo(Supplier::class, "supplier_id", "id");
    }
    public function shops()
    {
        return $this->belongsTo(Shop::class, "shop_id", "id");
    }
    public function productOfStock(){
        return $this->hasOne(Products::class);
    }

    /*
    *Accessor to calculate the remaning days until expire,
    It allows negative days for the expired products
    */ 

    public function getDaysUntilExpireAttribute(){
        $expireDate = Carbon::parse($this->expiry_date);
        return ceil( Carbon::now()->diffInDays($expireDate,false));
    }
}