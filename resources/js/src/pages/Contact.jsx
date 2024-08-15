import { useForm } from "react-hook-form";
import axiosClient from "../axios-client";
import { useState } from "react";
import "../css/contact.css";

export default function Contact() {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (data) => {
        setIsLoading(true);
        setSuccessMessage('');
        setErrorMessage('');
        axiosClient.post("/portfolio/sendmail", data)
            .then((response) => {
                if (response.data.status === 'success') {
                    setSuccessMessage(response.data.message);
                }
                reset();
            })
            .catch((err) => {
                const response = err.response;
                console.log(response.status);

                if (response && response.status === 422) {
                    setErrorMessage('There was an issue with your submission. Please try again.');
                } else {
                    setErrorMessage('An unexpected error occurred. Please try again later.');
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <section id="contact" className="d-flex align-items-center py-5 contact">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Let's talk!</h2>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt" />
                                <h4>Location</h4>
                                <span>Nairobi, Kenya</span>
                            </div>
                            <div className="email">
                                <i className="bi bi-envelope" />
                                <h4>Email</h4>
                                <span>kimeliryans@gmail.com</span>
                            </div>
                            <div className="phone">
                                <i className="bi bi-phone" />
                                <h4>Call</h4>
                                <span>+254 798 298834</span>
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
                                        {...register("name", { required: "Name is required" })}
                                        aria-invalid={errors.name ? "true" : "false"}
                                    />
                                    {errors.name && <span className="error" role="alert">{errors.name.message}</span>}
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="form-control"
                                        placeholder="Your Email"
                                        {...register("email", {
                                            required: "Email Address is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                message: "Please enter a valid email!"
                                            }
                                        })}
                                        aria-invalid={errors.email ? "true" : "false"}
                                    />
                                    {errors.email && <span className="error" role="alert">{errors.email.message}</span>}
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    className="form-control"
                                    placeholder="Subject"
                                    {...register("subject", { required: "Subject is required" })}
                                    aria-invalid={errors.subject ? "true" : "false"}
                                />
                                {errors.subject && <span className="error" role="alert">{errors.subject.message}</span>}
                            </div>
                            <div className="form-group mt-3">
                                <textarea
                                    className="form-control"
                                    name="message"
                                    id="message"
                                    rows={5}
                                    placeholder="Message"
                                    {...register("message", { required: "Message is required" })}
                                    aria-invalid={errors.message ? "true" : "false"}
                                />
                                {errors.message && <span className="error" role="alert">{errors.message.message}</span>}
                            </div>

                            <div className="my-3">
                            {errorMessage && <div className='error status-message' >{errorMessage}</div>}
                            {successMessage && <div className='success sent-message'>{successMessage}</div>}
                            </div>

                            <div className="text-center">
                                <button type="submit" disabled={isLoading}>
                                    {isLoading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            &nbsp;Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
