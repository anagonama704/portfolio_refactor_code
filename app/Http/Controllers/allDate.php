<?php

namespace App\Http\Controllers;

use App\Models\work;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class allDate extends Controller
{
    public function index()
    {
        $works = work::all();
        return response()->json($works);
    }
    public function work()
    {
        $works = work::all();
        return response()->json($works);
    }
    public function info_wk()
    {
        $info_wks = work::with('info')->get();
        return response()->json($info_wks);
    }
    public function create(Request $request)
    {
        $info_wks = $request->all();
        if (File::exists(storage_path('public/image/' . $info_wks['paths']))) {
        } else {
            $request->file('img')->storeAs('public/image/', $info_wks['paths']);
        }
        DB::table('works')->insert([
            'name' => $info_wks['names'],
            'path' => $info_wks['paths'],
            'link' => $info_wks['link']
        ]);
        DB::table('work_infos')->insert([
            'infos' => $info_wks['infos'],
            'award' => $info_wks['awards'],
            'creation_time' => $info_wks['periods']
        ]);
    }
    public function update(Request $request)
    {
        $info_wks = $request->all();
        if (File::exists(storage_path('public/image/' . $info_wks['paths']))) {
        } else {
            $request->file('img')->storeAs('public/image/', $info_wks['paths']);
        }
        DB::table('works')->where("id", $info_wks['nums'])->update([
            'name' => $info_wks['names'],
            'path' => $info_wks['paths'],
            'link' => $info_wks['link']
        ]);
        DB::table('work_infos')->where("w_id", $info_wks['nums'])->update([
            'infos' => $info_wks['infos'],
            'award' => $info_wks['awards'],
            'creation_time' => $info_wks['periods']
        ]);
    }
    public function delete(Request $request)
    {
        $dels = $request->all();
        DB::table('works')->where("id", $dels['ids'])->delete();
        DB::table('work_infos')->where("w_id", $dels['ids'])->delete();
    }
}
