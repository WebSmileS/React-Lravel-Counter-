<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Counter extends Model
{
    use HasFactory;

  protected $table = 'count';
  public $timestamps = false;


  protected $fillable = [
    'guestCounter',
    'userCounter',
  ];

  /**
   * The attributes that should be casted to native types.
   *
   * @var array
   */

  /**
   * A Todo belongs to a User.
   *
   * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
   */

}
