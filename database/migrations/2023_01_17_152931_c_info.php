<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CInfo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('work_infos', function (Blueprint $table) {
            $table->string('award')->nullable();
            $table->string('creation_time');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('work_infos', function (Blueprint $table) {
            $table->dropColumn(['award', 'creation_time']);
        });
    }
}
