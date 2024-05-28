import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import Arrow from "../../../../assets/icons/arrow-down.svg"

export const Container = styled.section`
  width: 100%;
  height: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

export const Banner = styled.div`
  width: 100%;
  height: 25vh;
  min-height: 25vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 4px 4px 16px #26272850;

  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  svg.edit{
    height: 16px;
    width: 16px;
    padding: 6px;
    background-color: ${theme.colors.white};
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 8px;

    path{
      stroke: ${theme.colors.black};
    }
  }
`;

export const Content = styled.div`
  width: calc(100% - 48px);
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin: 24px 0;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 80px;
  justify-content: space-between;

  div{
    display: flex;
    align-items: center;
    gap: 32px;

    h1{
      font-size: 32px;
      font-weight: 400;
      color: ${theme.colors.black};
      margin: 0;
    }
    
    div.peoples{
      display: flex;
      align-items: center;
      gap: 0;
      margin-left: 12px;
      
      img{
        height: 32px;
        width: 32px;
        border-radius: 50%;
        border: 2px solid ${theme.colors.white};
        margin: 0;
        margin-left: -16px;
      }

      span{
        font-size: 14px;
        font-weight: 500;
        color: ${theme.colors.gray400};
        margin: 0;
        margin-left: 12px;
      }
    }

    button{
      height: 40px;
      width: 120px;
      border-radius: 12px;
      cursor: pointer;
      border: none;
      outline: none;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${theme.colors.primary};
      box-shadow: 0 0 16px #0266FF50;
      font-size: 15px;
      font-weight: 400;
      color: ${theme.colors.white};

      &.request{
        background-color: ${theme.colors.gray900};
        box-shadow: 0 0 16px #26272850;
      }
    }
  }
`;

export const MenuTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 48px;
  height: 56px;
  margin-top: 24px;
  min-height: 56px;
  align-items: center;
  border-top: 1px solid ${theme.colors.gray100};
  border-bottom: 1px solid ${theme.colors.gray100};

  div.line{
    display: flex;
    align-items: center;
    gap: 16px;
    height: 100%;
    width: 50%;

    &.l2{
      position: relative;
      div.division{
        height: 75%;
        width: 1px;
        background-color: ${theme.colors.gray100};
      }
    }

    span.tasks{
      display: flex;
      align-items: center;
      gap: 4px;
      height: 100%;
      min-height: 100%;
      justify-content: center;
      border-bottom: 2px solid ${theme.colors.primary};
      font-size: 16px;
      font-weight: 400;
      color: ${theme.colors.black};
      padding: 0 4px;

      svg{
        height: 18px;
        width: 18px;

        path{
          stroke: ${theme.colors.black};
        }
     }
    }

    div.date{
      display: flex;
      align-items: center;
      gap: 4px;
      height: 100%;
      min-height: 100%;
      justify-content: center;
      font-size: 16px;
      font-weight: 400;
      color: ${theme.colors.black};
      padding: 0 4px;
      margin-left: 12px;

      label{
        display: flex;
        align-items: center;
        gap: 4px;
      }

      input{
        border: none;
        outline: none;
        font-size: 14px;
        font-weight: 400;
        background-color: transparent;
        color: ${theme.colors.gray900};
        margin-left: 8px;
        width: fit-content;
        width: 120px;

        &::-webkit-calendar-picker-indicator {
          background-image: url(${Arrow});
          background-size: 12px 12px;
          background-repeat: no-repeat;
          background-position: center;
          opacity: 0.8;
          cursor: pointer;
        }
      }

      svg{
        height: 18px;
        width: 18px;

        path{
          stroke: ${theme.colors.black};
        }
     }
    }

    span.qnt{
      padding: 4px 8px;
      border-radius: 4px;
      background-color: ${theme.colors.gray100};
      color: ${theme.colors.gray900};
      font-size: 10px;
      font-weight: 500;
      margin: 0;
    }
  }
`;

export const Search = styled.div`
  width: 160px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.gray100};
  background-color: ${theme.colors.gray50};
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 4px;
  justify-content: flex-end;
  position: absolute;
  right: 0px;

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: ${theme.colors.primary};
  gap: 4px;

  svg{
    height: 24px;
    width: 24px;
    min-width: 24px;

    path{
      stroke: ${theme.colors.primary};
    }
  }
`;