<?php

namespace App\Models;

use App\Trait\FilterByShopId;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Customer extends Model
{
    use HasFactory, SoftDeletes, FilterByShopId;

    protected $fillable = [
        "name",
        "email",
        "phone",
        "address",
    ];
    public function shops()
    {
        return $this->belongsTo(Shop::class, "shop_id", "id");
    }
}