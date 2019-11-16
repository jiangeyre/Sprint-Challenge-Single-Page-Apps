import React, {useState, useEffect} from "react";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";
import axios from "axios";

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
  //deconstructing props
  // console.log(props);
  const {characters, page, setPage } = props;
  const [query, setQuery] = useState("");
  const [newChars, setNewChars] = useState([]);

  const handleChange = event => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(query.toLowerCase())}&page=${page}`)
    .then(response => {
      setNewChars(response.data.results);
      if(page < 1){
        setPage(response.data.info.pages - 1);
      }else if(page > response.data.info.pages - 1){
        setPage(1);
      }
    }).catch(error => {
      console.log("Error returned:", error);
    })
  }, [characters, query, page, setPage]);

  return (
    <section className="search-form">
     <FormSty>
       <Label htmlFor="name">Search:</Label>
        <input 
          id="name" 
          type="text" 
          name="textfield" 
          placeholder="Search by Name..." 
          onChange={handleChange}
          value={query} 
        />  
      </FormSty>
      {newChars.map((char) => {
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
      })}
    </section>
  );
}
