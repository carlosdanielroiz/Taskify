import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const Container = styled.section`
  width: calc(100%);
  height: 100%;
  display: flex;
`;

export const List = styled.div`
  width: calc(240px - 36px);
  min-width: calc(240px - 36px);
  padding: 0 18px;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 12px;
  border-right: 1px solid ${theme.colors.gray100};
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.gray50};
  }

  h5{
    font-size: 12px;
    font-weight: 500;
    color: ${theme.colors.gray400};
    margin: 0;
  }
`;

export const Search = styled.div`
  width: 100%;
  height: 32px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.gray100};
  background-color: ${theme.colors.gray50};
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;

  input{
    font-size: 16px;
    height: 28px;
    width: 100%;
    background-color: transparent;
    color: ${theme.colors.black};
    outline: none;
    border: none;

  }

  svg{
    height: 18px;
    width: 18px;
    min-width: 18px;
    margin-left: 4px;

    path{
      stroke: ${theme.colors.gray400};
    }
  }
  
`;

export const Add = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: ${theme.colors.gray400};
  margin-bottom: 24px;
  margin-top: 24px;

  svg{
    height: 18px;
    width: 18px;
    min-width: 18px;

    path{
      stroke: ${theme.colors.gray400};
    }
  }
`;

export const Tasks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: ${theme.colors.gray400};
  height: 32px;
  border-radius: 8px;
  margin-top: -4px;

  &.active{
    background-color: ${theme.colors.gray50};
    color: ${theme.colors.black};

    svg path {
      stroke:  ${theme.colors.black};
    }
  }

  svg{
    height: 18px;
    width: 18px;
    min-width: 18px;
    margin-left: 4px;

    path{
      stroke: ${theme.colors.gray400};
    }
  }
`;