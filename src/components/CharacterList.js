import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [filteredData, updateData] = useState([]);

  const searchList = characterArr => {
    updateData(characterArr);
  };

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      console.log(response.data.results);
      setCharacters(response.data.results);
      updateData(response.data.results);
    }).catch(error => {
      console.log("Your data was not returned.", error);
    })
  }, []);

  return (
    <section className="character-list">
      <h2>List of Known Characters:</h2>
      <Link className="main-buttons" to="/">Home</Link>
      <SearchForm searchList={searchList} characters={characters} />
      {filteredData.map(char => {
        return <CharacterCard key={char.id} character={char} />;
      })}
    </section>
  );
}
