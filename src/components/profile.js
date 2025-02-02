import React from 'react';
import { FaUserTie, FaRegLightbulb, FaChartLine } from 'react-icons/fa';
import Dommy from '../images/profile.jpg';
import Hayley from '../images/hayley.jpg';
import SWiza from '../images/swiza.jpg';
import Web from '../images/web.jpg'; // Assuming these images exist
import Graphic from '../images/graphic.jpg';
import Marketing from '../images/markerting.jpg';

const BusinessProfile = () => {
  const leaders = [
    {
      name: "Dominic Nambarawani",
      title: "CEO & Founder",
      description: "With a passion for innovative design and development, Dominic leads the team towards excellence in web development, digital marketing, and branding.",
      image: Dommy // Using the imported image
    },
    {
      name: "Hailey Mataya",
      title: "COO & Operations",
      description: "Hailey ensures the smooth operation of the company and manages client relations, helping to build strong, lasting connections.",
      image: Hayley // Using the imported image
    },
    {
      name: "Duddely SWiza",
      title: "CTO & Technology",
      description: "John is responsible for our cutting-edge technology solutions and drives innovation across all technical aspects of the business.",
      image: SWiza // Using the imported image
    }
  ];

  const services = [
    {
      name: "Web Development",
      icon: <FaRegLightbulb className="service-icon" />,
      description: "From responsive websites to custom web applications, we build innovative digital solutions that drive results.",
      image: Web // Using the imported image
    },
    {
      name: "Graphic Design",
      icon: <FaUserTie className="service-icon" />,
      description: "Our graphic design team delivers visually stunning designs that communicate your brand's story effectively.",
      image: Graphic // Using the imported image
    },
    {
      name: "Digital Marketing",
      icon: <FaChartLine className="service-icon" />,
      description: "We develop tailored marketing strategies to boost your online presence, reaching your target audience effectively.",
      image: Marketing // Using the imported image
    }
  ];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Meet Our Business Leaders</h1>
        <p>Our leaders are committed to delivering exceptional services with passion and expertise.</p>
      </div>

      <div className="leaders">
        {leaders.map((leader, index) => (
          <div className="leader-card" key={index}>
            <img src={leader.image} alt={leader.name} className="leader-image" />
            <div className="leader-info">
              <h2>{leader.name}</h2>
              <p className="leader-title">{leader.title}</p>
              <p>{leader.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="services">
        <h2>Our Core Services</h2>
        <div className="service-list">
          {services.map((service, index) => (
            <div className="service-item" key={index}>
              <img src={service.image} alt={service.name} className="service-image" />
              <div className="service-info">
                {service.icon}
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessProfile;
