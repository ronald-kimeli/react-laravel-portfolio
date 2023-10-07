<?php

namespace App\Http\Traits;

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

trait MakeMail
{

    public $name;
    public $subject;
    private $mail_password;
    private $SMTP_username;

    public function emailTemplate($name, $subject)
    {
        $mail_template = "
                <html>
                <body>
                    <p>Hi $name,<br><br>
                    Your email has been received successfully!<br>
                        I will reply concerning the subject <strong>$subject</strong> shortly!<hr>
                     Keep checking your email for new replies!

                     <br><br>
                     Kind Regards,<br>
                     Ronald Kimeli
                    </p>
                </body>
                </html>
              ";
        return $mail_template;
    }

    public function sendMailNotification($ReceiverEmail, $subject, $mail_password, $mail_template, $SMTP_username)
    {
        $mail = new PHPMailer(true);

        try {
            //Server settings
            $mail->isSMTP();
            $mail->Host       = 'smtp.gmail.com';
            $mail->SMTPAuth   = true;
            $mail->Username = $SMTP_username; //SMTP username
            $mail->Password = $mail_password;
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            $mail->addAddress($ReceiverEmail);

            //Content
            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body = $mail_template;

            $mail->send();

            return 'Message has been sent';
        } catch (Exception $e) {
            return "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }
}
