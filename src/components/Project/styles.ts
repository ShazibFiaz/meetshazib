import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project{
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      overflow: hidden;
      cursor: pointer;
      
      &:hover{
        transform: translateY(-5px);
        background-color: var(--secondary);
      }

 .project-banner {
  width: 100%;
  aspect-ratio: 16/9;
  position: relative; /* makes child absolutely fill */
  overflow: hidden;

  .banner-image {
    position: absolute;   /* force it to fill */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;    /* ensures cover fill */
    display: block;
    transition: transform 0.25s ease;
  }

  &:hover .banner-image {
    transform: scale(1.05);
  }
}


      
      .body{
        padding: 2rem 1.8rem;
        flex: 1;
        
        h3{
          margin-bottom: 2rem;
        }

        p{
          letter-spacing: 0.12rem;
          margin-bottom: 2rem;
          a{
            color: #FFFF;
            border-bottom: 1px solid var(--primary);
            transition: color 0.25s;
            &:hover{
              color: var(--primary);
            }
          }
        }
      }

      footer{
        padding: 0 1.8rem 2rem;
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }
    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
    }
    
    .project{
      .project-banner{
        aspect-ratio: 16/9;
      }
    }
  }
`