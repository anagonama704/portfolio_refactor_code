<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TestsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tests = [
            ['name' => 'わわわ'],
            ['name' => 'aaa'],
            ['name' => '渡辺慧'],
            ['name' => 'ああああ']
        ];

        foreach ($tests as $test) {
            DB::table('tests')->insert($test);
        }
    }
}
