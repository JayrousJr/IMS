<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            "shop" => new ShopResource($this->userToShop),
            "name" => $this->name,
            "suspended" => $this->suspended,
            "email" => $this->email,
            "role" => new RoleResource($this->myRole),
            "phone" => $this->contact,
        ];
    }
}