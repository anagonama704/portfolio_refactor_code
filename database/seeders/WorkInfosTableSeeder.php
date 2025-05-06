<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class WorkInfosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // テーブルをクリア
        DB::table('work_infos')->truncate();

        $now = Carbon::now();

        $workInfos = [
            [
                'infos' => '温かみがあり安心感があるデザインを意識して制作しました。',
                'award' => '3校合同学内コンテスト　独創力賞受賞',
                'creation_time' => '1ヶ月',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'infos' => 'カジュアルなサイトになるようにデザインしました。',
                'award' => 'リニューアルサイト',
                'creation_time' => '2週間',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'infos' => 'モダンカジュアルなサイトになるようにデザインしました。',
                'award' => 'ECサイト',
                'creation_time' => '1週間',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'infos' => 'test',
                'award' => 'test',
                'creation_time' => '2年',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'infos' => 'テスト',
                'award' => 'テスト',
                'creation_time' => '2週間',
                'created_at' => $now,
                'updated_at' => $now
            ]
        ];

        foreach ($workInfos as $info) {
            DB::table('work_infos')->insert($info);
        }
    }
}
