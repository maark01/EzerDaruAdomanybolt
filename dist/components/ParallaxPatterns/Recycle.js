import { jsx as _jsx } from "react/jsx-runtime";
import SimpleParallax from 'simple-parallax-js';
import recycleImg from '../../assets/parallax_images/recycle_theme_04.jpg';
import './parallax-patterns-styles.scss';
const Recycle = () => {
    return (_jsx("div", { className: 'parallax-pattern-image', children: _jsx(SimpleParallax, { orientation: 'down', scale: 1.4, delay: 1, children: _jsx("img", { src: recycleImg, alt: 'GreatCoatsImg', className: 'd-flex mx-auto' }) }) }));
};
export default Recycle;
