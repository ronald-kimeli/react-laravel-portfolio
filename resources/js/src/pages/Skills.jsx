// Skills.jsx
import React from 'react';
import skills from '../storeData/skillsData';

const Skills = () => {
    return (
        <section id="skills" className="py-5">
            <div className="container">
                <div className="section-title">
                    <p style={{ fontWeight: "bold" }}>Problem solving needs great skills, attention to detail, critical thinking, and the ability to follow through! Listed below are my key skills.</p>
                </div>
                <div className="row">
                    {skills.map((skill, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card mb-3">
                                <div className="card-body d-flex justify-content-between align-items-center">
                                    <span style={{ fontWeight: "bold" }}>{skill.name}</span>
                                    <span className="badge bg-primary rounded-pill">{skill.level}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;
