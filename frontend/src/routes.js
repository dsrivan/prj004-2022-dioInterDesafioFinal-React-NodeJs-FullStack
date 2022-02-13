import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './Pages/home';
import ProductDetails from './Pages/product/index';

const MainRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<HomePage />}
            />
            <Route
                path={`/product/:id`}
                element={<ProductDetails />}
            />
        </Routes>
    )
}

export default MainRoutes;
