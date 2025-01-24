import { jsx as _jsx } from "react/jsx-runtime";
import SimpleParallax from "simple-parallax-js";
import phoneImg from '../../assets/parallax_images/oldphone_5.jpg';
import './parallax-patterns-styles.scss';
const Phone = () => {
    return (_jsx("div", { className: 'parallax-pattern-image', children: _jsx(SimpleParallax, { orientation: 'down', scale: 1.25, delay: 1, children: _jsx("img", { src: phoneImg, alt: 'GreatCoatsImg', className: 'd-flex mx-auto' }) }) }));
};
export default Phone;
