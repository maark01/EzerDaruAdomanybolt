import { jsx as _jsx } from "react/jsx-runtime";
import { Parallax } from 'react-parallax';
import coatStandImg from '../../assets/parallax_images/clothes_3.jpg';
import './parallax-patterns-styles.scss';
const CoatStand = () => {
    return (_jsx(Parallax, { className: 'parallax-pattern-image', style: { backgroundColor: '#fdf9f0' }, blur: 0, bgImage: coatStandImg, strength: 800, bgImageStyle: { minHeight: '100vh' } }));
};
export default CoatStand;
