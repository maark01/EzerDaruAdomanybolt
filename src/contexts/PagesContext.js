import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import RootLayout from "../root/RootLayout";
import News from "../pages/News/News";
import About from "../pages/About/About";
import Founders from "../pages/Founders/Founders";
import Customers from "../pages/Customers/Customers";
import Mission from "../pages/Mission/Mission";
import Contact from "../pages/Contact/Contact";
export const PagesContextDefaults = {
    value: [
        {
            path: "/",
            element: _jsx(RootLayout, {}),
            errorElement: _jsx(_Fragment, { children: "PageNotFound" }),
            children: [
                { id: "news", name: "Hírek", path: "news", menubar: true, element: _jsx(News, {}) },
                { id: "about", name: "Rólunk", path: "about", menubar: true, element: _jsx(About, {}) },
                { id: "founders", name: "Adományozóknak", path: "founders", menubar: true, element: _jsx(Founders, {}) },
                { id: "customers", name: "Vásárlóknak", path: "customers", menubar: true, element: _jsx(Customers, {}) },
                { id: "mission", name: "Küldetésünk", path: "mission", menubar: true, element: _jsx(Mission, {}) },
                { id: "contact", name: "Kapcsolatok", path: "contact", menubar: true, element: _jsx(Contact, {}) },
            ]
        }
    ]
};
export const pagesContext = React.createContext(PagesContextDefaults);
