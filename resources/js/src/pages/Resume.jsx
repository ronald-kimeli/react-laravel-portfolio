// import { useState } from 'react';

// const Resume = () => {
//     const [isDownloading, setIsDownloading] = useState(false);

//     const handleDownloadClick = () => {
//         setIsDownloading(true);

//         try {
//             const fileUrl = '/assets/ronald_kimeli_resume.pdf';

//             const link = document.createElement('a');
//             link.href = fileUrl;
//             link.download = 'ronald_kimeli_resume.pdf';
//             link.style.display = 'none'; 
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);

//         } catch (error) {
//             console.error('Download failed:', error);
//         } finally {
//             setTimeout(() => {
//                 setIsDownloading(false);
//             }, 100);
//         }
//     };    
//     return (
//         <section id="resume" className="d-flex align-items-center py-5 resume">
//             <div className="container">
//                 <div className="section-title">
//                     <p style={{ fontWeight: "bold" }}>
//                         Ronald Kimeli Resume
//                     </p>
                    // <button
                    //     onClick={handleDownloadClick}
                    //     className="btn btn-sm btn-primary"
                    //     disabled={isDownloading}
                    // >
                    //     {isDownloading ? (
                    //         <>
                    //             <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    //             &nbsp;Downloading...
                    //         </>
                    //     ) : (
                    //         <>
                    //             <i className="bi bi-download"></i> Download Resume
                    //         </>
                    //     )}
                    // </button>
//                 </div>
//                 <div className="row">
//                     <div className="col-lg-6">
//                         <h3 className="resume-title">Summary</h3>
//                         <div className="resume-item pb-0">
//                             <p>
//                                 Motivated Software Developer and Computer Scientist with over 3 years of experience in both local and remote settings. Backend-heavy specialist with extensive proficiency in PHP/Laravel/Yii2, complemented by Frontend skills in React.js, Vue/Nuxt.js, and jQuery. Adept in HTML, CSS, JavaScript, PHP, and Python. Passionate about delivering high-performing, scalable, and secure web solutions. Seeking opportunities to leverage my backend expertise, explore new technologies, and contribute to innovative projects across both Backend and Frontend development.
//                             </p>
//                         </div>
//                         <h3 className="resume-title">Education</h3>
//                         <div className="resume-item">
//                             <h4>Bachelor of Science in Computer Science</h4>
//                             <h5>August 2016 - April 2020</h5>
//                             <p><em>University of Kabianga. Kericho, Kenya</em></p>
//                             <p>- Software Engineering (specialization)</p>
//                         </div>
//                         <div className="resume-item">
//                             <h4>HTML5 and CSS3 Certification</h4>
//                             <h5>April 2022 - May 2022</h5>
//                             <p><em>Pirple School, Online</em></p>
//                             <p>- Fundamentals of Web</p>
//                         </div>
//                         <h3 className="resume-title">Skills</h3>
//                         <div className="resume-item">
//                             <p>
//                             </p><ul>
//                                 <li>MySQL, MariaDB and
//                                     Postgresql
//                                 </li>
//                                 <li>Docker.
//                                 </li>
//                                 <li>Restful API integration and development
//                                 </li>
//                                 <li>PHP/Laravel and Express js.</li>
//                                 <li>React/Nuxt/jQuery.</li>
//                                 <li>HTML5, CSS3, JavaScript, Typescript, PHP and Python.</li>
//                                 <li>Nginx and Apache2.</li>
//                                 <li>Apache kafka(Python).</li>
//                                 <li>Amazon Web Services S3 and EC2, Linode, Heroku and Infinity free.</li>
//                             </ul>
//                             <p />
//                         </div>
//                         <h3 className="resume-title">Languages</h3>
//                         <div className="resume-item">
//                             <p>
//                             </p><ul>
//                                 <li>English</li>
//                                 <li>Kiswahili</li>
//                             </ul>
//                             <p />
//                         </div>
//                         <h3 className="resume-title">Personal Attributes</h3>
//                         <div className="resume-item">
//                             <p>
//                             </p><ul>
//                                 <li>Attention to detail</li>
//                                 <li>Collaboration relationships with sensitivity to diversity and inclusion
//                                 </li>
//                                 <li>Ability to managege priorities in an organized way.
//                                 </li>
//                                 <li>Willingness to adapt new technologies into meeting goals which boosts critical thinking and problem solving.</li>
//                                 <li>Ability to train and help collaborate with others into meeting goals on time.</li>
//                                 <li>HTML5, CSS3, JavaScript, Typescript, PHP and Python.</li>
//                                 <li>Work under pressure, teamwork and diverse environment.</li>
//                                 <li>Good communicator and negotiator.</li>
//                             </ul>
//                             <p />
//                         </div>
//                     </div>
//                     <div className="col-lg-6">
//                         <h3 className="resume-title">Professional Experience</h3>
//                         <div className="resume-item">
//                             <h4>Software Developer</h4>
//                             <h5>November 2023 - Present </h5>
//                             <p><em>Innovex Solutions , Nairobi, Kenya </em></p>
//                             <p>
//                             </p><ul>
//                                 <li>Maintaining Yii2/React application for the Insurance Companies.
//                                 </li>
//                                 <li>Testing and debugging of the application.
//                                 </li>
//                                 <li>Upgrading the user requirements for business goal.
//                                 </li>
//                                 <li>Integrating third party API such as AfricasTalking for sms communication.</li>
//                             </ul>
//                             <p />
//                         </div>
//                         <div className="resume-item">
//                             <h4>Software Developer</h4>
//                             <h5>November 2023 - Present </h5>
//                             <p><em>Innovex Solutions , Nairobi, Kenya </em></p>
//                             <p>
//                             </p><ul>
//                                 <li>Maintaining Yii2/React application for the Insurance Companies.
//                                 </li>
//                                 <li>Testing and debugging of the application.
//                                 </li>
//                                 <li>Upgrading the user requirements for business goal.
//                                 </li>
//                                 <li>Integrating third party API such as AfricasTalking for sms communication.</li>
//                             </ul>
//                             <p />
//                         </div>
//                         <div className="resume-item">
//                             <h4>Full-Stack Web developer</h4>
//                             <h5>January 2022 - October 2023 </h5>
//                             <p><em>Masterclass Solutions, Nairobi, Kenya </em></p>
//                             <p>
//                             </p><ul>
//                                 <li>Integrated Application tracking system API.</li>
//                                 <li>Improved and optimized Database design for givecloud client.</li>
//                                 <li>Developed locations API using Laravel.</li>
//                                 <li>Upgraded a PHP website.</li>
//                                 <li>Created a news aggreggator website.</li>
//                             </ul>
//                             <p />
//                         </div>
//                         <div className="resume-item">
//                             <h4>Backend Web developer</h4>
//                             <h5>January 2021 - December 2021</h5>
//                             <p><em>Masterclass Solutions, Nairobi, Kenya </em></p>
//                             <p>
//                             </p><ul>
//                                 <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
//                                 <li>Managed up to 5 projects or tasks at a given time while under pressure.</li>
//                                 <li>Recommended and consulted with clients on the most appropriate graphic design.</li>
//                                 <li>Created 4+ design presentations and proposals a month for clients and account managers.</li>
//                             </ul>
//                             <p />
//                         </div>
//                         <div className="resume-item">
//                             <h4>Assistant System Administrator(Internship)
//                             </h4>
//                             <h5>May 2020 - December 2020</h5>
//                             <p><em>Kisii University</em></p>
//                             <p>
//                             </p><ul>
//                                 <li>Data entry, data cleaning, and data re-entry to the Entity Relationship Program(ERP).</li>
//                                 <li>Database Management and design.</li>
//                                 <li>Data manipulation and visualization. for example, Graduation List.</li>
//                                 <li>Hardware assembling and maintenance.</li>
//                             </ul>
//                             <p />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Resume



