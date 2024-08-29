<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Products extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        "name",
        "category_id",
        "price",
        "description",
        "expiry_date",
    ];

    public function productCategory() {
        return $this->belongsTo(Category::class,"category_id","id");
    }
}