<?php
namespace App\Helpers;


/**
 * Return the Shop id that is currently enrolled to the authenticated user
 */ 

 class NumberFormatter{
    public static function money($amount)
        {
            if($amount >= 1000000){
                return round($amount/1000000,1).'M';
            }
            else if($amount >= 1000){
                return round($amount/1000,1).'K';
            }
            return $amount;
        }       
 }