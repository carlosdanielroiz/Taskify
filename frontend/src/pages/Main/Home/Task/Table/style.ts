import styled from "styled-components";
import { theme } from "../../../../../styles/Theme";

export const Container = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 32px;
  
  tr{
    height: 48px;
    color: ${theme.colors.black};

    &.header{
      height: 32px;
      background-color: ${theme.colors.gray50};
      td{
        border: 1px solid ${theme.colors.gray100};
      }
    }


    td{
      border: 1px solid ${theme.colors.gray100};
      text-align: center;
      padding: 4px 8px;
      width: fit-content;
      min-width: fit-content;

      img{
        height: 32px;
        width: 32px;
        border-radius: 50%;
        border: 2px solid ${theme.colors.white};
        margin: 0;
        margin-left: -16px;
      }

      span{
        padding: 1px 12px;
        border-radius: 20px;
        font-size: 12px;
        background-color: ${theme.colors.gray50};
        border: 1px solid ${theme.colors.gray100};
        color: ${theme.colors.black};

        &.done{
          background-color: #cdfad4;
          border: 1px solid #c5edcc;
          color: #002f02;
        }

        &.urgent{
          background-color: #f8e6cb;
          border: 1px solid #edd6ba;
          color: #551f00;
        }

        &.important{
          background-color: #f1ccf8;
          border: 1px solid #eabeef;
          color: #300042;
        }

        &.reminder{
          background-color: #caf4f8;
          border: 1px solid #c5edeb;
          color: #02463c;
        }

        &.on-going{
          background-color: #fad0ce;
          border: 1px solid #efc1be;
          color: #490000;
        }
      }

      &:not(.desc) {
        padding: 0 24px;
        width: fit-content;
        min-width: 80px;
        max-width: fit-content;
      }

      &.desc{
        text-align: left;
        width: max-content;
      }

      &.done{
        background-color: ${theme.colors.green};
       
        color: ${theme.colors.white};
      }
      &.on-going{
        background-color: ${theme.colors.red};
        
        color: ${theme.colors.white};
      }
      &.urgent{
        background-color: ${theme.colors.yellow};
       
        color: ${theme.colors.white};
      }
      &.important{
        background-color: ${theme.colors.purple};
        
        color: ${theme.colors.white};
      }
      &.reminder{
        background-color: ${theme.colors.blue};
        color: ${theme.colors.white};
      }
      &.to-do{
        background-color: ${theme.colors.gray50};
        color: ${theme.colors.gray400};
      }
    }
  }
`;