import React, { useState } from 'react';
import resumeData from '../storeData/resumeData'; // Adjust the import path according to your file structure

const Resume = () => {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownloadClick = () => {
        setIsDownloading(true);

        try {
            const fileUrl = '/assets/ronald_kimeli_resume.pdf';

            const link = document.createElement('a');
            link.href = fileUrl;
            link.download = 'ronald_kimeli_resume.pdf';
            link.style.display = 'none'; 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        } catch (error) {
            console.error('Download failed:', error);
        } finally {
            setTimeout(() => {
                setIsDownloading(false);
            }, 100);
        }
    };

    return (
        <section id="resume" className="d-flex align-items-center py-5 resume">
            <div className="container">
                <div className="section-title text-center mb-4">
                    <h2>{resumeData.headerTitle}</h2>
                    <button
                        onClick={handleDownloadClick}
                        className="btn btn-sm btn-primary"
                        disabled={isDownloading}
                    >
                        {isDownloading ? (
                            <>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                &nbsp;Downloading...
                            </>
                        ) : (
                            <>
                                <i className="bi bi-download"></i> {resumeData.sectionTitle}
                            </>
                        )}
                    </button>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="resume-title">Summary</h3>
                        <div className="resume-item pb-0">
                            <p>{resumeData.summary}</p>
                        </div>
                        <h3 className="resume-title">Education</h3>
                        {resumeData.education.map((edu, index) => (
                            <div key={index} className="resume-item">
                                <h4>{edu.degree}</h4>
                                <h5>{edu.period}</h5>
                                <p><em>{edu.institution}</em></p>
                                <p>- {edu.specialization}</p>
                            </div>
                        ))}
                        <h3 className="resume-title">Skills</h3>
                        <div className="resume-item">
                            <ul>
                                {resumeData.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                        <h3 className="resume-title">Languages</h3>
                        <div className="resume-item">
                            <ul>
                                {resumeData.languages.map((language, index) => (
                                    <li key={index}>{language}</li>
                                ))}
                            </ul>
                        </div>
                        <h3 className="resume-title">Personal Attributes</h3>
                        <div className="resume-item">
                            <ul>
                                {resumeData.personalAttributes.map((attribute, index) => (
                                    <li key={index}>{attribute}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="resume-title">Professional Experience</h3>
                        {resumeData.professionalExperience.map((experience, index) => (
                            <div key={index} className="resume-item">
                                <h4>{experience.title}</h4>
                                <h5>{experience.period}</h5>
                                <p><em>{experience.company}</em></p>
                                <ul>
                                    {experience.responsibilities.map((responsibility, index) => (
                                        <li key={index}>{responsibility}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;



