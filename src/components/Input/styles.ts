import styled from "styled-components";
import { GlobalTitle } from "../GlobalComponents";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled(GlobalTitle)``;

export const Input = styled.input`
  padding: 8px;
  outline: none;
  border: 1px solid #dadada;
  &:focus {
    border: 1px solid #989898;
  }
`;

export const TextError = styled(GlobalTitle)``;
