import styled from "styled-components";

export const CartBtn = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    transition: .3s;
    cursor: pointer;

    &:hover {
        background-color: #fff;
        color: #ff5454;
    }

    svg {
        font-size: 1.5em
    }
`;