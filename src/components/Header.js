import React from "react";
import styled from "styled-components";


const Heck = styled.h1`
  font-family: 'Source Code Pro', monospace;
  margin-top: 10%;
;`

export default function Header() {
  return (
    <header className="ui centered">
      <Heck className="ui center">Rick &amp; Morty Fan Page</Heck>
    </header>
  );
}
