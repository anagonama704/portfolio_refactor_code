<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class work extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'name',
        'path',
        'link',
    ];
    public function info()
    {
        return $this->hasOne(WorkInfo::class, 'w_id', 'id');
    }
}
