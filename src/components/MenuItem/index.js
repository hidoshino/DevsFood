import React from 'react'
import { LinkArea, LinkIcon } from './styled'
import { useHistory, useLocation } from 'react-router-dom'

export default ({title, icon, link}) => {

    const history = useHistory();
    const location = useLocation();

    let isActive = location.pathname == link;

    const handleLinkCLick = e => {
        e.preventDefault();
        history.push(link);
    }

    return (
        <LinkArea data-tip={title} data-for="tip-right" active={isActive} href={link} onClick={handleLinkCLick}>
            <LinkIcon  src={icon} />
        </LinkArea>
    );
}