import styled from 'styled-components';

import { Content } from '../ContentMax/styles';

export const NavMenu = styled.div`
  display:flex;
  flex-direction: row;
  justify-content:center;
  align-items:center;

  width:100%;
  background: var(--black);
  border-bottom: 2px solid var(--yellow);
  color: var(--white);
`;

export const MaxContent = styled(Content)`
  display:flex;
  flex-direction: row;
  align-items:center;
  padding: 1rem 2rem;
  margin: 0.5rem 0 !important;

  >div{
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    width:100%;
  }

  .div_menu_web{
    flex:1;
  }

  img{
    width: 62px;
    height: 82px;
    transition: opacity 0.5s;
    cursor: pointer;
  }

  img:hover{
    opacity: 0.5;
  }

  a{ 
    display:flex;
    flex-direction: row;
    align-items:center;
    cursor: pointer;
    transition: color 0.5s;
    margin: 0 0.5rem;
    
    div{
      font-weight: bold;
    }
  } 

  a:hover{
    color: var(--yellow);
  }

  div{
    display:flex;
    flex-direction: row;
    align-items:center;

    svg{
      margin-left: 0.5rem;
    }
  }

  .login_button{
    cursor:pointer;
    font-weight: bold;
    transition: color 0.5s;
  }

  .login_button:hover{
    color: var(--yellow);
  }


  .div_menu_mobile{
    display:none;
  }

  @media(max-width: 530px){
    .div_menu_web{
      display:none;
    }

    .div_menu_mobile{
      display:flex;
      justify-content:flex-end;

      >div{
        display:flex;
        flex-direction:row;
        position:fixed;
     
        top: 0;
        width:100%;
        right: 0;
        height: 100vh;
        background:rgba(0,0,0,0.2);

        >div{
          padding: 0;
          margin: 0;
          display:flex;
          flex-direction:column;
          width:80%;
          height: 100vh;
          position:absolute;
          right: 0;
          top: 0;
          background: var(--light-black);

          a{
            padding: 1rem;
            background:  var(--light-black);
            width:100%;
            color: #fff;
            border-bottom: 2px solid var(--yellow);
          }
        }
      }
    }
  }
`;

export const Logo = styled.div`
  width: 100%;

  img{
    cursor: pointer;
  }

  img:hover{
    opacity: 0.9;
  }
`;

export const Login = styled.div`
  display:flex;
  flex-direction:row;
  align-items: center;
  font-weight: 400;
  justify-content:center;
  
  #login_button{
    display:flex;
    flex-direction:row;
    align-items: center;
    transition: color 0.5s;
    cursor: pointer;
  }

  svg{
    margin-left: 1rem;
  }
`;

export const Menu = styled.div`
  a {
    margin: 0 2rem;
    cursor: pointer !important;
    font-weight: 700;
    transition: color 0.5s;

    &:last-child{
      margin-right: 0;
    }

    &:hover{
      color: var(--yellow);
    }
  }
`;