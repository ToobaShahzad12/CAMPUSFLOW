export default function ScheduleRow({ day, events }) {
  return (
    <div className="schedule-row">
      <div className="schedule-day-header">
        <p className="schedule-day">{day}</p>
        <span className="schedule-event-count">{events.length}</span>
      </div>
      <ul className="schedule-events">
        {events.map((event, idx) => (
          <li key={idx} className="schedule-event">
            <span className="event-dot"></span>
            {event}
          </li>
        ))}
      </ul>
    </div>
  );
}
