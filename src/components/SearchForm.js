import React, {useState, useEffect} from "react";

export default function SearchForm(props) {

  const [searchResults, setSearchResults] = useState([]);

  const handleChange = e => {
    setSearchResults(e.target.value);
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
     <form onSubmit={submitHandle}>
       <label htmlFor="name">Search:</label>
        <input 
          id="name" 
          type="text" 
          name="textfield" 
          placeholder="Search..." 
          onChange={handleChange} 
        />   
      </form>
    </section>
  );
}
