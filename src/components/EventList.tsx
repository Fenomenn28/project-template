import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface IEvent {
  id: string;
  title: string;
  date: string;
}

const initialEvents: IEvent[] = [
  {
    id: uuidv4(),
    title: "Порадоваться первому дню зимы :)",
    date: "2024-12-01",
  },
  {
    id: uuidv4(),
    title:
      "Поблагодарить замечательную команду Яндекс Практикум за возможность окончить проектный месяц!",
    date: "2024-12-02",
  },
  { id: uuidv4(), title: "Спасибо!!!", date: "2024-12-02" },
];

export const EventList = () => {
  const [events, setEvents] = useState<IEvent[]>(initialEvents);
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const handleAddEvent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title.length > 0 && date.length > 0) {
      const newEvent: IEvent = {
        id: uuidv4(),
        title,
        date,
      };
      setEvents([...events, newEvent]);
      setTitle("");
      setDate("");
    }
  };

  const handleDeleteEvent = (id: string) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <>
      <h1 className="header">Запланированные мероприятия</h1>
      <h2 className="event-header">Добавить мероприятие</h2>
      <form onSubmit={handleAddEvent}>
        <div className="add-events">
          <input
            type="text"
            placeholder="Название мероприятия"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="input-event"
          />
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className="input-date"
          />
          <button type="submit" className="button-add">
            Добавить
          </button>
        </div>
      </form>
      <h2 className="event-header">Список мероприятий</h2>
      <ul className="list-events">
        {events.map((event) => (
          <li key={event.id} className="li-item">
            <div className="ivent-item">
              <p className="item-text">{event.title}</p>
            </div>
            <div className="item-text">
              {new Date(event.date).toLocaleDateString("ru-RU")}
            </div>
            <button
              onClick={() => handleDeleteEvent(event.id)}
              className="button-remove"
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
