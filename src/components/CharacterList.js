import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from "styled-components";

const PaginationButt = styled.div `
  text-align: center;
;`


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [filteredData, updateData] = useState([]);

  const searchList = characterArr => {
    updateData(characterArr);
  };

  if(page === 0){
    setPage(20);
  }else if(page > 20){
    setPage(1);
  }

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(response => {
      console.log(response.data.results);
      setCharacters(response.data.results);
      updateData(response.data.results);
    }).catch(error => {
      console.log("Your data was not returned.", error);
    })
  }, [page]);

  return (
    <section className="character-list">
      <h2>List of Known Characters:</h2>
      <Link className="main-buttons" to="/"><button>Home</button></Link>
      <SearchForm searchList={searchList} characters={characters} />
      {filteredData.map(char => {
        return <CharacterCard key={char.id} character={char} />;
      })}
      <PaginationButt className="butts">
        <button className="pageButt" onClick={() => setPage(page-1)} >{'<'}</button>
        <h1>{page}</h1>
        <button className="pageButt" onClick={() => setPage(page+1)}>{'>'}</button>
      </PaginationButt> 
    </section>
  );
}
