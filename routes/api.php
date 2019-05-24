<?php

use Illuminate\Http\Request;
use App\Category;
use App\Note;
use App\User;

Route::post('register', 'Auth\RegisterController@register');
Route::post('login', 'Auth\LoginController@login');
