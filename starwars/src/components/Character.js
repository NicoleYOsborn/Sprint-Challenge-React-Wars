// Write your Character component here
import React from 'react';
import styled from 'styled-components'

const CharacterCard = styled.div`
background: lightgray;
width: 50%;
margin: 4%;
padding: 2%;
box-sizing: border-box;
border: 1 Labelx solid black;
display: flex;
flex-direction: column;
align-items: flex-start;
`
const Name = styled.h2`
display: flex;
width: 100%;
justify-content: center;
`

const Label = styled.p`
font-weight: bold;
`
const Character = (props) =>{
    // console.log(props.chars[0]);
    // const Labelerson = props.chars[0];
    // console.log(Labelerson);
    return(

        <CharacterCard>
            <Name>{props.chars.name}</Name>
          
            <Label>Birth Year: </Label>
            <p>{props.chars.birth_year} </p>
            <Label>Gender: </Label>
            <p>{props.chars.gender}</p>
            <Label>Eye color: </Label>
            <p>{props.chars.eye_color}</p>
            <Label>Hair color: </Label>
            <p>{props.chars.hair_color}</p>
            <Label>Height: </Label>
            <p>{props.chars.height}</p>
            <Label>Mass: </Label>
            <p>{props.chars.mass}</p>
            

        </CharacterCard>
    )
}

export default Character;