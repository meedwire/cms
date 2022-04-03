import styled, { css } from "styled-components";

interface ITabItem {
  isActive?: boolean;
}

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #dadada;
  align-self: flex-start;
  border-radius: 32px;
  margin-top: 16px;
`;

export const TabItem = styled.div<ITabItem>`
  padding: 8px 16px;
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: #5b5b5b;
      padding: 8px 16px;
      border-radius: 32px;
      color: white;
    `};
`;
