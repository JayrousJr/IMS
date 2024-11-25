<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Trait\FilterByShopId;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasRoles;
    // protected $connection = 'mysql';
    /**
     * The attributes that are mass assignable. 
     *
     * @var array<int, string>
     */
    // protected $connection = "tenant";
   
    protected $fillable = [
        "shop_id",
        "name",
        "email",
        "suspended",
        "role_id",
        "role",
        "contact",
        'password',
        "address",
        "shop_name",
        "domain"
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
    public function tenants(): BelongsToMany
    {
        return $this->belongsToMany(Tenant::class);
    }
    public function userToShop() {
        return $this->belongsTo(Shop::class,"shop_id","id");
    }
    public function myRole()
    {
        return $this->belongsTo(Role::class, "role_id", "id");
    }
    public function stockQuantity($stockId)
    {
        $stock = Stock::find($stockId);
        return $stock->available_quantity;
    }
    
}