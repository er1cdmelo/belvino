import styled from "styled-components";

export const Nav = styled.header`
    width: 100%;
    height: 50px;
    padding: 2em 3em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ff5454;
    margin-bottom: 2em;

    @media (max-width:550px) {
        padding: 1.5em;
    }

    h2 {
        color: #FFF
    }
`;