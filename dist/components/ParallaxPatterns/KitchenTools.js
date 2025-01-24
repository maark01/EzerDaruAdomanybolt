import { jsx as _jsx } from "react/jsx-runtime";
import SimpleParallax from "simple-parallax-js";
import furnitureImg from '../../assets/parallax_images/kitchen_tools.jpg';
import './parallax-patterns-styles.scss';
const Furniture = () => {
    return (_jsx("div", { className: 'parallax-pattern-image', children: _jsx(SimpleParallax, { orientation: 'down', scale: 1.6, delay: 1, children: _jsx("img", { src: furnitureImg, alt: 'GreatCoatsImg', className: 'd-flex mx-auto' }) }) }));
};
export default Furniture;
