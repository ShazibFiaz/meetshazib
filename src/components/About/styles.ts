import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  gap: 4rem;
  padding: 2rem 0;

  .about-text, .skills-section {
    flex: 1;
    width: 50%;
    height: 100%;
  }

  .skills-section {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .stats {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 4rem;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .stat-number {
    font-size: 4rem;
    font-weight: bold;
    color: var(--primary);
    line-height: 1;
  }

  .stat-label {
    font-size: 4rem;
    font-weight: 500;
    color: inherit;
    margin-top: 0.5rem;
  }

  .separator {
    font-size: 4rem;
    color: var(--primary);
    opacity: 0.6;
  }

  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    width: 100%;
    flex: 1;
  }

  .skill-row {
    display: grid;
    grid-template-columns: 60px 1fr;
    gap: 1.5rem;
    align-items: center;
    width: 100%;
    opacity: 0;
    transform: translateX(-20px);
    animation: slideInLeft 0.6s ease forwards;
    padding: 0.8rem;
    border-radius: 8px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(var(--primary-rgb, 59, 130, 246), 0.05);
    }
  }

  .skill-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: rgba(var(--primary-rgb, 59, 130, 246), 0.1);
    border-radius: 50%;
    transition: transform 0.3s ease, background-color 0.3s ease;

    &:hover {
      transform: scale(1.1);
      background: rgba(var(--primary-rgb, 59, 130, 246), 0.2);
    }

    img {
      width: 28px;
      height: 28px;
      object-fit: contain;
    }
  }

  .skill-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;
  }

  .skill-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.3rem;
  }

  .skill-name {
    font-size: 20px; /* Fixed: was 20pxrem */
    font-weight: 600;
  }

  .skill-percentage {
    font-weight: 600;
    font-size: 15px;
  }

  .bar-container {
    width: 100%;
    height: 8px;
    background-color: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  .bar-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--primary), var(--secondary, var(--primary)));
    width: 0%;
    border-radius: 4px;
    transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    
    &.animate {
      animation: pulse 0.5s ease-in-out;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      animation: shine 2s ease-in-out;
    }
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 3.4rem;
      height: 3.4rem;
      object-fit: contain;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.1);
    }
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 36px;
    margin-top: 0rem;
    color: var(--primary);
  }

  h3 {
    margin-top: 2rem;
    font-size: 28px;
    color: var(--primary);
  }

  p {
    font-size: 25px;
    letter-spacing: 0.1rem;
    font-weight: 500;
    line-height: 1.6;
  }

  .about-image {
    text-align: center;
    
    img {
      margin-top: 2rem;
      width: 75%;
      filter: grayscale(0);
      transition: filter 0.5s;
      
      &:hover {
        filter: grayscale(0);
      }
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(var(--primary-rgb, 59, 130, 246), 0.4);
    }
    70% {
      box-shadow: 0 0 0 6px rgba(var(--primary-rgb, 59, 130, 246), 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(var(--primary-rgb, 59, 130, 246), 0);
    }
  }

  @keyframes shine {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  /* Tablet styles */
  @media (max-width: 960px) {
    display: block;
    text-align: left; /* Changed from center to left for better readability */
    gap: 2rem;
    padding: 1rem;
    
    .about-text, .skills-section {
      width: 100%;
      flex: none;
    }
    
    .skills-section {
      margin-top: 3rem;
    }
    
    .hard-skills {
      align-items: flex-start; /* Changed from center to flex-start */
    }
    
    h2 {
      font-size: 32px;
      text-align: center;
    }

    h3 {
      font-size: 24px;
    }

    p {
      font-size: 22px;
    }
    
    .about-image {
      display: flex;
      justify-content: center;
      max-width: 100%;
      margin-top: 2rem;
      
      img {
        width: 80%;
        max-width: 400px;
        margin-top: 1rem;
        filter: grayscale(0);
        transition: filter 0.5s;
        
        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }

  /* Mobile styles */
  @media (max-width: 480px) {
    padding: 1rem 0.5rem;
    gap: 1rem;
    
    .about-text, .skills-section {
      width: 100%;
    }
    
    .skills-section {
      margin-top: 2rem;
    }
    
    .stats {
      flex-direction: column;
      gap: 1rem;
      margin-top: 2rem;
    }

    .separator {
      display: none;
    }

    .stat-number {
      font-size: 2.5rem;
    }

    .stat-label {
      font-size: 1.2rem;
    }

    h2 {
      font-size: 28px;
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 22px;
    }

    p {
      font-size: 18px;
      letter-spacing: 0.05rem;
    }
    
    .hard-skills {
      gap: 1rem;
      margin-top: 1rem;
    }
    
    .skill-row {
      grid-template-columns: 40px 1fr;
      gap: 1rem;
      padding: 0.5rem;
    }
    
    .skill-icon {
      width: 40px;
      height: 40px;
      
      img {
        width: 24px;
        height: 24px;
      }
    }

    .skill-name {
      font-size: 16px;
    }

    .skill-percentage {
      font-size: 14px;
    }
    
    .bar-container {
      height: 6px;
    }

    .about-image {
      margin-top: 1rem;
      
      img {
        width: 90%;
        max-width: 300px;
        margin-top: 1rem;
      }
    }
  }

  /* Extra small mobile devices */
  @media (max-width: 320px) {
    padding: 0.5rem 0.25rem;
    
    h2 {
      font-size: 24px;
    }
    
    p {
      font-size: 16px;
    }
    
    .skill-row {
      grid-template-columns: 35px 1fr;
      gap: 0.75rem;
      padding: 0.4rem;
    }
    
    .skill-icon {
      width: 35px;
      height: 35px;
      
      img {
        width: 20px;
        height: 20px;
      }
    }
    
    .skill-name {
      font-size: 14px;
    }
    
    .skill-percentage {
      font-size: 12px;
    }
    
    .stat-number {
      font-size: 2rem;
    }
    
    .stat-label {
      font-size: 1rem;
    }
  }
`;