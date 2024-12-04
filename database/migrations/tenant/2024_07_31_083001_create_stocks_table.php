<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('stocks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('shop_id')->constrained();
            $table->foreignId("category_id")->constrained();
            $table->foreignId('supplier_id')->constrained();
            $table->string("name")->nullable();
            $table->string("batch_no")->nullable();
            $table->string("buying_price")->nullable();
            $table->string("selling_price")->nullable();
            $table->string("initial_quantity")->nullable();
            $table->string("available_quantity")->nullable();
            $table->string("manufacturer_name")->nullable();
            $table->string("manufacture_date")->nullable();
            $table->text("description")->nullable();
            $table->date("entry_date")->nullable();
            $table->date("expiry_date")->nullable();
            $table->string("barcode")->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stocks');
    }
};