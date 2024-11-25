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
            $table->string("name");
            $table->string("batch_no");
            $table->string("buying_price");
            $table->string("selling_price");
            $table->string("initial_quantity");
            $table->string("available_quantity");
            $table->string("manufacturer_name");
            $table->string("manufacture_date");
            $table->text("description");
            $table->date("entry_date");
            $table->date("expiry_date");
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