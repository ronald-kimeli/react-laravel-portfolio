import { useForm } from "react-hook-form";
import axiosClient from "../axios-client";

export default function Contact() {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => axiosClient
        .post("/portfolio/sendmail", data)
        // .then(({ data }) => {
        .then((response) => {
            // setUser(data.user)
            // setToken(data.token);
            // setNotification('Logged In successfully')
            reset();
            console.log(response);

        })
        .catch((err) => {
            const response = err.response;
            // if (response && response.status === 422) {
            //   setMessage(response.data.message)
            // }
            console.log(response);
        });;

    return (

        <>
            <section
                id="contact"
                className="d-flex align-items-center py-5 contact"
            >
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
                            <form onSubmit={handleSubmit(onSubmit)} className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="form-control"
                                            placeholder="Your Name"
                                            {...register("name", { required: true })}
                                            aria-invalid={errors.name ? "true" : "false"}
                                        />
                                        {errors.name?.type === 'required' && <p className="error" role="alert">Name is required</p>}
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input
                                            // type="email"
                                            name="email"
                                            id="email"
                                            className="form-control"
                                            placeholder="Your Email"
                                            {...register("email", {
                                                required: "Email Address is required", pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                    message: "Please enter a valid email !"
                                                }
                                            })}
                                            aria-invalid={errors.email ? "true" : "false"}
                                        />
                                        {errors.email && <p className="error" role="alert">{errors.email?.message}</p>}
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        className="form-control"
                                        placeholder="Subject"
                                        {...register("subject", { required: true })}
                                        aria-invalid={errors.subject ? "true" : "false"}
                                    />
                                    {errors.subject?.type === 'required' && <p className="error" role="alert">Subject is required</p>}
                                </div>
                                <div className="form-group mt-3">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        id="message"
                                        rows={5}
                                        placeholder="Message"
                                        {...register("message", { required: true })}
                                        aria-invalid={errors.message ? "true" : "false"}
                                    />
                                    {errors.message?.type === 'required' && <p className="error" role="alert">Message is required</p>}
                                </div>

                                <div className="my-3">
                                    <div className="loading">Loading...</div>
                                    <div className="error-message" />
                                    <div className="sent-message">
                                        Your message has been sent. Thank you!
                                    </div>
                                </div>

                                <div className="text-center">
                                    <button type="submit">Send Message</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}
