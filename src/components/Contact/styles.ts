import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10rem;

  header{
    text-align: center;
    h2{
      font-size: 4rem;
      margin-bottom: 2rem;
    }
    p{
      color: var(--primary);
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 1.6;
    }
  }

  .contacts{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    margin: 4rem 0;
    
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      max-width: 35rem;
      gap: 1.5rem;
      background-color: var(--primary);
      border-radius: 1.4rem;
      padding: 2rem 2.8rem;
      transition: all 0.25s ease;
      min-width: 0;
      
      img{
        width: 4rem;
        height: 4rem;
        flex-shrink: 0;
      }
      
      a{
        color: var(--black);
        font-weight: 500;
        font-size: 1.6rem;
        text-decoration: none;
        white-space: nowrap;
        
        &:hover{
          text-decoration: underline;
        }
      }
      
      &:hover{
        background-color: var(--secondary);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        
        a{
          color: #FFF;
        }
      }
    }
  }

  @media(max-width: 960px){
    header{
      h2{
        font-size: 3.2rem;
      }
      p{
        font-size: 1.6rem;
      }
    }
    
    .contacts{
      flex-direction: column;
      gap: 2rem;
      margin: 3rem 0;
      
      div{
        width: 100%;
        max-width: 100%;
        padding: 2rem;
        
        img{
          width: 3.5rem;
          height: 3.5rem;
        }
        
        a{
          font-size: 1.4rem;
        }
      }
    }
  }

  @media(max-width: 600px){
    header{
      h2{
        font-size: 2.8rem;
      }
      p{
        font-size: 1.4rem;
        padding: 0 1rem;
      }
    }
    
    .contacts{
      padding: 0 1rem;
      
      div{
        flex-direction: column;
        text-align: center;
        gap: 1rem;
        padding: 1.5rem;
        
        img{
          width: 3rem;
          height: 3rem;
        }
        
        a{
          font-size: 1.3rem;
        }
      }
    }
  }
`