import { useState, useEffect } from "react";
import AddEventForm from "./components/AddEventForm";
import EventList from "./components/EventList";

interface EventData {
  id: string;
  title: string;
  date: string;
  time: string;
  notes?: string;
  category: string;
  archived: boolean;
}

function App() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = () => {
    setLoading(true);
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const onEventAdded = () => {
    fetchEvents();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Add New Event
      </h1>
      <AddEventForm onEventAdded={onEventAdded} />
      <EventList events={events} loading={loading} setEvents={setEvents} />
    </div>
  );
}

export default App;
