import React from "react";
import styled from "styled-components";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Container = styled.div`
    flex-basis: 0;
    flex-grow: 1;
    background-color: ${props => props.active ? "#fff" : "#f3f3f3"};
    padding: 20px;
    cursor: pointer;
    border-radius: 15px;
    box-shadow: ${props => props.active ? "0px 0px 15px #03030315" : "none"};
    transition: all .3s;

    & > p {
        color: #a3a3a3;
        font-size: 1rem;
        margin-top: 10px;
    }
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: ${props => props.active ? "2px solid #ececec" : "none"};
    gap: 20px;

    & > h5 {
        font-family: var(--f-ubuntu);
        font-size: 1.5rem;
        font-weight: 400;
        color: #222;
    }

    & > svg {
        font-size: 2.5rem;
    }
`

export default function AccordionCard({ query, reply }) {
    const [active, setActive] = React.useState(false);

    const handleClick = () => {
        setActive(!active);
        console.log(active);
    }

    return (
        <Container
            active={active}
            onClick={handleClick}
        >
            <Header
                active={active}
            >
                <h5>{query}</h5>
                {active
                    ? <ExpandLessIcon />
                    : <ExpandMoreIcon />
                }
            </Header>
            {active && <p>{reply}</p>}
        </Container>
    )
}