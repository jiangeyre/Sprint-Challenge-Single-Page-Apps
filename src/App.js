import React from "react";
import {Route} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import SearchFrom from "./components/SearchForm";
import Header from "./components/Header.js";
import './App.css';


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
      <Route exact path="/search" component={SearchFrom} />
    </main>
  );
}
