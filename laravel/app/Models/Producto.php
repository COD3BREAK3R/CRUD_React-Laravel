<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;

    protected $fillable = ['nombre', 'precio', 'cantidad_en_stock'];
    
    public function setNombreAttribute($value)
    {
        $this->attributes['nombre'] = trim($value);
    }
    
    public function setPrecioAttribute($value)
    {
        $this->attributes['precio'] = trim($value);
    }
    public function setStockAttribute($value)
    {
        $this->attributes['cantidad_en_stock'] = trim($value);
    }
}
