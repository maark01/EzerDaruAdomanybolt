import { jsx as _jsx } from "react/jsx-runtime";
import { Parallax } from "react-parallax";
import phoneImg from "../../assets/parallax_images/oldphone_4.jpg";
import './parallax-patterns-styles.scss';
const Phone = () => {
    return (_jsx(Parallax, { className: "parallax-pattern-image d-flex justify-content-center", blur: 0, bgImage: phoneImg, bgImageStyle: { maxHeight: "100vh" } }));
};
export default Phone;
