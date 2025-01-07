import { jsx as _jsx } from "react/jsx-runtime";
import { Parallax } from "react-parallax";
import clothesImg from "../../assets/parallax_images/kitchen_tools_02.jpg";
import './parallax-patterns-styles.scss';
const Clothes = () => {
    return (_jsx(Parallax, { className: "parallax-pattern-image", blur: 0, bgImage: clothesImg, strength: 800, bgImageStyle: { minHeight: "100vh" } }));
};
export default Clothes;
