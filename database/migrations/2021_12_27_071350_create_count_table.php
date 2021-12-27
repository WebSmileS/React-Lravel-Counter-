<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use Illuminate\Support\Facades\DB;

class CreateCountTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('count', function (Blueprint $table) {
            $table->id();
          $table->string("guestCounter");
          $table->string("userCounter");
            $table->timestamps();
        });

      DB::table('count')->insert(
        array(
          'guestCounter' => '1',
          'userCounter' => '1',
        )
      );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('count');
    }
}
