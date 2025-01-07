import React from "react"
import RootLayout from "../root/RootLayout"
import News from "../pages/News/News"
import About from "../pages/About/About"
import Founders from "../pages/Founders/Founders"
import Customers from "../pages/Customers/Customers"
import Mission from "../pages/Mission/Mission"
import Contact from "../pages/Contact/Contact"


export const PagesContextDefaults = {
    value: [
        {
            path: "/",
            element: <RootLayout />,
            errorElement: <>PageNotFound</>,
            children: [
                { id: "news", name: "Hírek", path: "news", menubar: true, element: <News/> },
                { id: "about", name: "Rólunk", path: "about", menubar: true, element: <About/> },
                { id: "founders", name: "Adományozóknak", path: "founders", menubar: true, element: <Founders/> },
                { id: "customers", name: "Vásárlóknak", path: "customers", menubar: true, element: <Customers/> },
                { id: "mission", name: "Küldetésünk", path: "mission", menubar: true, element: <Mission/> },
                { id: "contact", name: "Kapcsolatok", path: "contact", menubar: true, element: <Contact/> },
            ]
        }
    ]
}

export const pagesContext = React.createContext(PagesContextDefaults)