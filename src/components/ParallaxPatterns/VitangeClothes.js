import { jsx as _jsx } from "react/jsx-runtime";
import { Parallax } from 'react-parallax';
import donationImg from '../../assets/parallax_images/vintage_clothing.jpg';
import './parallax-patterns-styles.scss';
const Donation = () => {
    return (_jsx(Parallax, { className: 'parallax-pattern-image', blur: 0, bgImage: donationImg, strength: 800, bgImageStyle: { minHeight: '100vh' }, children: _jsx("div", { className: 'parallax-pattern-content', children: _jsx("span", { className: 'parallax-pattern-title', children: "Ezer Daru Adom\u00E1nybolt" }) }) }));
};
export default Donation;
