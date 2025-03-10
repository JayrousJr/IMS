<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SaleDetail extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        "sale_id",
        "product_id",
        "quantity",
        "price",
        "total",
    ];

    public function sale()
    {
        return $this->belongsTo(Sale::class);
    }
    public function product()
    {
        return $this->belongsTo(Products::class, "product_id", "id");
    }
}