<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class MigrationController extends Controller
{
    public function runMigration()
    {
        // Ejecutar la migración
        Artisan::call('migrate', [
            '--force' => true, // Forzar la ejecución en producción
        ]);

        return response()->json([
            'message' => 'Migración ejecutada con éxito',
        ]);
    }
}