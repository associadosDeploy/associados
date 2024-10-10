import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  background: #060606;
  color: #666;

  .button_content{
    margin: 0 1rem;
  }

  img{
    cursor:pointer;
    height: 400px;
    width:100%;
    transition: opacity 0.5s;
  }

  img:hover{
    opacity: 0.9;
  }
  
  
  .banner_mob{
    display:none;
  }
  
  @media(max-width: 530px){
    .banner_mob{
      display:flex;
      min-height: 300px;
    }

    .banner_web{
      display:none;
    }

    img{
      height: 200px;
      
    }
  }
`;