import React, { useState, useEffect, useRef } from 'react';
import skills from '../storeData/skillsData';
import '../css/skills.css';

const Skills = () => {
    const [visibleSkills, setVisibleSkills] = useState(8);
    const [loading, setLoading] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
    const lastSkillRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isSmallScreen) {
            setVisibleSkills(prev => Math.min(prev, 8));
        } else {
            setVisibleSkills(skills.skills.length);
        }
    }, [isSmallScreen]);

    useEffect(() => {
        if (lastSkillRef.current) {
            lastSkillRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, [visibleSkills]);

    const handleShowMore = () => {
        setLoading(true);

        setTimeout(() => {
            setVisibleSkills(prevVisibleSkills => Math.min(prevVisibleSkills + 3, skills.skills.length));
            setLoading(false);
        }, 1000);
    };

    return (
        <section id="skills" className="py-5">
            <div className="container">
                <div className="section-title text-center mb-4">
                    <h2>{skills.headerTitle}</h2>
                    <p className="lead">{skills.sectionTitle}</p>
                </div>
                <div className="row">
                    {skills.skills.slice(0, visibleSkills).map((skill, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-3">
                            <div className="card h-100">
                                <div className="card-body d-flex justify-content-between align-items-center">
                                    <span className='fw-bold'>{skill.name}</span>
                                    <span className="badge bg-primary rounded-pill">{skill.level}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {(isSmallScreen && visibleSkills < skills.skills.length) || (!isSmallScreen && visibleSkills < skills.skills.length) ? (
                    <div className="text-center mt-3 mb-4">
                        {loading ? (
                            <>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                &nbsp;Loading...
                            </>
                        ) : (
                            <button
                                className="btn btn-sm btn-primary"
                                onClick={handleShowMore}
                                disabled={loading}
                            >
                                Show More
                            </button>
                        )}
                    </div>
                ) : null}

                {skills.skills.slice(0, visibleSkills).length > 0 && (
                    <div ref={lastSkillRef} />
                )}
            </div>
        </section>
    );
}

export default Skills;
