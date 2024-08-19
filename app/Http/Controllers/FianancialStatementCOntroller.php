<?php

namespace App\Http\Controllers;

use App\Models\FinancialStatement;
use Illuminate\Http\Request;

class FianancialStatementCOntroller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia("system/Finantial");
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(FinancialStatement $financialStatement)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FinancialStatement $financialStatement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, FinancialStatement $financialStatement)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FinancialStatement $financialStatement)
    {
        //
    }
}