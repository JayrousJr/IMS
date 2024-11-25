<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShopResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "shop_name" => $this->shop_name,
            "shop_address" => $this->shop_address,
            "shop_contact" => $this->shop_contact,
            "suspended" => $this->suspended,
        ];
    }
}