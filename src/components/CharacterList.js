import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import SearchForm from "./SearchForm";
import styled from "styled-components";

const PaginationButt = styled.div `
  text-align: center;
;`

const Head2 = styled.h2`
  text-align: center;
  font-family: 'Source Code Pro', monospace;
;`

const HomeButt = styled.button`
  font-size: 1.2rem;
  border-radius: 5px;
  margin-left: 90%;
  font-family: 'Source Code Pro', monospace;
  box-shadow: 2px 2px 6px chartreuse;
  color: white;
  background: lime;
  border: 1px solid white;
;`

export default function CharacterList() {

  const [page, setPage] = useState(1);

  return (
    <section className="character-list">
      <Head2>List of Known Characters:</Head2>
      <Link className="main-buttons" to="/"><HomeButt>Home</HomeButt></Link>
      <SearchForm page={page} setPage={setPage} />
      <PaginationButt className="butts">
        <button className="pageButt" onClick={() => setPage(page-1)} >{'<'}</button>
        <h1>{page}</h1>
        <button className="pageButt" onClick={() => setPage(page+1)}>{'>'}</button>
      </PaginationButt> 
    </section>
  );
}
