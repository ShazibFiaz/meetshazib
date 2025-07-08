import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  .hero-text{
    .hello-text{
    font-size: 40px;
    color:var(--primary);
    }
    .title-text{
    font-size: 25px;
    color:var(--primary);
     margin: 1rem 0;
    }
    h1{
      font-size: 7rem;
    }
    
    p.small-resume {
      margin-bottom: 5rem;
      font-size: 25px
    }
  }
// New added
  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top:5rem;
    padding-left:1rem;

    img,span{
      font-size: 3rem;
      width: 3.5rem;
    }
  }


  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .hero-image{
    img{
      max-width: 500px;
    }
  }

  .hero-image-mobile{
    display: none;
    img{
      max-width: 300px;
      margin-top: 2rem;
    }
  }


  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      display: none;
    }

    .hero-image-mobile{
      display: block;
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
  }
  @media(max-width: 480px){
    margin-top: 45%;
  }
`