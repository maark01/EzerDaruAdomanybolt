import { jsx as _jsx } from "react/jsx-runtime";
import { Parallax } from "react-parallax";
import furnitureImg from "../../assets/parallax_images/kitchen_tools.jpg";
import './parallax-patterns-styles.scss';
const Furniture = () => {
    return (_jsx(Parallax, { className: "parallax-pattern-image", blur: 0, bgImage: furnitureImg, strength: 800, bgImageStyle: { minHeight: "100vh" } }));
};
export default Furniture;
