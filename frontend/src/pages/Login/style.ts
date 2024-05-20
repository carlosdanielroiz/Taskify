import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Content = styled.main`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.white};
`;

export const Form = styled.form`
  width: calc(100% - 48px);
  padding: 24px;
  max-width: 380px;
  border-radius: 16px;
  background-color: white;
  gap: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  img{
    height: 56px;
    width: 56px;
  }

  h1{
    font-size: 20px;
    font-weight: 500;
    color: ${theme.colors.black};
    margin: 0;
    text-align: center;
  }

  span{
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.gray400};
    margin: 0;
    text-align: center;

    a{
      font-weight: 500;
      color: ${theme.colors.black};
    }
  }

  div.social-media{
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 12px;
    margin: 16px 0;

    div.op{
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      border: 1px solid ${theme.colors.gray100};
      cursor: pointer;
      border-radius: 8px;

      svg{
        height: 20px;
        width: 20px;
      }
    }
  }

  div.or{
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;

    div.line{
      height: 1px;
      width: 100%;
      background-color: ${theme.colors.gray100};
    }

    span{
      font-size: 12px;
      font-weight: 400;
      color: ${theme.colors.gray400};
      margin: 0;
      text-align: center;
    }
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;

  label{
    font-size: 16px;
    font-weight: 500;
    color: ${theme.colors.black};
    margin: 0;
  }

  div.input-and-icon{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 36px;
    border: 1px solid ${theme.colors.gray100};
    gap: 12px;
    border-radius: 8px;

    input{
      width: 100%;
      height: 100%;
      font-size: 14px;
      font-weight: 400;
      color: ${theme.colors.black};
      border: none;
      background-color: transparent;
      outline: none;
      margin-left: 12px;

      &::placeholder{
        color: ${theme.colors.gray400};
      }
    }

    svg{
      height: 22px;
      width: 22px;
      min-width: 22px;
      margin-right: 12px;
      cursor: pointer;

      path{
        stroke: ${theme.colors.gray400};
      }
    }
  }
`;

export const RememberAndForgot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  
  label{
    font-size: 14px;
    font-weight: 500;
    color: ${theme.colors.black};
    margin: 0;
  }

  div{
    display: flex;
    align-items: center;
    gap: 4px;
  }

  a{
    font-size: 14px;
    font-weight: 400;
    color: ${theme.colors.black};
    margin: 0;
  }

`;

export const Button = styled.button`
  border: none;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${theme.colors.gray900};
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
`;