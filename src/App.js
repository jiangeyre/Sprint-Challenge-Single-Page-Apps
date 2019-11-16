import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import SearchFrom from "./components/SearchForm";
import Header from "./components/Header.js";
import './App.css';


export default function App() {
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>
        <Header />
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/characters" component={CharacterList} />
        <Route exact path="/search" component={SearchFrom} />
      </main>
    </Router>
  );
}
