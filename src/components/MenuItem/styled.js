import styled from 'styled-components'

export const LinkArea = styled.a`   
    display: flex;
    justify-Content: Center;
    align-Items: center;
    margin-bottom: 10px;
    width: 60px;
    height: 60px;
    border-radius: 10px;
    background-color: ${props=>props.active ? '#0B4D0B' : 'transparent' };
`;

export const LinkIcon = styled.img` 
    width: 34px;
    height: auto;
`;