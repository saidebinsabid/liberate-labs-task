import { FaRegCalendarAlt, FaClock, FaStickyNote, FaTag } from "react-icons/fa";
import { BiSolidMessageError } from "react-icons/bi";
import { useState } from "react";
import { format, parseISO } from "date-fns";

interface EventData {
  id: string;
  title: string;
  date: string;
  time: string;
  notes?: string;
  category: string;
  archived: boolean;
}

type EventListProps = {
  events: EventData[];
  loading: boolean;
  setEvents: React.Dispatch<React.SetStateAction<EventData[]>>;
};

const formatDate = (dateStr: string) => {
  try {
    return format(parseISO(dateStr), "dd MMMM yyyy");
  } catch {
    return dateStr;
  }
};

const formatTime = (timeStr: string) => {
  try {
    const [hour, minute] = timeStr.split(":");
    const date = new Date();
    date.setHours(Number(hour), Number(minute));
    return format(date, "h:mm a");
  } catch {
    return timeStr;
  }
};
export default function EventList({
  events,
  loading,
  setEvents,
}: EventListProps) {
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const [filterCategory, setFilterCategory] = useState<string>("All");

  const filteredEvents =
    filterCategory === "All"
      ? events
      : events.filter((event) => event.category === filterCategory);

  const handleDelete = async (id: string) => {
    setActionLoading(id);
    try {
      const res = await fetch(`http://localhost:5000/api/events/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setEvents((prev) => prev.filter((event) => event.id !== id));
      } else {
        console.error("Failed to delete event.");
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    } finally {
      setActionLoading(null);
    }
  };

  const handleArchive = async (id: string) => {
    setActionLoading(id);
    try {
      const res = await fetch(`http://localhost:5000/api/events/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ archived: true }),
      });

      if (res.ok) {
        setEvents((prev) =>
          prev.map((event) =>
            event.id === id ? { ...event, archived: true } : event
          )
        );
      } else {
        console.error("Failed to archive event.");
      }
    } catch (error) {
      console.error("Error archiving event:", error);
    } finally {
      setActionLoading(null);
    }
  };

  if (loading) return <p className="text-center mt-8">...</p>;

  if (events.length === 0)
    return (
      <div className="mt-8 bg-white max-w-2xl mx-auto rounded-2xl">
        <p className="flex items-center flex-col py-6 text-2xl text-rose-500">
          <BiSolidMessageError size={30} />
          No events to display.
        </p>
      </div>
    );

  return (
    <section className="w-11/12 mx-auto my-8">
      <div className="flex justify-between items-center mb-8 bg-sky-100 px-4 py-2 rounded">
        <h2 className="text-2xl md:text-3xl font-semibold">Created Events</h2>
        <select
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white rounded px-4 py-1 text-sm"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="rounded-lg p-4 shadow-md bg-white flex flex-col justify-between relative"
          >
            <p className="flex items-center text-xs font-semibold text-blue-600 mb-4 absolute right-2 top-2">
              <FaTag className="mr-2" />
              {event.category}
            </p>
            <div>
              <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
              <div className="flex justify-between">
                <p className="flex items-center text-gray-600 text-sm mb-1 bg-blue-100 px-3 py-0.5 rounded-full">
                  <FaRegCalendarAlt className="mr-2" /> {formatDate(event.date)}
                </p>
                <p className="flex items-center text-gray-600 text-sm mb-2 bg-green-100 px-3 py-1 rounded-full">
                  <FaClock className="mr-2" /> {formatTime(event.time)}
                </p>
              </div>
              {event.notes && (
                <p className="flex items-start text-gray-700 mb-2">
                  <FaStickyNote className="mr-2 mt-1" />
                  {event.notes}
                </p>
              )}

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleDelete(event.id)}
                  disabled={actionLoading === event.id}
                  className="px-3 py-1 text-sm text-white bg-red-500 hover:bg-red-600 rounded"
                >
                  {actionLoading === event.id ? "Deleting..." : "Delete"}
                </button>
                {!event.archived && (
                  <button
                    onClick={() => handleArchive(event.id)}
                    disabled={actionLoading === event.id}
                    className="px-3 py-1 text-sm text-white bg-gray-600 hover:bg-gray-700 rounded"
                  >
                    {actionLoading === event.id ? "Archiving..." : "Archive"}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
