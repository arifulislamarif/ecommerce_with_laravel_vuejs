<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'=>'Arif',
            'email'=>'arif@gmail.com',
            'password'=>bcrypt('12345678'),
            // 'image'=>'storage/user/auth.png',
            // 'email_verified_at'=> Carbon::now(),
        ]);
    }
}
