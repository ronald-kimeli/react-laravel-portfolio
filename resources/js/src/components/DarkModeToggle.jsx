import React, { useState, useEffect } from 'react';
import '../css/dark-mode.css'; 

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => 
        localStorage.getItem('dark-mode') === 'true'
    );

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
        localStorage.setItem('dark-mode', darkMode);
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(prevMode => !prevMode)}
            className="btn btn-secondary"
        >
            Toggle Dark Mode
        </button>
    );
};

export default DarkModeToggle;
