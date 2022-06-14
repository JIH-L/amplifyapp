import { Route, Routes } from "react-router-dom";
import AllMeetupsPages from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import TodoPages from "./pages/Todo";

function App() {
  return (
    <Routes> 
      <Route path="/" element={<AllMeetupsPages />} />
      <Route path="/new-meetup" element={<NewMeetup />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="todo" element={<TodoPages />} />
    </Routes>
  );
}

export default App;
