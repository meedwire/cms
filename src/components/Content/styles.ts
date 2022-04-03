import styled from "styled-components";

export const Title = styled.p`
  margin-bottom: 8px;
`;

export const FakeSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #dadada;
  width: 100%;
  border-radius: 8px;
  align-items: center;
  padding: 8px;
  box-sizing: border-box;
`;

export const FakeHeader = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  background-color: #bdbdbd;
  border-radius: 4px;
`;

export const FakeSimpleText = styled.p`
  display: flex;
  flex-direction: column;
  width: calc(100% - 20px);
  height: 20px;
  background-color: #bdbdbd;
  border-radius: 4px;
  margin-left: 20px;
  margin-top: 8px;
`;
