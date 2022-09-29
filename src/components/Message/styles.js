import styled from "styled-components";

export const Msg = styled.div`
  width: 280px;
  height: 60px;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: fixed;
  bottom: .5em;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.8em;
  z-index: 2;
  
`;
