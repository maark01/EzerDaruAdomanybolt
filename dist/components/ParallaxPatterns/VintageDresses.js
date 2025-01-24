import { jsx as _jsx } from "react/jsx-runtime";
import SimpleParallax from 'simple-parallax-js';
import coatStandImg from '../../assets/parallax_images/clothes_3.jpg';
import './parallax-patterns-styles.scss';
const CoatStand = () => {
    return (_jsx(SimpleParallax, { orientation: 'right', scale: 1.4, delay: 1, children: _jsx("img", { src: coatStandImg, alt: 'GreatCoatsImg', className: 'd-flex mx-auto' }) }));
};
export default CoatStand;
