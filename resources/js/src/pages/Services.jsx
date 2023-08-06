import React from "react"
import { Link } from "react-router-dom"

const Services = () => {
  return (
    <section id="services" className="d-flex py-5 services">
      <div className="container">

        <div className="section-title">
          <p style={{ fontWeight: "bold" }}>I will provide these services according to the needed requirements.</p>
        </div>

        <div className="row">
            <div className="icon-box iconbox-blue">
              <h4><Link to="">Lorem Ipsum</Link></h4>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Services
