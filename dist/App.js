import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { PagesContextDefaults } from './contexts/PagesContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
const App = () => {
    const [pages] = useState(PagesContextDefaults.value);
    const router = createBrowserRouter(pages);
    return (_jsx("div", { className: 'App', children: _jsx(RouterProvider, { router: router }) }));
};
export default App;
