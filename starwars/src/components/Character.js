// Write your Character component here
import React from 'react';
import styled from 'styled-components'

const CharacterCard = styled.div``

const Character = props =>{

    return(

        <CharacterCard>
            <h2>{props[0].name}</h2>

        </CharacterCard>
    )
}

export default Character;