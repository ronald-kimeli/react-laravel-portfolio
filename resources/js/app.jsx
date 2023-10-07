import './bootstrap';

import React from 'react';
import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GuestLayout from './src/layouts/GuestLayout';
import Home from './src/pages/Home';
import About from './src/pages/About';
import Resume from './src/pages/Resume';
import Skills from './src/pages/Skills';
import Services from './src/pages/Services';

// Import all of Bootstrap's CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import our custom CSS
import '../js/src/scss/styles.scss';
import '../js/src/css/w3.css';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import Projects from './src/pages/Projects';
import NotFound from './src/pages/NotFound';
import Contact from './src/pages/Contact';

const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "skills",
                element: <Skills />,
            },
            {
                path: "services",
                element: <Services />,
            },
            {
                path: "projects",
                element: <Projects />,
            },
            {
                path: "resume",
                element: <Resume />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
