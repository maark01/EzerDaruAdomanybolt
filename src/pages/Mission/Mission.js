import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import "./Mission.scss";
const Mission = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (_jsxs("div", { className: "mission-box", id: "mission", children: [_jsx("h2", { children: "T\u00E1rsadalmi szerepv\u00E1llal\u00E1sunk" }), _jsxs("ul", { children: [_jsx("li", { children: "K\u00F6rnyezetv\u00E9delem" }), _jsx("li", { children: "Tov\u00E1bbadom\u00E1nyoz\u00E1s" }), _jsx("li", { children: "Szoci\u00E1lis v\u00E1s\u00E1rl\u00E1s" })] })] }));
};
export default Mission;
