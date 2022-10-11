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
  width: 800px;
  max-width: 90%;
  min-height: 400px;
  max-height: 600px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em;

  svg {
    color: #ff5555;
    font-size: 2em;
    cursor: pointer;
  }

  .row {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .img-container {
      height: 300px;
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1em;
      border: 0.1em solid #d3d8d3;

      img {
        max-width: 90%;
        max-height: 90%;
      }
    }

    .column {
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;

      .name {
        width: 100%;
        position: relative;
        font-size: 1.6em;
      }

      .price {
        max-width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        position: relative;
        text-align: center;
        font-size: 1.25em;
      }

      .addButton {
        max-width: 100%;
        width: 200px;
        background-color: #ff5555;
        border: none;
        padding: 1em 0.5em;
        color: #fff;
        font-size: 1.1em;
        font-weight: 600;
        cursor: pointer;
        transition: 0.2s;

        &:hover {
          background-color: #ff6666;
        }
      }
    }
  }

  @media (max-width: 550px) {
    width: 400px;
    min-height: 400px;
  }

  @media (max-width: 600px) {
    .row {
      flex-direction: column;
      align-items: center;

      .img-container {
        height: 200px;
        border: none;
      }

      .column {
        width: 100%;
        flex-direction: column;
        align-items: center;
        padding: 0 1em;

        .name {
          text-align: center;
          border-top: .1em solid #d3d8d3
        }

        .price {
          margin: 1em 0;
        }
      }
    }
  }
`;
