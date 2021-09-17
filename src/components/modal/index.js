import React from "react";
import { Container, ModalBody } from "./styled";


export default ({ children, active, setActive }) => {

    const handleModalClick = (e) => {
        if(e.target.classList.contains('modalBg')){
            setActive(false);
        }
    }

    return(
        <Container 
            onClick={handleModalClick} 
            active={active}
            className="modalBg"
        > 
            <ModalBody>{children}</ModalBody>
        </Container>
    )

}