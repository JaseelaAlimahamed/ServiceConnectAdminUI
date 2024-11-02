import React from 'react';
import './ServiceList.css';

const ServiceList = ({ services }) => (
  <div className="service-list">
    <h3>Registered Services</h3>
    <button className="new-service-button">+ New Service</button>
    <div className="service-items">
      {services.map((service, index) => (
        <div className="service-item" key={index}>
          <div className="service-name">{service.name}</div>
          <div className="service-stats">
            <p>Total Orders: {service.orders}</p>
            <p>Conversion: {service.conversion}%</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ServiceList;
