import { Router, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

interface EventData {
  id: string;
  title: string;
  date: string;
  time: string;
  notes?: string;
  category: string;
  archived: boolean;
}
const events: EventData[] = [];
const workKeywords = ['meeting', 'project', 'client', 'deadline', 'interview'];
const personalKeywords = ['birthday', 'family', 'party', 'vacation', 'anniversary'];

router.post('/events', (req: Request, res: Response) => {
  const { title, date, time, notes, archived = false } = req.body;

  if (!title || !date || !time) {
    return res.status(400).json({ error: 'Title, date, and time are required' });
  }

  const text = `${title} ${notes || ''}`.toLowerCase();
  let category = 'Other';

  if (workKeywords.some(word => text.includes(word))) {
    category = 'Work';
  } else if (personalKeywords.some(word => text.includes(word))) {
    category = 'Personal';
  }

  const newEvent: EventData = { id: uuidv4(),title, date, time, notes, category, archived };
  events.push(newEvent);

  return res.status(200).json({ message: 'Event created and categorized', event: newEvent });
});

router.get('/events', (_req: Request, res: Response) => {
  const sortedEvents = [...events].sort((a, b) => {
    if (a.date === b.date) {
      return a.time.localeCompare(b.time);
    }
    return a.date.localeCompare(b.date);
  });

  res.status(200).json(sortedEvents);
});


export default router;
