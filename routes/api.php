<?php

use Illuminate\Http\Request;
use App\Category;
use App\Note;
use App\User;

Route::post('register', 'Auth\RegisterController@register');
Route::post('login', 'Auth\LoginController@login');


// Route::get('notes', function() {
//
//     return Note::all();
// });

// Route::get('notes/{id}', function($id) {
//
//     return Note::where('user_id', $id)->get();
// });

Route::middleware('auth:api')
    ->get('/user', function (Request $request) {
        return $request->user();
    });

Route::group(['middleware' => 'auth:api'], function() {
    Route::get('categories', 'CategoryController@getAllUserCategories');
});
