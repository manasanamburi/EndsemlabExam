import React from 'react';

const events = [
  { id: 1, title: 'Project Demo Day', date: '2025-12-10' },
  { id: 2, title: 'Guest Speaker Series', date: '2025-12-15' },
];

const EventCalendar = () => {
  return (
    <div className="event-calendar">
      <h2>📅 Event Calendar</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            *{event.title}* on {event.date}
          </li>
        ))}
      </ul>
      <p>Click on an event for more details.</p>
    </div>
  );
};

export default EventCalendar;