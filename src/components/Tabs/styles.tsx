import styled from "styled-components";
import { GlobalTitle, View } from "../GlobalComponents";
import { IPropsTabItem } from "./types";

export const Container = styled(View)`
  flex-direction: row;
  box-sizing: border-box;
  transition: all 300ms;
`;

export const TabContainer = styled(View)`
  flex-direction: row;
  background-color: #d6d6d6;
  border-radius: 32px;
`;

export const TabItem = styled(View)<IPropsTabItem>`
  padding: 8px 22px;
  border-radius: 32px;
  background-color: ${(props) => (props.active ? "#bfbfbf" : "#d6d6d6")};
`;

export const Title = styled(GlobalTitle)``;
