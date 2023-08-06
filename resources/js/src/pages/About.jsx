import React from 'react';
import rony from '../img/rony.jpg';

const About = () => {
    return (
        <section id="about" className="d-flex align-items-center py-5">
            <div className="container">
                <div className="section-title">
                    <p style={{ fontWeight: "bold" }}>I am a passionate full stack web developer and a
                        graduate of Computer Science with 2+ years experience. Always ready to learn, explore technology and to provide best backend and frontend services.</p>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card shadow">
                            <img src={rony} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content">
                        <div className="card" style={{ justifyContent: 'center', textAlign: 'center', marginBottom: '10px' }}>
                            <h3 style={{ fontWeight: 'bold', textTransform: "capitalize" }}>Full Stack Web Developer</h3>
                        </div>
                        <div className="card" style={{ justifyContent: 'center', textAlign: 'center', marginBottom: '10px' }}>
                            <p style={{ fontWeight: 'bold' }}>
                                Experienced in PHP/Laravel and Python/Django as Backend, Nuxt js, Vue js, React js, jQuery as frontend technology.I have worked extensively with HTML, CSS, JavaScript and Python.
                            </p>
                        </div>
                        <div className="card" style={{ marginBottom: '10px' }}>
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
                        <div className="card" style={{ justifyContent: 'center', textAlign: 'center', marginBottom: '10px' }}>
                            <p style={{ fontWeight: "bold" }}>
                                Contributing to SEO friendly and optimized Backend systems to your current team is my inspiration. Currently,  working on Resume builder open source project with the Role Nuxt js Frontend designer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
