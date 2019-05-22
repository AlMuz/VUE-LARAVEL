<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder {

  public function run() {

    // clear the users table first
    User::truncate();
    Schema::disableForeignKeyConstraints();

    $faker = \Faker\Factory::create();

    $password = Hash::make('vuetest');

    User::create([
      'name' => 'Administrator',
      'email' => 'admin@test.com',
      'password' => $password,
    ]);

    //  let's generate 10 users for our app:
    for ($i = 0; $i < 10; $i++) {
      User::create([
        'name' => $faker->name,
        'email' => $faker->email,
        'password' => $password,
      ]);
    }
  }
}
