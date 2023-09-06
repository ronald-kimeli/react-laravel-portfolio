import { Outlet } from "react-router-dom";
import Footer from "../Includes/Footer";
import Navbar from "../Includes/Navbar";

const GuestLayout = () => {
    return (
        <>
            <Navbar />

            <Outlet />

            {/* <Footer /> */}
        </>
    );
};

export default GuestLayout;
