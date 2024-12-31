<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'role' => 'admin'
        ]);
        User::factory()->create([
            'name' => 'Subadmin',
            'email' => 'subadmin@subadmin.com',
            'role' => 'subadmin'
        ]);
        User::factory()->create([
            'name' => 'Agent',
            'email' => 'agent@agent.com',
            'role' => 'agent'
        ]);
    }
}
