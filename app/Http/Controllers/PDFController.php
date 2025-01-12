<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Milon\Barcode\DNS1D;

class PDFController extends Controller
{
    function barcode($barcode)  {
        $barcodeData = new DNS1D();
        $barcodeGen = $barcodeData->getBarcodePNG($barcode, "EAN13");
        // dd($barcodeGen);

        return inertia("PDF/Barcode",[
            "barcode" => 'data:image/png;base64,'.$barcodeGen,
        ]);
    }
}