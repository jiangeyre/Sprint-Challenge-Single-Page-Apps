import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";

const FormSty = styled.form`
  text-align: center;
  font-size: 1.3rem;
  font-family: 'Source Code Pro', monospace;
  margin-bottom: 5%;
;`

const Label = styled.label`
  text-align: center;
;`

export default function SearchForm(props) {

  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      const results = response.data.results.filter(character => { 
        return character.name.toLowerCase().includes(query.toLowerCase())
      })
      setSearchResults(results);
    }).catch(error => {
      return ("error", error)});
  }, [query]);

  const handleChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section className="search-form">
     <FormSty>
       <Label htmlFor="name">Search:</Label>
        <input 
          id="name" 
          type="text" 
          name="textfield" 
          placeholder="Search..." 
          onChange={handleChange}
          value={query} 
        />  
      </FormSty>
      {searchResults.map((char => {
        return(
          <CharacterCard 
            key={char.id} 
            id={char.id}
            name={char.name} 
            species ={char.species} 
            status={char.status}
            image={char.image}
            gender={char.gender}
            origin={char.origin.name}
          />)
        }
      ))}
    </section>
  );
}
