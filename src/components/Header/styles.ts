import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 10rem;
  
  background-color: rgba(33, 33, 33, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  transition: all 0.3s ease;
  
  &.scrolled {
    background-color: rgba(33, 33, 33, 0.95);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    padding: 1.2rem 10rem;
  }

  .logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    z-index: 1001;
    
    .logo-image {
      height: 4rem;
      width: 100%;
      transition: all 0.3s ease;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
      
      &:hover {
        transform: scale(1.05);
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
      }
    }
  }

  nav {
    display: flex;
    align-items: center;
    gap: 3rem;
    
    a {
      color: #FFFFFF;
      padding: 0.8rem 1.2rem;
      font-family: 'Red Hat Display', sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      font-size: 1.4rem;
      letter-spacing: 0.5px;
      text-decoration: none;
      position: relative;
      transition: all 0.3s ease;
      border-radius: 0.8rem;

      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: var(--primary);
        transition: all 0.3s ease;
        transform: translateX(-50%);
      }

      &:hover {
         color: var(--primary);
        
        &::before {
          width: 80%;
        }
      }

      &.active {
        
        &::before {
          width: 80%;
        }
      }
    }
  }

  .header-controls {
    display: flex;
    align-items: center;
    gap: 2rem;
    z-index: 1001;
  }

  .theme-toggle {
    display: flex;
    align-items: center;
    
    input[type=checkbox] {
      height: 0;
      width: 0;
      visibility: hidden;
      outline: none;
    }

    label {
      cursor: pointer;
      text-indent: -9999px;
      width: 55px;
      height: 30px;
      background: var(--primary);
      display: block;
      border-radius: 100px;
      position: relative;
      transition: all 0.3s ease;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      
      &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      }

      &:after {
        content: '';
        background: #FFF;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: absolute;
        top: 5px;
        left: 4px;
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      }
    }

    input:checked + label {
      background: var(--secondary);
    }

    input:checked + label:after {
      left: calc(100% - 5px);
      transform: translateX(-100%);
    }
  }

  .menu-container {
    cursor: pointer;
    padding: 0.8rem;
    border-radius: 0.8rem;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  .menu {
    width: 2.4rem;
    height: 0.2rem;
    background: #FFFFFF;
    position: relative;
    cursor: pointer;
    display: none;
    transition: all 0.3s ease;

    &:before, &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 0.2rem;
      background: #FFFFFF;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    &:before {
      top: -0.8rem;
    }
    
    &:after {
      bottom: -0.8rem;
    }

    &.active {
      background-color: transparent;
      
      &:before {
        top: 0;
        transform: rotate(45deg);
      }
      
      &:after {
        bottom: 0;
        transform: rotate(-45deg);
      }
    }
  }

  @media (max-width: 960px) {
    padding: 1.8rem 3rem;
    
    &.scrolled {
      padding: 1.2rem 3rem;
    }

    .logo {
      .logo-image {
        height: 3.5rem;
      }
    }

    .menu {
      display: block;
    }

    nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: linear-gradient(135deg, var(--primary), var(--blue));
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4rem;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-100%);
      transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);

      &.active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      a {
        font-size: 2.4rem;
        padding: 1.5rem 3rem;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 1.5rem;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        
        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
      }
    }
  }

  @media (max-width: 600px) {
    padding: 1.5rem 2rem;
    
    &.scrolled {
      padding: 1rem 2rem;
    }

    .logo {
      .logo-image {
        height: 3rem;
      }
    }

    .header-controls {
      gap: 1.5rem;
    }

    .theme-toggle {
      label {
        width: 45px;
        height: 25px;
        
        &:after {
          width: 17px;
          height: 17px;
          top: 4px;
        }
      }
    }
  }

  
`