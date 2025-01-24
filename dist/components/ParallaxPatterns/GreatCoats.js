import { jsx as _jsx } from "react/jsx-runtime";
import GreatCoatsImg from '../../assets/parallax_images/clothes_2.jpg';
import SimpleParallax from "simple-parallax-js";
import './parallax-patterns-styles.scss';
const GreatCoats = () => {
    return (_jsx("div", { className: 'parallax-pattern-image', children: _jsx(SimpleParallax, { orientation: 'left', scale: 1.26, delay: 1, children: _jsx("img", { src: GreatCoatsImg, alt: 'GreatCoatsImg', className: 'd-flex mx-auto' }) }) }));
};
export default GreatCoats;
