<?php

namespace App\Trait;

use Illuminate\Database\Eloquent\Builder;

trait FilterByShopId
{
    protected static function boot() {
        parent::boot();

        self::creating(function($model){
                $model->shop_id = auth()->user()->shop_id;
        });
        self::addGlobalScope(function(Builder $builder){
            $builder->where("shop_id",auth()->user()->shop_id);
        });
    }
} 