<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FinancialStatement extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        "type",
        "period_start",
        "period_end",
        "data",
    ];
}