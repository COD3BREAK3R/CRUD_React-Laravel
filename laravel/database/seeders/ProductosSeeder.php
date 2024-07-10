<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Producto;

class ProductosSeeder extends Seeder
{
    public function run()
    {
        $productos = [
            ['nombre' => 'Laptop HP', 'precio' => 800.00, 'cantidad_en_stock' => 15],
            ['nombre' => 'Smartphone Samsung', 'precio' => 600.00, 'cantidad_en_stock' => 20],
            ['nombre' => 'Tablet Apple', 'precio' => 500.00, 'cantidad_en_stock' => 10],
            ['nombre' => 'Monitor LG', 'precio' => 300.00, 'cantidad_en_stock' => 25],
            ['nombre' => 'Teclado Logitech', 'precio' => 50.00, 'cantidad_en_stock' => 30],
            ['nombre' => 'Impresora Epson', 'precio' => 200.00, 'cantidad_en_stock' => 12],
            ['nombre' => 'Altavoces JBL', 'precio' => 150.00, 'cantidad_en_stock' => 18],
            ['nombre' => 'Cámara Canon', 'precio' => 400.00, 'cantidad_en_stock' => 8],
            ['nombre' => 'Router TP-Link', 'precio' => 80.00, 'cantidad_en_stock' => 22],
            ['nombre' => 'Disco Duro Externo Seagate', 'precio' => 100.00, 'cantidad_en_stock' => 28],
        ];

        foreach ($productos as $producto) {
            Producto::firstOrCreate($producto);
        }
    }
}
