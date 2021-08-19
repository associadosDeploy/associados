import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  background: #060606;
  color: #666;

  img{
    cursor:pointer;
    width:100%;
    transition: opacity 0.5s;
  }

  img:hover{
    opacity: 0.9;
  }
  
  .banner_web{
    width:100%;
  }
  
  .banner_mob{
    display:none;
  }
  
  @media(max-width: 530px){
    .banner_mob{
      display:flex;
    }

    .banner_web{
      display:none;
    }
  }
`;