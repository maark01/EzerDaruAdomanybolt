import { jsx as _jsx } from "react/jsx-runtime";
import SimpleParallax from 'simple-parallax-js';
import clothesImg from '../../assets/parallax_images/kitchen_tools_02.jpg';
import './parallax-patterns-styles.scss';
const Clothes = () => {
    return (_jsx("div", { className: 'parallax-pattern-image', children: _jsx(SimpleParallax, { orientation: 'down', scale: 1.4, delay: 1, children: _jsx("img", { src: clothesImg, alt: 'GreatCoatsImg', className: 'd-flex mx-auto' }) }) }));
};
export default Clothes;
