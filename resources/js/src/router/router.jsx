import { createBrowserRouter } from 'react-router-dom';
import Projects from '../pages/Projects';
import NotFound from '../pages/NotFound';
import Contact from '../pages/Contact';
import GuestLayout from '../layouts/GuestLayout';
import About from '../pages/About';
import Resume from '../pages/Resume';
import Skills from '../pages/Skills';
import Services from '../pages/Services';

const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/",
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
            }
        ],
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default router;

