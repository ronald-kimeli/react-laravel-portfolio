<?php

namespace App\Http\Controllers;

use App\Mail\EmailNotification;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;

class ResumeController extends Controller
{
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required | string',
            'email' => 'required | email',
            'subject' => 'required | string',
            'message' => 'required | string'
        ]);

        if ($validator->fails()) {
            $errors = implode(" ", $validator->errors()->all());
            return response(['status' => 'error', 'message' => $errors]);
        }

        $data = array(
            'name' => $request->name,
            'email' => $request->email,
            'subject' => $request->subject,
            'message' => $request->message,
        );

        try {
            Mail::to('ryansrono@gmail.com')->send(new EmailNotification($data));

                return response()->json(['status' => 'success', "message" => "email sent successfully"], 200);

        } catch (Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 400);
        }
    }

}