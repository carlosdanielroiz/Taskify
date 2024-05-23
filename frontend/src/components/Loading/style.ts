import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primary};

  img{
    height: 48px;
    width: 48px;
  }
`;