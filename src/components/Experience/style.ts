import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  position: relative;

  .experience-header {
    text-align: center;
    margin-bottom: 4rem;
    width: 100%;
  }

  .experience-subtitle {
    font-size: 20px;
    margin-top: 0.5rem;
    font-weight: 600;
  }

  .experience-timeline {
    width: 100%;
    max-width: 800px;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      left: 30px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(180deg, var(--primary), var(--secondary, var(--primary)));
      opacity: 0.3;
    }
  }

  .experience-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 3rem;
    position: relative;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
    
    &.animate {
      opacity: 1;
      transform: translateY(0);
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .experience-timeline-dot {
    width: 16px;
    height: 16px;
    background: var(--primary);
    border-radius: 50%;
    position: relative;
    z-index: 2;
    margin-right: 2rem;
    margin-top: 0.5rem;
    flex-shrink: 0;
    box-shadow: 0 0 0 4px rgba(var(--primary-rgb, 59, 130, 246), 0.2);
    transition: all 0.3s ease;

    &::after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      background: #fff;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .experience-content {
    flex: 1;
    background: rgba(var(--primary-rgb, 59, 130, 246), 0.02);
    border-radius: 12px;
    padding: 2rem;
    border: 1px solid rgba(var(--primary-rgb, 59, 130, 246), 0.1);
    transition: all 0.3s ease;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      left: -8px;
      top: 24px;
      width: 0;
      height: 0;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-right: 8px solid rgba(var(--primary-rgb, 59, 130, 246), 0.1);
    }

    &:hover {
      background: rgba(var(--primary-rgb, 59, 130, 246), 0.05);
      border-color: rgba(var(--primary-rgb, 59, 130, 246), 0.2);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(var(--primary-rgb, 59, 130, 246), 0.1);
    }
  }

  .experience-header-info {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.5rem;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .experience-role {
    font-size: 24px;
    font-weight: 600;
    color: var(--primary);
    margin: 0;
    line-height: 1.2;
  }

  .experience-year {
    font-size: 16px;
    font-weight: 500;
    background: rgba(var(--primary-rgb, 59, 130, 246), 0.1);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    white-space: nowrap;
  }

  .experience-company {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }

  .company-name {
font-size: 20px;
    font-weight: 600;
  }

  .company-location {
    font-size: 16px;
    
    &::before {
      content: '•';
      margin-right: 0.5rem;
    }
  }

  .experience-description {
    font-size: 19px;
    line-height: 1.6;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .experience-technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .tech-tag {
    background: rgba(var(--primary-rgb, 59, 130, 246), 0.1);
    color: var(--primary);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
    border: 1px solid rgba(var(--primary-rgb, 59, 130, 246), 0.2);
    transition: all 0.3s ease;

    &:hover {
      background: rgba(var(--primary-rgb, 59, 130, 246), 0.2);
      transform: translateY(-1px);
    }
  }

  .experience-achievements {
    margin: 0;
    padding-left: 1.5rem;
    
    li {
      font-size: 15px;
      line-height: 1.5;
      margin-bottom: 0.5rem;
      position: relative;
      
      &::marker {
        color: var(--primary);
      }
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  h2 {
    display: inline-block;
    margin-bottom: 1rem;
    font-size: 36px;
    margin-top: 0;
    color: var(--primary);
  }

  /* Tablet styles */
  @media (max-width: 960px) {
    padding: 1rem;
    
    .experience-header {
      margin-bottom: 3rem;
    }
    
    .experience-timeline {
      max-width: 100%;
      
      &::before {
        left: 20px;
      }
    }
    
    .experience-timeline-dot {
      width: 12px;
      height: 12px;
      margin-right: 1.5rem;
      
      &::after {
        width: 6px;
        height: 6px;
      }
    }
    
    .experience-content {
      padding: 1.5rem;
      
      &::before {
        left: -6px;
        top: 20px;
        border-right-width: 6px;
        border-top-width: 6px;
        border-bottom-width: 6px;
      }
    }
    
    .experience-role {
      font-size: 22px;
    }
    
    .company-name {
      font-size: 16px;
    }
    
    h2 {
      font-size: 32px;
    }
    
    .experience-subtitle {
      font-size: 16px;
    }
  }

  /* Mobile styles */
  @media (max-width: 480px) {
    padding: 1rem 0.5rem;
    
    .experience-header {
      margin-bottom: 2rem;
    }
    
    .experience-timeline {
      &::before {
        left: 15px;
      }
    }
    
    .experience-timeline-dot {
      width: 10px;
      height: 10px;
      margin-right: 1rem;
      
      &::after {
        width: 4px;
        height: 4px;
      }
    }
    
    .experience-content {
      padding: 1rem;
      
      &::before {
        left: -5px;
        top: 16px;
        border-right-width: 5px;
        border-top-width: 5px;
        border-bottom-width: 5px;
      }
    }
    
    .experience-header-info {
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .experience-role {
      font-size: 18px;
    }
    
    .experience-year {
      font-size: 14px;
      align-self: flex-start;
    }
    
    .company-name {
      font-size: 15px;
    }
    
    .company-location {
      font-size: 13px;
    }
    
    .experience-description {
      font-size: 14px;
    }
    
    .tech-tag {
      font-size: 12px;
      padding: 0.2rem 0.6rem;
    }
    
    .experience-achievements li {
      font-size: 14px;
    }
    
    h2 {
      font-size: 28px;
    }
    
    .experience-subtitle {
      font-size: 14px;
    }
  }

  /* Extra small mobile devices */
  @media (max-width: 320px) {
    padding: 0.5rem 0.25rem;
    
    .experience-timeline {
      &::before {
        left: 12px;
      }
    }
    
    .experience-timeline-dot {
      width: 8px;
      height: 8px;
      margin-right: 0.75rem;
      
      &::after {
        width: 3px;
        height: 3px;
      }
    }
    
    .experience-content {
      padding: 0.75rem;
      
      &::before {
        left: -4px;
        top: 12px;
        border-right-width: 4px;
        border-top-width: 4px;
        border-bottom-width: 4px;
      }
    }
    
    .experience-role {
      font-size: 16px;
    }
    
    .company-name {
      font-size: 14px;
    }
    
    .experience-description {
      font-size: 13px;
    }
    
    h2 {
      font-size: 24px;
    }
  }
`;