<?php

namespace App\Models;

use App\Trait\FilterByShopId;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Supplier extends Model
{
    use HasFactory, SoftDeletes, FilterByShopId;
    protected $fillable = [
        "name",
        "email",
        "phone",
        "address",
    ];
}