<?php

namespace App\Models;

use App\Trait\FilterByShopId;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Products extends Model
{
    use HasFactory, SoftDeletes, FilterByShopId;
    protected $fillable = [
        "stock_id",
        "quantity",
        "initial_quantity",
        "available_quantity",
    ];

    public function stock()
    {
        return $this->belongsTo(Stock::class, "stock_id", "id");
    }
}