import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import "../pages-styles.scss";
const Customers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (_jsxs("div", { className: "text-box", id: "customers", children: [_jsx("h2", { children: "V\u00E1s\u00E1rl\u00F3knak" }), _jsx("p", { children: "\u00DCzleteinkben jelenleg csak k\u00E9szp\u00E9nzzel tudnak fizetni" }), _jsx("p", { children: "Meg\u00E9rt\u00E9s\u00FCket k\u00F6sz\u00F6n\u00F6nj\u00FCk sz\u00E9pen!" })] }));
};
export default Customers;
