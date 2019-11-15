import React, {useState, useEffect} from "react";
import styled from "styled-components";

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

  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchResults(event.target.value);
  };

  const submitHandle = event => {
    event.preventDefault();
    const filteredCards = props.characters.filter(character => {
      return character.name.toLowerCase().includes((searchResults.toLowerCase()));
    });
    props.search(filteredCards);
    console.log(filteredCards);
  }

  return (
    <section className="search-form">
     <FormSty onSubmit={submitHandle}>
       <Label htmlFor="name">Search:</Label>
        <input 
          id="name" 
          type="text" 
          name="textfield" 
          placeholder="Search..." 
          onChange={handleChange} 
        />   
      </FormSty>
    </section>
  );
}
