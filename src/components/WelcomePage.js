import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

export default function WelcomePage() {

  const Head = styled.h1`
    text-align: center;
    font-family: 'Source Code Pro', monospace;
    margin-top: 10%;
  ;`

  const Image = styled.img`
    width: 200px;
    height: 200px;
    margin-left: 40%;
    padding-top: 10%;
    padding-bottom: 5%;
  ;`

  const Button =styled.button`
    font-size: 1.2rem;
    border-radius: 5px;
    margin-left: 39%;
    font-family: 'Source Code Pro', monospace;
    margin-top: 5%;
  ;`

  const Wub =styled.div`
    text-align: center;
    padding: 3%;
    font-family: 'Source Code Pro', monospace;
    margin-top: 5%;
  ;`

  return (
    <section className="welcome-page">
      <header>
        <div>
          <Head>Welcome to THE Ultimateeeeee Fan Site, mah NERDS!</Head>
          <Wub>WUBBA LUBBA DUB DUB!!!!!</Wub>
          <div>
            <Link to="/characters"><Button>See All Characters</Button></Link>
          </div>
          <div>
            <Image
              className="main-img"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt="rick"
            />
          </div>
        </div>
      </header>
    </section>
  );
}
