import React, { useState } from "react";
import "./Services.css";

function Services() {

  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      number: "01",
      title: "Website Design",
      desc: "Modern and responsive website designs tailored for your business."
    },
    {
      number: "02",
      title: "UI/UX Design",
      desc: "User-focused interface and experience design for better usability."
    },
    {
      number: "03",
      title: "Logo & Branding",
      desc: "Creative logo design and branding identity for your company."
    },
    {
      number: "04",
      title: "Framer Development",
      desc: "Interactive and animated websites built using Framer."
    }
  ];

  const toggleService = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <>
   <div id="Services">

   </div>
    <section className="services-section">

      <h1 className="services-title">My Services</h1>

      {services.map((service, index) => (
        <div
          key={index}
          className="service-row"
          onClick={() => toggleService(index)}
        >
          <div className="service-number">{service.number}</div>

          <div className="service-title">{service.title}</div>

          <div className="service-plus">
            {openIndex === index ? "-" : "+"}
          </div>

          {openIndex === index && (
            <p className="service-desc">{service.desc}</p>
          )}
        </div>
      ))}

    </section>

     </>
  );
}

export default Services;