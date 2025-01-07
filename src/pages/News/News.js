import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import "../pages-styles.scss";
const News = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (_jsxs("div", { className: "text-box", id: "news", children: [_jsx("h2", { children: "H\u00EDrek" }), _jsx("h3", { children: "Megnyitottuk m\u00E1sodik \u00FCzlet\u00FCnket!" }), _jsx("p", { children: "Ez\u00FAton szeretn\u00E9nk t\u00E1j\u00E9koztatni a kedves publikumot, hogy megnyitottuk m\u00E1sodik \u00FCzlet\u00FCnket Nemes utc\u00E1ban Pestszentimre sz\u00EDv\u00E9ben!" })] }));
};
export default News;