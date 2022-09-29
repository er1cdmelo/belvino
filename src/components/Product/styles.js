import styled from 'styled-components'

export const Card = styled.div`
    height: 320px;
    border: .1em solid #d3d8d3;
    display: flex;
    justify-content: space-between;
    align-items: auto;
    flex-direction: column;
    text-align: center;
    font-family: sans-serif;
    margin: .5em 0;
    padding-top: .8em;
    position: relative;

    

    img {
        max-height: 40%;
        margin: auto
    }

    h3 {
        color: #7a7a7a;
        font-weight: 200;
        margin: auto
    }

    span {
        font-size: 1.5em;
        font-weight: 600;
        margin: auto;
    }

    @media (max-width:550px) {
        height: 280px;

        h3 {
            font-size: .9em
        }

        span {
            font-size: 1.3em;
        }
    }
`;