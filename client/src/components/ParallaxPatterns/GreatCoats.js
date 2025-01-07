import { jsx as _jsx } from "react/jsx-runtime";
import { Parallax } from "react-parallax";
import outdoorFurnitureImg from "../../assets/parallax_images/clothes_2.jpg";
import './parallax-patterns-styles.scss';
const OutdoorFurniture = () => {
    return (_jsx(Parallax, { className: "parallax-pattern-image", blur: 0, bgImage: outdoorFurnitureImg, strength: 800, bgImageStyle: { minHeight: "100vh" } }));
};
export default OutdoorFurniture;
