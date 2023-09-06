<?php

namespace App\Http\Controllers;

use App\Http\Traits\MakeMail;
use Illuminate\Http\Request;
use App\Models\EmailNotification;
use Illuminate\Support\Facades\Validator;

class EmailNotificationController extends Controller
{

    use MakeMail;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:100',
            'email' => 'required|max:50',
            'subject' => 'required|max:100',
            'message' => 'required|max:191'
        ]);

        if ($validator->fails()) {
            return response(['status' => 'error', 'message' => $validator->errors()],422);
        }

        $notification = new EmailNotification;

        if ($notification) {
            $notification->name = $request->name;
            $notification->email = $request->email;
            $notification->subject = $request->subject;
            $notification->message = $request->message;
            $notification->save();

            //Implement sending gmail

            $mail_template = $this->emailTemplate($request->name, $request->subject);
            $mail_password = "xjssirazbecywkjg";
            $SMTP_username = "leavemanagement254@gmail.com";

            $feedback = $this->sendMailNotification($request->email, $request->subject, $mail_password, $mail_template, $SMTP_username);

            if($feedback == 'Message has been sent'){
                return response()->json(['status' => 'success', 'message' => 'Email sent successfully'], 200);
            }else{
                return response()->json(['status' => 'error', 'message' => $feedback], 400);
            }


        } else {
            return response()->json(['status' => 'error', 'message' => 'Technical error ocurred , contact administrator.'], 404);
        }

        //End here
    }


    /**
     * Display the specified resource.
     */
    public function show(EmailNotification $emailNotification)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, EmailNotification $emailNotification)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(EmailNotification $emailNotification)
    {
        //
    }
}
