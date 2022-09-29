import styled from "styled-components";

export const Dashboard = styled.div`
    width: 100%;
    min-height: 100vh;
    margin: auto;
    padding: 1em .5em;
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(auto-fill, minmax(80px, 250px));
    justify-content: space-evenly;

    @media (max-width:550px) {
        grid-template-columns: repeat(auto-fill, minmax(80px, 150px));
    }
`;