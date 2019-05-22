<?php

use Illuminate\Database\Seeder;
use App\Note;

class NotesTableSeeder extends Seeder {

    public function run() {

      // clear the users table first
      Note::truncate();
      Schema::disableForeignKeyConstraints();

      $faker = \Faker\Factory::create();


      //  let's generate 10 users for our app:
      for ($i = 0; $i < 50; $i++) {
        Note::create([
          'category_id' => mt_rand(1,10),
          'user_id' => mt_rand(1,10),
          'note' => $faker->text(mt_rand(100,300)),
        ]);
      }
    }
}
