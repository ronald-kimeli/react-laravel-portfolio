import React from 'react';
import rony from '../img/rony.jpg';

const About = () => {
    return (
        <section id="about" className="d-flex align-items-center py-5">
            <div className="container">
                <div className="section-title">
                    <p style={{ fontWeight: "bold" }}>Passionate full-stack web developer and a Computer scientist with over 3 years of experience. Ready to learn, explore current technologies, provide best backend and frontend services.</p>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card shadow">
                            <img src={rony} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content">
                        <div className="card" style={{ marginBottom: '10px', border: '1px solid #dee2e6' }}>
                            <h3 style={{ fontWeight: 'bold', textTransform: "capitalize", textAlign: 'center' }}>Full-stack Web Developer (Backend Heavy)</h3>
                        </div>
                        <div className="card" style={{ marginBottom: '10px', border: '1px solid #dee2e6' }}>
                            <p style={{ fontWeight: 'bold', textAlign: 'center' }}>
                                Experienced in PHP/Laravel, Nuxt/React js, and jQuery. Also, worked extensively with HTML, CSS, JavaScript and Python.
                            </p>
                        </div>
                        <div className="card" style={{ marginBottom: '10px', border: '1px solid #dee2e6' }}>
                            <div className="row" style={{ margin: '4px' }}>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-rounded-right" /> <strong>Level:</strong> Degree </li>
                                        <li><i className="bi bi-rounded-right" /> <strong>Phone:</strong> +254 798 298834</li>
                                        <li><i className="bi bi-rounded-right" /> <strong>Email:</strong> kimeliryans@gmail.com</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-rounded-right" /> <strong>Degree:</strong> Computer Science</li>
                                        <li><i className="bi bi-rounded-right" /> <strong>Freelance:</strong> Available</li>
                                        <li><i className="bi bi-rounded-right" /> <strong>City:</strong> Nairobi, Kenya</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="card" style={{ marginBottom: '10px', border: '1px solid #dee2e6' }}>
                            <p style={{ fontWeight: "bold", textAlign: 'center' }}>
                                My inspiration is contributing to SEO friendly and optimized Backend systems to your current team.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
