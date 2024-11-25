<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StockResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "name" => $this->name,
            "id" => $this->id,
            'shop' => new ShopResource($this->shops),
            "supplier"=>new SupplierResource($this->supplier),
            "category" => new CategoriesResource($this->category),
            "buying_price" => $this->buying_price,
            "selling_price" => $this->selling_price,
            "description" => $this->description,
            "batch_no" => $this->batch_no,
            "initial_quantity" => $this->initial_quantity,
            "available_quantity" => $this->available_quantity,
            "manufacturer_name" => $this->manufacturer_name,
            "manufacture_date" => $this->manufacture_date,
            "entry_date" => $this->entry_date,
            "expiry_date" => $this->expiry_date,
            "daysToExpire" => $this->days_until_expire, //use the Accessor
        ];
    }
}