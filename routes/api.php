<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::group(['middleware' => 'api'], function () {
    Route::get('/posts', 'App\Http\Controllers\allDate@index');
    Route::get('/works', 'App\Http\Controllers\allDate@work');
    Route::get('/info_wk', 'App\Http\Controllers\allDate@info_wk');
    Route::get('/slacks', 'App\Http\Controllers\SlackAppController@keys');
    Route::post('/wkins', 'App\Http\Controllers\allDate@create');
    Route::post('/wkupdate', 'App\Http\Controllers\allDate@update');
    Route::post('/wkdelete', 'App\Http\Controllers\allDate@delete');
    Route::post('/mails', 'App\Http\Controllers\MailController@send');
});
