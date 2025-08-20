import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState, useEffect } from 'react'
import { DEVELOPER_DATA } from '../../constants'

export function Header() {
  const [isActive, setActive] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isLightTheme, setIsLightTheme] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
    setIsLightTheme(html.classList.contains('light'))
  }

  function closeMenu() {
    setActive(false)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (isActive && !event.target.closest('nav') && !event.target.closest('.menu')) {
        setActive(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isActive])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isActive ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isActive])

  // Detect theme on load
  useEffect(() => {
    const html = document.getElementsByTagName('html')[0]
    setIsLightTheme(html.classList.contains('light'))
  }, [])

  return (
    <Container className={`header-fixed ${scrolled ? 'scrolled' : ''}`}>
      <Router>
        <HashLink smooth to="#home" className="logo">
          <img
            src={isLightTheme ? DEVELOPER_DATA.logoLightTheme : DEVELOPER_DATA.logo}
            alt="Meet Shazib Logo"
            className="logo-image"
          />
        </HashLink>

        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About me
          </NavHashLink>
          <NavHashLink smooth to="#experience" onClick={closeMenu}>
            Experience
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Projects
          </NavHashLink>
          {/* <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink> */}
        </nav>

        <div className="header-controls">
          <div className="theme-toggle">
            <input
              onChange={toggleTheme}
              className="container_toggle"
              type="checkbox"
              id="switch"
              name="mode"
            />
            <label htmlFor="switch">Toggle</label>
          </div>

          <div
            aria-expanded={isActive ? 'true' : 'false'}
            aria-haspopup="true"
            aria-label={isActive ? 'Close menu' : 'Open menu'}
            className={`menu-container ${isActive ? 'active' : ''}`}
            onClick={() => setActive(!isActive)}
          >
            <div className={`menu ${isActive ? 'active' : ''}`}></div>
          </div>
        </div>
      </Router>
    </Container>
  )
}
