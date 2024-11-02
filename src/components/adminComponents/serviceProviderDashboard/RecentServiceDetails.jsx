import React from 'react';
import './RecentServiceDetails.css';

const RecentServiceDetails = ({ recentServices }) => (
  <div className="recent-service-details">
    <h3>Recent Service Details</h3>
    <ul>
      {recentServices.map((service, index) => (
        <li key={index} className="recent-service-item">
          <p className="service-name">{service.name}</p>
          <p className="service-date">{service.date}</p>
          <p className="service-time">{service.time}</p>
          {service.status && <p className="service-status">{service.status}</p>}
        </li>
      ))}
    </ul>
  </div>
);

export default RecentServiceDetails;
