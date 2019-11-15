import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {
    const Card = styled.div`
      width: 60%;
      padding: 10px;
      box-shadow: 2px 2px 10px black;
      border-radius: 10px;
      margin: 20px auto;
      display: flex;
      justify-content: space-between;
    `;

    const CardImg = styled.img`
      width: 200px;
      height: 200px;
      padding: 2%;
      opacity: 0.9;
    `;

    const CardInfo = styled.div`
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 50%;
      font-family: 'Source Code Pro', monospace;
    `;

    const Status = styled.div`
      text-align: center;
      background: lime;
      box-shadow: 2px 2px 6px chartreuse;
      height: 30px;
      vertical-align: middle;
      color: white;
      padding: 10px;
      padding-bottom: 15px;
      border-radius: 5px;
      font-family: 'Source Code Pro', monospace;
    `;


  return (
    <div className="character-card">
      <Card>
        <CardImg src={props.character.image} />
        <CardInfo>
          <div>ID: {props.character.id}</div>
          <div>Name: {props.character.name}</div>
          <div>Gender: {props.character.gender}</div>
          <div>Species: {props.character.species}</div>
          <div>Origin: {props.character.origin.name}</div>
        </CardInfo>
        <Status>Status: {props.character.status}</Status>
      </Card>
    </div>
  )

}	
