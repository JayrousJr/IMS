<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Shop extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        "shop_name",
        "suspended",
        "shop_address",
        "shop_contact",
    ];
    /**
     * Relationship showing the ownership od the shop to the user
     */
    public function shopToUser()
    {
        return $this->hasOne(User::class, "shop_id", "id");
    }
}