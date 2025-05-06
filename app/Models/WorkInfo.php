<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkInfo extends Model
{
    use HasFactory;
    protected $fillable = [
        'w_id',
        'infos',
        'award',
        'creation_time',
    ];
    public function work()
    {
        return $this->belongsTo(Work::class, 'w_id', 'id');
    }
}
