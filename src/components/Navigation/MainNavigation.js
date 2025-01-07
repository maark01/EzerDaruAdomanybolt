import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { pagesContext } from '../../contexts/PagesContext';
import daruImg from '../../assets/parallax_images/daru_logo_white.png';
import './MainNavigation.scss';
const MainNavigation = () => {
    const { value: pages } = useContext(pagesContext);
    const handleNavLinkClick = (event, id) => {
        const element = document.getElementById(id);
        if (element) {
            event.preventDefault();
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (_jsxs(Navbar, { expand: 'lg', "data-bs-theme": 'dark', className: 'px-3 header', children: [_jsx(Navbar.Brand, { href: '/', className: 'fw-bold', children: _jsx("img", { className: 'daruLogo', src: daruImg, alt: 'daruImg' }) }), _jsx(Navbar.Toggle, { "aria-controls": 'navbarNavAltMarkup' }), _jsx(Navbar.Collapse, { id: 'navbarNavAltMarkup', children: _jsx(Nav, { className: 'me-auto', children: pages.map((elem) => elem.children
                        .filter((child) => child.menubar)
                        .map((child) => (_jsx(NavLink, { to: `/${child.path}`, onClick: (e) => handleNavLinkClick(e, child.path), className: 'header-link', children: child.name }, child.path)))) }) })] }));
};
export default MainNavigation;
