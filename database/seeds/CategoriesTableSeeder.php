<?php

use Illuminate\Database\Seeder;
use App\Category;

class CategoriesTableSeeder extends Seeder {

    public function run() {

      // clear the Categories table first
      Category::truncate();
      Schema::disableForeignKeyConstraints();

      $faker = \Faker\Factory::create();


      //  let's generate 10 users for our app:
      for ($i = 0; $i < 10; $i++) {
        Category::create([
          'user_id' => $i + 1,
          'name' => $faker->sentence(2),
          'description' => $faker->text(99),
        ]);
      }
    }
}
