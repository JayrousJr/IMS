<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;

class RegisterRequest extends FormRequest
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
            // 'name' => 'required|string|max:255',
            // 'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            // "domain" => ["required", "string",],
            // "shop_name" => ["required", "string", "min:3", "max:30"],
            // "location" => ["required", "string", "min:3", "max:50"],
            // "phone" => ["required", "string", "min:10", "max:17"],
            // 'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            "domain" => 'required|numeric',
            "shop_name" => ["required", "string", "min:3", "max:30"],
            "location" => ["required", "string", "min:3", "max:50"],
            "phone" => ["required", "string", "min:10", "max:17"],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ];
    }
}