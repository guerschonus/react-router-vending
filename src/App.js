import { BrowserRouter, Route, Link, NavLink }  from "react-router-dom";
import "./App.css";
import Soda from "./Soda";
import Chips from "./Chips";
import Sardine from "./Sardine";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to='/soda'>Soda</Link>
          <Link to='/chips'>Chips</Link>
          <Link to='/sardine'>Sardine</Link>
        </nav>
        <nav>
          <NavLink to='/soda'>Soda</NavLink>
          <NavLink to='/chips'>Chips</NavLink>
          <NavLink to='/sardine'>Sardine</NavLink>
        </nav>
        <Route exact path='/soda'>
          <Soda />
        </Route>
        <Route exact path='/chips'>
          <Chips />
        </Route>
        <Route exact path='/sardine'>
          <Sardine />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
