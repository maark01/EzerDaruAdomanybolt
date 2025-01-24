import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SimpleParallax from 'simple-parallax-js';
import donationImg from '../../assets/parallax_images/vintage_clothing.jpg';
import './parallax-patterns-styles.scss';
const Donation = () => {
    return (_jsxs("div", { className: 'parallax-pattern-image', children: [_jsx(SimpleParallax, { orientation: 'down', scale: 1.4, delay: 1, children: _jsx("img", { src: donationImg, alt: 'GreatCoatsImg', className: 'd-flex mx-auto' }) }), _jsx("div", { className: 'parallax-pattern-content', children: _jsx("span", { className: 'parallax-pattern-title', children: "Ezer Daru Adom\u00E1nybolt" }) })] }));
};
export default Donation;
