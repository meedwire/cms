import styled from "styled-components";

export const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid #dadada;
  box-sizing: border-box;
  margin: 16px 16px 0px 16px;
  border-radius: 22px;
  cursor: move;
  transition: all 300ms;
  position: relative;
  background-color: white;
  &:hover {
    box-shadow: 0px 0px 18px 4px #dadada;
  }
`;

export const GlobalTitle = styled.p``;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  padding: 8px;
  outline: none;
  border: none;
  box-shadow: 0px 0px 5px 0px #bdbdbd;
  transition: all 100ms;
  align-items: center;
  &:active {
    box-shadow: 0px 0px 2px 0px #bdbdbd;
    transform: scale(0.998);
  }
`;

export const View = styled.div`
  display: flex;
  flex-direction: column;
`;
