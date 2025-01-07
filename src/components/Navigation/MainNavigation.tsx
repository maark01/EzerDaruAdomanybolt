import React, { useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { NavbarSection } from './navbar-model'
import { pagesContext } from '../../contexts/PagesContext'
import daruImg from '../../assets/parallax_images/daru_logo_white.png'
import './MainNavigation.scss'

const MainNavigation = () => {

  const { value: pages } = useContext(pagesContext)

  const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    const element = document.getElementById(id)
    if (element) {
      event.preventDefault()
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Navbar expand='lg' data-bs-theme='dark' className='px-3 header'>
      <Navbar.Brand href='/' className='fw-bold'>
        <img className='daruLogo' src={daruImg} alt='daruImg' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='navbarNavAltMarkup' />
      <Navbar.Collapse id='navbarNavAltMarkup'>
        <Nav className='me-auto'>
          {pages.map((elem: NavbarSection) =>
            elem.children
              .filter((child: { menubar: boolean }) => child.menubar)
              .map((child) => (
                <NavLink key={child.path} to={`/${child.path}`} onClick={(e) => handleNavLinkClick(e, child.path)} className='header-link'>
                  {child.name}
                </NavLink>
              ))
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MainNavigation
