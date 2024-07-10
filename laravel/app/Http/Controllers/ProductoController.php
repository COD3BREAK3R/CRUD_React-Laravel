<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductoController extends Controller
{
    public function index()
    {
        $productos = Producto::all();
        return response()->json($productos);
    }

    /* Subsection
    -------------------------------------------------- */

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|unique:productos',
            'precio' => 'required|numeric',
            'cantidad_en_stock' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => "Error al validar los datos para insertar el producto"], 400);
        }

        // ------------------------------

        $producto = Producto::create($request->all());
        return response()->json($producto, 200);
    }

    /* Subsection
    -------------------------------------------------- */


    public function show($id)
    {
        $producto = Producto::find($id);
        if (!$producto) {
            return response()->json(['error' => 'Producto no encontrado'], 404);
        }
        return response()->json($producto);
    }

    /* Subsection
    -------------------------------------------------- */

    public function update(Request $request, $id)
    {
        $producto = Producto::find($id);
        if (!$producto) {
            return response()->json(['error' => 'Producto no encontrado para actualizar sus datos'], 404);
        }

        // ------------------------------

        $validator = Validator::make($request->all(), [
            'nombre' => 'required|unique:productos,nombre,' . $id,
            'precio' => 'required|numeric',
            'cantidad_en_stock' => 'required|integer',
        ]);


        if ($validator->fails()) {
            return response()->json(['error' => "Error al validar los datos para actualizar el producto"], 400);
        }

        // ------------------------------

        $producto->update($request->all());
        return response()->json($producto);
    }

    /* Subsection
    -------------------------------------------------- */


    public function destroy($id)
    {
        $producto = Producto::find($id);
        if (!$producto) {
            return response()->json(['error' => 'Producto no encontrado para eliminar'], 404);
        }

        $producto->delete();
        return response()->json(null, 201);
    }
}
