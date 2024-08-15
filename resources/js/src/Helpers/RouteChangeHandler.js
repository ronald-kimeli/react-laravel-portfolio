import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NProgress from '../Helpers/nprogressConfig';

const RouteChangeHandler = () => {
    const location = useLocation();

    useEffect(() => {
        NProgress.start(); 

        const handleComplete = () => {
            NProgress.done(); 
        };

        const unlisten = () => {
            handleComplete();
        };

        unlisten();

        return () => {
            handleComplete();
        };
    }, [location]);

    return null;
};

export default RouteChangeHandler;
