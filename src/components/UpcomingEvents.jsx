
import "./UpcomingEvents.css";

const events = [
  {
    id: "01",
    category: "Talk",
    date: "Date TBA",
    title: "Event name",
    description: "Short description of this event.",
  },
  {
    id: "02",
    category: "Workshop",
    date: "Date TBA",
    title: "Event name",
    description: "Short description of this event.",
  },
  {
    id: "03",
    category: "Sprint",
    date: "Date TBA",
    title: "Event name",
    description: "Short description of this event.",
  },
  {
    id: "04",
    category: "Session",
    date: "Date TBA",
    title: "Event name",
    description: "Short description of this event.",
  },
];

export default function UpcomingEvents() {
  return (
    <section id="events" className="osw-sec upcoming-events">
      <div className="osw-w">
        <p className="osw-k">What's next</p>

        <h2 className="osw-h2">
          Upcoming <span className="osw-out">Events</span>
        </h2>

        <p className="upcoming-events-intro">
          Explore the events happening during Open Source Week.
        </p>

        <div className="upcoming-events-list">
          {events.map((event) => (
            <article
              className="upcoming-event-card"
              key={event.id}
            >
              <span className="upcoming-event-number">
                {event.id}
              </span>

              <p className="upcoming-event-meta">
                {event.category} · {event.date}
              </p>

              <div className="upcoming-event-content">
                <h3>{event.title}</h3>

                <p className="upcoming-event-description">
                  {event.description}
                </p>

                <span className="upcoming-event-link">
                  LINK COMING SOON
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
