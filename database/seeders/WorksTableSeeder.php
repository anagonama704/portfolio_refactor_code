<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WorksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $works = [
            [
                'name' => 'HAL幼稚園サイト',
                'path' => 'pre.png',
                'link' => '2022_schoolContests'
            ],
            [
                'name' => 'cafe Carton',
                'path' => 'cafe.png',
                'link' => 'carton'
            ],
            [
                'name' => 'moden',
                'path' => 'ec.png',
                'link' => '#'
            ],
            [
                'name' => 'test',
                'path' => 'aappa.jpg',
                'link' => '#'
            ],
            [
                'name' => 'テスト',
                'path' => 'ebe435f09324eb334280f879807e7842_t.jpeg',
                'link' => '#'
            ]
        ];

        foreach ($works as $work) {
            DB::table('works')->insert($work);
        }

        $workInfos = [
            [
                'w_id' => 1,
                'infos' => '温かみがあり安心感があるデザインを意識して制作しました。',
                'award' => '3校合同学内コンテスト　独創力賞受賞',
                'creation_time' => '1ヶ月'
            ],
            [
                'w_id' => 2,
                'infos' => 'カジュアルなサイトになるようにデザインしました。',
                'award' => 'リニューアルサイト',
                'creation_time' => '2週間'
            ],
            [
                'w_id' => 3,
                'infos' => 'モダンカジュアルなサイトになるようにデザインしました。',
                'award' => 'ECサイト',
                'creation_time' => '1週間'
            ]
        ];

        foreach ($workInfos as $info) {
            DB::table('work_infos')->insert($info);
        }
    }
}
