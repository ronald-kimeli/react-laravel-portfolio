import { createRef } from "react";
import axiosClient from "../axios-client";

const Contact = () => {
    const emailRef = createRef()
    const nameRef = createRef()
    const subjectRef = createRef()
    const messageRef = createRef()


    const EmailTemplate = (email, name, subject) => {
  
    $mail_template = `
                    <html>
                    <body>
                        <p>Hi,<br>
                        Notification sent to your email concerning <br>
                        The recurring supporter <strong>${first_name} ${last_name}</strong>  <br>
                            with supporter id <strong>${supporter_id}</strong> and email <strong>${email}</strong>   added on ${created_at}<br>
                            ${newOrexisting}
                            Navigate to http://173.255.245.185/givecloud/ to track the change<hr>
                         Keep checking your email for new notifications!
                        </p>
                    </body>
                    </html>
                  `;

    return $mail_template;

    }

    const onSubmit = ev => {
        ev.preventDefault()
    
        const payload = {
          email: emailRef.current.value,
          name: nameRef.current.value,
          subject: subjectRef.current.value,
          message: messageRef.current.value,
        }

        axiosClient.post('/mail-notificaton', payload)
          .then(({data}) => {
            // setUser(data.user)
            // setToken(data.token);
            // setNotification('Logged In successfully')
            console.log(data);
          })
          .catch((err) => {
            const response = err.response;
            // if (response && response.status === 422) {
            //   setMessage(response.data.message)
            // }
            console.log(response);
          })
      }
  
    return (
        <section id="contact" className="d-flex align-items-center py-5 contact">
            <div className="container">

                <div className="section-title">
                    <p style={{ fontWeight: "bold" }}>Let's talk!</p>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt" />
                                <h4>Location</h4>
                                <p>Nairobi, Kenya</p>
                            </div>

                            <div className="email">
                                <i className="bi bi-envelope" />
                                <h4>Email</h4>
                                <p>kimeliryans@gmail.com</p>
                            </div>

                            <div className="phone">
                                <i className="bi bi-phone" />
                                <h4>Call</h4>
                                <p>+254 798 298834</p>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-8 mt-5 mt-lg-0">
                        <form  onSubmit={onSubmit} className="php-email-form">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" ref={nameRef} id="name" placeholder="Your Name" required />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" ref={emailRef} id="email" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" name="subject" ref={subjectRef} id="subject" placeholder="Subject" required />
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" ref={messageRef}  rows={5} placeholder="Message" required />
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading...</div>
                                <div className="error-message" />
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contact
