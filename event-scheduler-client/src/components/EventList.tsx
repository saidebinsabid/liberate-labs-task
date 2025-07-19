import { useEffect, useState } from "react";
import { FaRegCalendarAlt, FaClock, FaStickyNote, FaTag } from "react-icons/fa";

interface EventData {
  id: string;
  title: string;
  date: string;
  time: string;
  notes?: string;
  category: string;
  archived: boolean;
}

export default function EventList() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched events:", data);
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load events.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-6">Loading events...</p>;
  if (error) return <p className="text-center py-6 text-red-600">{error}</p>;

  if (events.length === 0)
    return <p className="text-center py-6">No events to display.</p>;

  return (
    <section className="w-11/12 mx-auto my-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">Events</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {events.map((event) => (
          <div
            key={event.id}
            className={`border rounded-lg p-4 shadow-md bg-white flex flex-col justify-between ${
              event.archived ? "opacity-50" : ""
            }`}
          >
            <div>
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="flex items-center text-gray-600 text-sm mb-1">
                <FaRegCalendarAlt className="mr-2" /> {event.date}
              </p>
              <p className="flex items-center text-gray-600 text-sm mb-2">
                <FaClock className="mr-2" /> {event.time}
              </p>
              {event.notes && (
                <p className="flex items-start text-gray-700 mb-2">
                  <FaStickyNote className="mr-2 mt-1" />
                  {event.notes}
                </p>
              )}
            </div>
            <p className="flex items-center text-sm font-semibold text-blue-600">
              <FaTag className="mr-2" />
              {event.category}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
