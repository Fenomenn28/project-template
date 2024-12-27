import {useState} from "react";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: `${uuidv4()}`,
    title: 'Проснуться вовремя',
    date: '27-12-2024'
  },
  {
    id: `${uuidv4()}`,
    title: 'Сдать проект',
    date: '27-12-2024'
  },
  {
    id: `${uuidv4()}`,
    title: 'Подготовиться к новому году',
    date: '28-12-2024'
  },
]

const EventList = () => {
  const [todos, setTodos] = useState(initialState); 
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const addTodo = (event: React.FormEvent) => {
    event.preventDefault();
    if (title.length !== 0 && date.length !== 0) {
      const [year, month, day] = date.split("-"); 
      const formattedDate = `${day}-${month}-${year}`; 
      setTodos([
        ...todos,
        {
          id: `${uuidv4()}`,  
          title: title,
          date: formattedDate
        },
      ]);
      setTitle('');
      setDate('');
    }
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return(
    <>
      <h1 className="h1">Запланировать мероприятие</h1>
      <form 
        onSubmit={addTodo} 
        className="form">
        <input  
          onChange={(evt) => setTitle(evt.target.value)} 
          value={title}  
          className="input input-title" 
          placeholder ="Название мероприятия" 
        />
        <input 
          type="date"
          onChange={(evt) => setDate(evt.target.value)}
          value={date}
          className="input input-data"
          placeholder ="Дата" 
        />
        <button type="submit" className="input input-submit">Добавить</button>
      </form>
      <h2 className="h2">Запланированные мероприятия</h2>
      <ul className="ul">
        {todos.map((todo) => (
          <li className="li" key={todo.id}>
            <p className="li-title">{todo.title}</p>
            <p className="li-date">{todo.date}</p>
            <button onClick={() => deleteTodo(todo.id)} className="button-delete">удалить</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default EventList