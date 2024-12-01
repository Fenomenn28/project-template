import "./styles.css";
import { EventList } from "./components/EventList";

export const App = () => {
  return (
    <>
      <div className="main">
        <EventList />
      </div>
    </>
  );
};
