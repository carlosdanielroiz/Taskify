import styled, { keyframes } from 'styled-components'
import { theme } from '../../styles/Theme'

export const Animation = keyframes`
  0% {
    transform: translate(0%, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h5{
    display: inline-block;
    font-size: 20px;
    margin: 0;
    font-weight: 200;
    color: ${theme.colors.gray};
    animation: ${Animation} 1500ms linear infinite;
    white-space: nowrap;
    padding: 0 16px;
    transition: all 5s linear;
  }
  div.carousel{
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

export const Box = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 48px;
`;

export const Logo = styled.img`
  height: 56px;
  width: fit-content;
  margin-bottom: 72px;
  animation-delay: 1000ms;
`;

export const Title = styled.h1`
  font-size: 48px;
  margin: 0;
  font-weight: 200;
  color: ${theme.colors.gray};
  animation-delay: 1200ms;
  margin-left: -4px;
  margin-bottom: 8px;
  text-align: center;
`;

export const Text = styled.h2`
  font-size: 16px;
  margin: 0;
  font-weight: 400;
  color: ${theme.colors.gray};
  animation-delay: 1300ms;
`;
