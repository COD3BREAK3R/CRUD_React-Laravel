<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class SeedController extends Controller
{
    public function runSeed()
    {
        try {
            Artisan::call('db:seed', [
                '--force' => true,
                '--class' => 'ProductosSeeder'
            ]);

            $output = Artisan::output();
            
            if (strpos($output, 'Error') !== false) {
                return response()->json(['error' => 'Hubo un error al ejecutar el seed'], 500);
            }
            
            return response()->json(['success' => 'Tabla rellenada exitosamente'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Hubo un error al ejecutar el seed'], 500);
        }
    }
}