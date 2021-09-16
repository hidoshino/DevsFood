import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Logo, SearchInput } from './styled'

export default ({ search, onSearch }) => {

    const [inputActive, SetInputActive] = useState(false);

    const handleInputFocus = () => {
       SetInputActive(true);
    }

    const handleInputBlur = () => {
        if(search == ''){
            SetInputActive(false);
        }
    }

    const handleChange = (e) => {
        onSearch(e.target.value);
    }

    return (
        <Container>
            <Logo src="../assets/logo.png"/>
            <SearchInput 
              type="text"
              placeholder="Digite um produto"
              active={inputActive}
              value={search}
              onChange={handleChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
        </Container>
    )
}