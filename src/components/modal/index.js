import React from "react";
import { Container, ModalBody } from "./styled";


export default ({ children, active }) => {

    return(
        <Container active={active}> 
            <ModalBody>{children}</ModalBody>
        </Container>
    )

}