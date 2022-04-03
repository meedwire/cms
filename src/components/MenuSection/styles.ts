import styled from "styled-components";
import { Button, View } from "../GlobalComponents";
import { IContainerProps } from "./types";

export const Container = styled(View)<IContainerProps>`
  padding: 8px;
  border-radius: 8px 0px 8px 8px;
  box-shadow: 0px 0px 14px #dadada;
  background-color: white;
  position: absolute;
  left: ${({ position }) => (position?.x || 0) - 60}px;
  top: ${({ position }) => (position?.y || 0) + 30}px;
`;

export const Anchor = styled(View)`
  transform: rotate(45deg);
  width: 20px;
  height: 20px;
  position: relative;
  border-radius: 5px;
  top: -8px;
  right: 3px;
  background-color: white;
`;
