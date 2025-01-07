import { jsx as _jsx } from "react/jsx-runtime";
import { Parallax } from "react-parallax";
import recycleImg from "../../assets/parallax_images/recycle_theme_03.jpg";
import './parallax-patterns-styles.scss';
const Recycle = () => {
    return (_jsx(Parallax, { className: "parallax-pattern-image", blur: 0, bgImage: recycleImg, strength: 800, bgImageStyle: { minHeight: "100vh" } }));
};
export default Recycle;
