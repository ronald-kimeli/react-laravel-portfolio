import React from 'react';

const Resume = () => {
    return (
        <section id="resume" className="d-flex align-items-center py-5 resume">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="resume-title">Summary</h3>
                        <div className="resume-item pb-0">
                            <h4>Ronald Kimeli</h4>
                            <p><em>Innovative and deadline-driven Full-stack web developer with 3+ years of experience designing and developing user-centered websites from initial concept to final, polished deliverable.</em></p>
                            <p>
                            </p><ul>
                                <li>Nairobi, Kenya</li>
                                <li>(+254) 798 298 834</li>
                                <li>kimeliryans@gmail.com</li>
                            </ul>
                            <p />
                        </div>
                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>Bachelor of Science in Computer Science</h4>
                            <h5>August 2016 - April 2020</h5>
                            <p><em>University of Kabianga. Kericho, Kenya</em></p>
                            <p>- Software Engineering (specialization)</p>
                        </div>
                        <div className="resume-item">
                            <h4>HTML5 and CSS3 Certification</h4>
                            <h5>April 2022 - May 2022</h5>
                            <p><em>Pirple School, Online</em></p>
                            <p>- Fundamentals of Web</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4>Full Stack Web developer</h4>
                            <h5>January 2023 - Present</h5>
                            <p><em>Masterclass Solutions, Nairobi, Kenya </em></p>
                            <p>
                            </p><ul>
                                <li>Integrated Application tracking system API.</li>
                                <li>Improved and optimized Database design for givecloud client.</li>
                                <li>Developed locations API using Laravel.</li>
                                <li>Upgraded a PHP website.</li>
                                <li>Created a news aggreggator website.</li>
                            </ul>
                            <p />
                        </div>
                        <div className="resume-item">
                            <h4>Backend Web developer</h4>
                            <h5>January 2022 - December 2022</h5>
                            <p><em>Masterclass Solutions, Nairobi, Kenya </em></p>
                            <p>
                            </p><ul>
                                <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                                <li>Managed up to 5 projects or tasks at a given time while under pressure.</li>
                                <li>Recommended and consulted with clients on the most appropriate graphic design.</li>
                                <li>Created 4+ design presentations and proposals a month for clients and account managers.</li>
                            </ul>
                            <p />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume
