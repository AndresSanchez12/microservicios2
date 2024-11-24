<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estudiante extends Model
{
    use HasFactory;

    protected $table = 'notasdb';
    public $timestamps = false;
    protected $primaryKey = 'cod';
    public $incrementing = false;
    protected $keyType = 'int';

}