import React, { useState, useRef, useEffect } from "react";
import '../css/Projects.css';
import projects from "../storeData/projectsData";
import { Modal } from "bootstrap";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.addEventListener('hidden.bs.modal', () => {
        setCurrentProject(null);
      });
    }
  }, []);

  const handleCardClick = (project) => {
    setCurrentProject(project);
    if (modalRef.current) {
      const modal = new Modal(modalRef.current);
      modal.show();
    }
  };

  return (
    <section id="projects" className="d-flex align-items-center py-5 projects">
      <div className="container">
        <div className="section-title">
        <h2>{projects.headerTitle}</h2>
        <p className="lead">{projects.sectionTitle}</p>
        </div>

        <div className="row">
          {projects.projects.map((project, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div
                className="card project-card"
                style={{ cursor: "pointer" }}
                onClick={() => handleCardClick(project)}
              >
                <img src={project.imgSrc} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-title"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.title}
                  </a>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="projectModal" tabIndex="-1" aria-labelledby="projectModalLabel" aria-hidden="true" ref={modalRef}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="projectModalLabel">{currentProject?.title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {currentProject && (
                <>
                  <div className="modal-image-container">
                    <img src={currentProject.imgSrc} alt={currentProject.title} />
                  </div>
                  <p>{currentProject.description}</p>
                </>
              )}
            </div>
            <div className="modal-footer">
              {currentProject && (
                <>
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Learn More
                  </a>
                  <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Projects;


