import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useContext } from 'react';
import MainNavigation from '../components/Navigation/MainNavigation';
import Footer from '../components/Footer/Footer';
import VitangeClothes from '../components/ParallaxPatterns/VitangeClothes';
import KitchenTools from '../components/ParallaxPatterns/KitchenTools';
import GreatCoats from '../components/ParallaxPatterns/GreatCoats';
import VintageKitchenTools from '../components/ParallaxPatterns/VintageKitchenTools';
import VintageDresses from '../components/ParallaxPatterns/VintageDresses';
import Recycle from '../components/ParallaxPatterns/Recycle';
import Phone from '../components/ParallaxPatterns/Phone';
import { Outlet } from 'react-router-dom';
import { pagesContext } from '../contexts/PagesContext';
const RootLayout = () => {
    const { value } = useContext(pagesContext);
    const children = value[0].children;
    const parallaxArr = [_jsx(VitangeClothes, {}), _jsx(KitchenTools, {}), _jsx(GreatCoats, {}), _jsx(VintageKitchenTools, {}), _jsx(VintageDresses, {}), _jsx(Recycle, {}), _jsx(Phone, {}), _jsx(Footer, {})];
    const pagesArr = children.map((child) => child.element);
    const combinedArr = parallaxArr.flatMap((parallax, index) => [
        parallax,
        pagesArr[index]
    ]);
    return (_jsxs(_Fragment, { children: [_jsx(MainNavigation, {}), _jsx(_Fragment, { children: combinedArr.map((component, index) => (_jsx(React.Fragment, { children: component }, index))) }), _jsx(Outlet, {})] }));
};
export default RootLayout;
