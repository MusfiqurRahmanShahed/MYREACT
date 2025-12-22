import {useState, useEffect} from 'react';
const useWindowWidth = () => {
    const [onSmallScreen, setOnSmallScreen] = useState(false);
    const handleResize = () => {
        if (window.innerWidth < 768) {
            setOnSmallScreen(true);
        } else {
            setOnSmallScreen(false);
        }
    };
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return {onSmallScreen};
};

export default useWindowWidth;