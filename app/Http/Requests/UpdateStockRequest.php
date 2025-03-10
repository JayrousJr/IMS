<?php

namespace App\Http\Requests;

use App\Models\Stock;
use Illuminate\Foundation\Http\FormRequest;

class UpdateStockRequest extends FormRequest
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
            "name" => "required|string|min:3|max:255",
            "category_id" => "required|numeric",
            "buying_price" => "required|numeric",
            "selling_price" => "required|numeric",
            "description" => "required|string|min:3|max:1500",
            "expiry_date" => "string",
            "available_quantity" => "required|string",
            "reorder_level" => "numeric"
        ];
    }
}