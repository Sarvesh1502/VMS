import React from 'react';
import './EventListAdmin.css';

// Dummy data for live events
const liveEvents = [
  {
    id: 1,
    name: 'Event 1',
    applicantsApproved: 10,
    totalApplicants: 20,
    date: '2024-11-15',
    participants: 150,
    status: 'Live',
  },
  {
    id: 2,
    name: 'Event 2',
    applicantsApproved: 15,
    totalApplicants: 30,
    date: '2024-11-17',
    participants: 200,
    status: 'Live',
  },
  {
    id: 3,
    name: 'Event 3',
    applicantsApproved: 8,
    totalApplicants: 25,
    date: '2024-11-19',
    participants: 120,
    status: 'Live',
  },
];

function EventListAdmin() {
  return (
    <div className="event-list-admin-container">
      
      <div className="event-list">
        {liveEvents.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-info">
              <h3>{event.name}</h3>
              <p className="event-date">Date: {event.date}</p>
              <p className="event-status">Status: {event.status}</p>
            </div>
            <div className="event-stats">
              <p>Applicants: {event.participants}</p>
              <p>Participants: {event.applicantsApproved}/{event.totalApplicants}</p>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${(event.applicantsApproved / event.totalApplicants) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventListAdmin;
