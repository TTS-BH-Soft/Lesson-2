import { useState } from 'react'
import NavImage from '../../assets/logo/main-logo.png'
import PlusIcon from '../../assets/plus-icon.svg'
import { Link } from 'react-router-dom'
import {
  NavbarContainer,
  Logo,
  Nav,
  NavBox,
  NavBoxLink,
  NavLink,
  RootLink,
  ChildLink,
  Button,
  HamburgerMenu,
  MobileMenu,
} from './NavStyled'

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains('mobile-menu')) {
      setIsMenuOpen(false)
    }
  }

  return (
    <NavbarContainer>
      <Logo src={NavImage} alt="Logo" />
      <HamburgerMenu $isMenuOpen={isMenuOpen} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerMenu>

      <Nav $isActive={isMenuOpen}>
        <NavBoxLink>
          <NavLink href="/" className="active">
            Home
            <img
              src={PlusIcon}
              alt="Plus Icon"
              style={{ margin: '0 4px', width: '7px', height: '7px' }}
            />
          </NavLink>
          <ChildLink href="/about-us">About</ChildLink>
          <ChildLink href="/service">Service</ChildLink>
          <ChildLink href="/gallery">Gallery</ChildLink>
          <RootLink href="/blog">Blog</RootLink>
        </NavBoxLink>

        <NavBox>
          <Link to="/contact-us">
            <Button type="button">Contact</Button>
          </Link>
        </NavBox>
      </Nav>

      {isMenuOpen && (
        <MobileMenu className="mobile-menu" onClick={handleBackgroundClick}>
          <span className="close-btn" onClick={toggleMenu}>
            ✕
          </span>

          <NavLink href="/">Home</NavLink>
          <ChildLink href="/about-us">About</ChildLink>
          <ChildLink href="/service">Service</ChildLink>
          <ChildLink href="/gallery">Gallery</ChildLink>
          <RootLink href="/blog">Blog</RootLink>
          <Button className="btn">Contact</Button>
        </MobileMenu>
      )}
    </NavbarContainer>
  )
}
