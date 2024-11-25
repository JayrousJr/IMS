<?php

namespace App\Http\Requests;

use App\Models\Stock;
use Illuminate\Foundation\Http\FormRequest;

class StoreStockRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => "required|string|min:3|max:255|unique:". Stock::class,
            "category_id" => "required|numeric",
            "supplier_id" => "required|numeric",
            "buying_price" => "required|numeric",
            "selling_price" => "required|numeric",
            "description" => "required|string|min:3|max:1500",
            "expiry_date" => "required|string",
            "initial_quantity" => "required|string",
            "manufacturer_name" => "required|string",
            "manufacture_date" => "required|string",
            "entry_date" => "required|string",
            "batch_no" => "required|string",
        ];
    }
} 