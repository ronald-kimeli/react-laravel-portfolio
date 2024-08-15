import services from "../storeData/servicesData";

const Services = () => {
  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <div className="section-title text-center mb-4">
          <h2>{services.headerTitle}</h2>
          <p className="lead">{services.sectionTitle}</p>
        </div>
        <div className="row">
          {services.services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4 d-flex align-items-stretch">
              <div className="card shadow-sm border-light rounded">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className={`bi ${service.icon} display-4 text-primary`}></i>
                  </div>
                  <h5 className="card-title mb-2">{service.title}</h5>
                  <p className="card-text text-muted mb-2">{service.skills}</p>
                  <p className="card-text">{service.description}</p>
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
