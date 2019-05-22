<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Note extends Model {

  protected $fillable = ['category_id', 'user_id', 'note'];

}
