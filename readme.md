# Steps how to install this project

1. `git clone git@github.com:AlMuz/VUE-LARAVEL-NoteApp.git` - cloning app
2. `cd VUE-LARAVEL-NoteApp` - moving to app folder
3. `composer install` - installing back-end dependencies
4. `npm install` - installing front-end dependencies
5. `cp .env.example .env` - copying .env.example into new .env file
6. `php artisan key:generate` - generating app_key for app
7. modify .env file with database information
8. `php artisan migrate` - migrating database
9. `php artisan db:seed` - filling database with data


99. `php artisan serve` - starting server
