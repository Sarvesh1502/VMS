import React from 'react';
import './EventHistory.css';

// Dummy data for completed events
const completedEvents = [
  {
    id: 1,
    name: 'Event 1',
    applicantsApproved: 20,
    totalApplicants: 20,
    date: '2024-10-30',
    participants: 150,
    status: 'Completed',
  },
  {
    id: 2,
    name: 'Event 2',
    applicantsApproved: 25,
    totalApplicants: 30,
    date: '2024-10-28',
    participants: 200,
    status: 'Completed',
  },
  {
    id: 3,
    name: 'Event 3',
    applicantsApproved: 15,
    totalApplicants: 20,
    date: '2024-10-22',
    participants: 120,
    status: 'Completed',
  },
];

function EventHistory() {
  return (
    <div className="event-history-container">
      
      <div className="event-history-list">
        {completedEvents.map((event) => (
          <div key={event.id} className="event-history-card">
            <div className="event-history-info">
              <h3>{event.name}</h3>
              <p className="event-history-date">Date: {event.date}</p>
              <p className="event-history-status">Status: {event.status}</p>
            </div>
            <div className="event-history-stats">
              <p>Participants: {event.participants}</p>
              <p>Applicants: {event.applicantsApproved}/{event.totalApplicants}</p>
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

export default EventHistory;
