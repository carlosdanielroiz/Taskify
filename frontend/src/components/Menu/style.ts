import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { NavLink } from "react-router-dom";

export const Container = styled.aside`
  width: calc(240px - 36px);
  min-width: calc(240px - 36px);
  padding: 0 18px;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  border-right: 1px solid ${theme.colors.gray100};
  
  div.logo{
    width: 100%;
    padding: 24px 0;
    margin-bottom: 24px;
    border-bottom: 1px solid ${theme.colors.gray100};
    display: flex;
    align-items: center;
    gap: 12px;

    img{
      width: 40px;
      height: 40px;
    }

    span{
      font-size: 18px;
      font-weight: 500;
      color: ${theme.colors.black};
      margin: 0;
    }
  }

  nav{
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 12px;

    h5{
      font-size: 12px;
      font-weight: 500;
      color: ${theme.colors.gray400};
      margin: 0;
    }
  }

  nav.footer{
    display: flex;
    flex-direction: column;
    width: calc(100% - 36px);
    padding: 0 18px;
    gap: 12px;
    position: absolute;
    bottom: 0;

    a.user{
      width: 100%;
      padding: 24px 0;
      border-top: 1px solid ${theme.colors.gray100};
      display: flex;
      align-items: center;
      position: relative;
      text-decoration: none;
      gap: 12px;

      div.text{
        display: flex;
        flex-direction: column;
        gap: 4px;

        div.name-and-verify{
          display: flex;
          align-items: center;
          gap: 8px;

          h4{
            font-size: 14px;
            font-weight: 600;
            color: ${theme.colors.black};
            margin: 0;
          }

          svg{
            height: 14px;
            width: 14px;

            path.selo{
              fill: #2ebef2;
              stroke: #2ebef2;
              z-index: 1;
            }

            path.check{
              stroke: white;
              z-index: 999;
            }
          }
        }

        span{
          font-size: 10px;
          font-weight: 600;
          color: ${theme.colors.gray400};
          margin: 0;
        }
      }
      
      img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }

      svg.arrow{
        width: 12px;
        height: 12px;
        position: absolute;
        right: 12px;

        path{
          stroke: ${theme.colors.gray400};
        }
      }
    }
  }
`;

export const Link = styled(NavLink)`
  width: 100%;
  height: 32px;
  border-radius: 8px;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  text-decoration: none;

  div.active{
    width: 20px;
    height: 20px;
    border-radius: 6px;
    background-color: ${theme.colors.primary};
    position: absolute;
    left: -34px;

    display: none;
  }

  svg.icon{
    width: 16px;
    height: 16px;
    margin-left: 12px;

    path{
      stroke: ${theme.colors.gray400};
    }
  }

  svg.icon-2{
    width: 16px;
    height: 16px;
    margin-left: 12px;

    path{
      stroke: ${theme.colors.gray400};
    }
  }

  svg.arrow{
    width: 12px;
    height: 12px;
    position: absolute;
    right: 12px;
    display: none;

    path{
      stroke: ${theme.colors.black};
    }
  }

  span{
    font-size: 14px;
    font-weight: 600;
    color: ${theme.colors.gray400};
    margin: 0;
  }

  &.active{
    background-color: ${theme.colors.gray50};

    div.active{
      display: block;
    }

    svg.icon path{
      stroke: ${theme.colors.primary};
      fill: ${theme.colors.primary};
    }

    svg.icon-2{
      path{
        stroke: ${theme.colors.primary};
      }

      path.fill{
        fill: ${theme.colors.primary};
        stroke: ${theme.colors.primary};
      }

      path.fill-2{
        stroke: ${theme.colors.gray50};
      }
    }

    svg.arrow{
      display: block;
    }

    span{
      color: ${theme.colors.black};
    }
  }
`;

export const Logout = styled.div`
  width: 100%;
  height: 32px;
  border-radius: 8px;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  text-decoration: none;
  cursor: pointer;

  div.active{
    width: 20px;
    height: 20px;
    border-radius: 6px;
    background-color: ${theme.colors.primary};
    position: absolute;
    left: -34px;

    display: none;
  }

  svg.icon{
    width: 16px;
    height: 16px;
    margin-left: 12px;

    path{
      stroke: ${theme.colors.gray400};
    }
  }

  svg.icon-2{
    width: 16px;
    height: 16px;
    margin-left: 12px;


    path.fill{
      stroke: ${theme.colors.gray400};
    }
  }

  svg.arrow{
    width: 12px;
    height: 12px;
    position: absolute;
    right: 12px;
    display: none;

    path{
      stroke: ${theme.colors.black};
    }
  }

  span{
    font-size: 14px;
    font-weight: 600;
    color: ${theme.colors.gray400};
    margin: 0;
  }
`;