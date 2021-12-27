<?php

namespace App\Http\Controllers;
use App\Http\Controllers\APIController;
use App\Counter;
use http\Env\Request;


class CountController extends ApiController
{

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getCounter()
    {
        $data = Counter::all()[0];
        return response()->json([
            'counters' => $data,
        ], 200);
    }

    public function addUserCounter() {

      $data = Counter::find(1);

      $data->guestCounter += 1 ;
      $data->save();

      return response()->json([
        'counters' => $data,
      ], 200);
    }

    public  function addGuestCounter() {
      $data = Counter::find(1);


      $data->userCounter += 1 ;
      $data->save();

      return response()->json([
        'counters' => $data,
      ], 200);
    }

}
