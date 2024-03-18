import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  // Define services data
  const services = [
    {
      id: 1,
      title: "Service 1",
      skills: "HTML, CSS, JavaScript",
      description: "Description for Service 1."
    },
    {
      id: 2,
      title: "Service 2",
      skills: "React, Node.js, MongoDB",
      description: "Description for Service 2."
    },
    {
      id: 3,
      title: "Service 3",
      skills: "Python, Django, Flask",
      description: "Description for Service 3."
    }
  ];

  return (
    <section id="services" className="py-5">
      <div className="container">
        <div className="section-title">
          <p style={{ fontWeight: "bold" }}>I will provide these services according to the needed requirements.</p>
        </div>
        <div className="row">
          {services.map(service => (
            <div key={service.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 grow-on-hover">
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">Skills: {service.skills}</p>
                  <p className="card-text">{service.description}</p>
                  <Link to="#" className="btn btn-primary">Learn More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
