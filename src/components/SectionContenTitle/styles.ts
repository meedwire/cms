import styled from "styled-components";
import { Button, View } from "../GlobalComponents";

export const MoreButton = styled(Button)`
  margin-left: auto;
  margin-right: -12px;
`;

export const Container = styled(View)`
  flex-direction: row;
  padding: 4px 16px;
  transition: all 100ms;
  align-items: center;
  ${MoreButton} {
    visibility: hidden;
  }
  &:hover {
    box-shadow: 0px 0px 13px #dadada;
    ${MoreButton} {
      visibility: visible;
    }
  }
`;

export const Title = styled.h3``;
