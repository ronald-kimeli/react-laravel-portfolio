import './bootstrap';

import React from 'react';
import ReactDom from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
// Import all of Bootstrap's CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import our custom CSS
import '../js/src/css/w3.css';
// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import router from './src/router/router';

ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
