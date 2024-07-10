<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\SeedController;

Route::apiResource('productos', ProductoController::class);
Route::get('/run-seed', [SeedController::class, 'runSeed']);

