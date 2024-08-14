<?php

namespace App\Http\Controllers;

use App\Mail\EmailNotification;
use App\Models\EmailNotification as EmailNotifier;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Mail;

class EmailNotificationController extends Controller
{
    public function store(Request $request)
    {

        return response()->json(['status' => 'success', "message" => "email sent successfully"], 200);

        $notification = new EmailNotifier;

        if ($notification) {
            $notification->name = $request->name;
            $notification->email = $request->email;
            $notification->subject = $request->subject;
            $notification->message = $request->message;
            $notification->save();
        }

        $data = $request;

        try {
            foreach ([$request->email, 'kimeliryans@gmail.com'] as $recipient) {
                Mail::to($recipient)->send(new EmailNotification($data));
            }

            return response()->json(['status' => 'success', "message" => "email sent successfully"], 200);
        } catch (Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 400);
        }
    }
}