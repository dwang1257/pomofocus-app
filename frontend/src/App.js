import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import List from './Components/ToDo/List';
import Pomodoro from './Components/Pomodoro/Pomodoro';

function App() {
  return (
    <div>
     <Routes>
       <Route exact path = "/" element = {<Layout />}>
        <Route path = "/todolist" element = {<List />} />
        <Route path = "/" element = {<Pomodoro />} />
       </Route>
     </Routes>
    </div>
  );
}

export default App;
