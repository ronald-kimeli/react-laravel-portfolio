import React from 'react';
import rony from '../img/rony.jpg';
import aboutData from '../storeData/aboutData';

const About = () => {
    const data = aboutData[0];
    return (
        <section id="about" className="about-section d-flex align-items-center py-5">
            <div className="container">
                <div className="section-title text-center mb-4">
                    <h2>{data.headerTitle}</h2>
                    <p className="lead">{data.sectionTitle}</p>
                </div>
                <div className="row">
                    <div className="col-lg-4 d-flex justify-content-center mb-4 mb-lg-0">
                        <div className="profile-card">
                            <img src={rony} className="img-fluid rounded-circle" alt="Ronald Kimeli" />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="text-center mb-4">
                            <h3 className="text-success fw-bold">{data.role}</h3>
                        </div>

                        <p className="text-center mb-4 fw-bold">
                            {data.experience}
                        </p>

                        <div className="info-card card border-light mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul className="list-unstyled">
                                            <li><i className="bi bi-chevron-right"></i> <strong>Name:</strong> {data.contactInfo.name}</li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Education Level:</strong> {data.contactInfo.educationLevel}</li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> {data.contactInfo.email}</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="list-unstyled">
                                            <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> {data.contactInfo.phone}</li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> {data.contactInfo.degree}</li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> {data.contactInfo.city}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-center fw-bold">
                            {data.inspiration}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;


