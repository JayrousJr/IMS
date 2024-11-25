<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SaleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "receipt" => $this->receipt,
            "user" => new UserResource($this->user),
            "amount" => $this->total_amount,
            "discounted" => $this->discounted_amount,
            "status" => $this->status,
            "id" => $this->id,
            "discount" => $this->discount,
            "date" => Carbon::parse($this->created_at)->format("d M Y"),
            "shops" => new ShopResource($this->shops),
            "customer" => new CustomerResource($this->customer),
            "saleDetails" => SaleDetailsResource::collection($this->saleDetails)
        ];
    }
}