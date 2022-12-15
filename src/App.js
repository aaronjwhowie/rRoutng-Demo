import './App.css';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import World
 from './routes/World';
 import Hello from './routes/Hello';
function App() {
  return (
    <BrowserRouter>
        <Link to = "Hello" element = {<Hello/>}> Hello </Link>
        <br></br>
        <Link to = "/">Home</Link>
        <br></br>
    <NavLink to = "world"> World </NavLink>
    <div className="App">
<Routes>
  <Route path = "/" element = {<p> Home </p>}> 
  </Route>
  <Route path = "Hello" element = {<Hello/>}/>
  <Route path = "world" element = {<World/>}/>
  
</Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
