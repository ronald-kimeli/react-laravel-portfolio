<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EmailNotification;
use Illuminate\Support\Facades\Validator;

class EmailNotificationController extends Controller
{
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

        if ($validator->fails())
         {
            $errors = implode(" ", $validator->errors()->all());
            return response(['status' => 'error', 'message' => $errors]);
         }

            $notification = new EmailNotification; 
            if ($notification)
              {
                $notification->name = $request->name;
                $notification->email = $request->email;
                $notification->subject = $request->subject;
                $notification->message = $request->message;
                $notification->save();
    
                return response()->json(['message' => 'notification Added Successfully'], 200);
              }
            else
                {
                    return response()->json(['status' => 'error', 'message' => 'Technical error ocurred , contact administrator.'], 404);
                }  
        
        
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
