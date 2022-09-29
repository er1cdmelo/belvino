import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(1, 0, 1, 0.45);
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Modal = styled.div`
    width: 500px;
    max-width: 90%;
    min-height: 500px;
    max-height: 600px;
    background-color: #fff;
    display: flex;
    flex-direction: column;

    @media (max-width:550px) {
        width: 400px;
        min-height: 400px;
    }
    

    svg {
        color: #ff5555;
        font-size: 2em;
        margin: .3em;
        cursor: pointer;
    }

    .empty {
        text-align: center;
        margin-top: 1em;
    }

    ul {
        display: flex;
        flex-direction: column;
        padding: .5em 0;
        overflow-y: scroll;
        max-height: 360px;
        border-bottom: 1px solid #d3d8d3;

        li {
            height: 120px;
            position: relative;
            border-bottom: 1px solid #d3d8d3;
            display: flex;
            margin: .5em 0;
            padding: .5em;
            position: relative;

            div {
                width: 130px;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    max-height: 80%;
                }
            }

            .info {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;

                .quantity {
                    width: 80px;
                    height: 25px;
                    border: 1px solid #d3d8d3;
                    display: flex;
                    
                    .number {
                        height: 100%;
                        border-left: 1px solid #d3d8d3;
                        border-right: 1px solid #d3d8d3;
                    }

                    button {
                        height: 100%;
                        border: none;
                        cursor: pointer;
                        width: 100%;
                        background-color: #fff;
                    }
                }
            }

            span {
                align-self: flex-end;
                font-weight: 500;
                position: absolute;
                right: 0;
                padding-right: .5em;
            }
        }
    }

    &>span {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 0 .5em;
        font-size: 1.2em;
        justify-self: end;
        flex-grow: 1;
        padding: 1em;
    }
`;