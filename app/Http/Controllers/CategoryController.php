<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller {

    public function getAllUserCategories(Request $request, Category $category) {

        // $token = $request->bearerToken();
        // $category
        //     ->leftJoin('users', 'users.id', '=', 'categories.user_id')
        //     ->where('users.api_token', $token)
        //     ->get();
        // var_dump($category);
        // return $category;
    }
}
