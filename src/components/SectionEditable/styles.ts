import styled, { css } from "styled-components";
import { IconButton } from "@mui/material";
import { View } from "../GlobalComponents";

export const MoreButton = styled(IconButton)`
  && {
    margin-left: auto;
    margin-right: -12px;
  }
`;

export const Container = styled(View)<{ isFake?: boolean }>`
  flex-direction: row;
  padding: 4px 16px;
  transition: all 100ms;
  align-items: center;
  ${MoreButton} {
    visibility: hidden;
  }
  ${({ isFake }) =>
    !isFake &&
    css`
      &:hover {
        box-shadow: 0px 0px 13px #dadada;
        ${MoreButton} {
          visibility: visible;
        }
      }
    `}
`;
