import { Outlet } from 'react-router-dom';
import Navbar from '../Includes/Navbar';
import RouteChangeHandler from '../Helpers/RouteChangeHandler';


const GuestLayout = () => {
    // const [loading, setLoading] = useState(true);
    // const location = useLocation();

    // useEffect(() => {
    //     setLoading(true);
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //     }, 200); 

    //     return () => clearTimeout(timer);
    // }, [location]);

    return (
        <>
            <Navbar />
            {/* {loading && <LoadingSpinner />} */}
            <RouteChangeHandler />
            <Outlet />
            {/* <Footer /> */}
        </>
    );
};

export default GuestLayout;
