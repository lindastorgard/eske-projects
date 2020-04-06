import { useLayoutEffect } from 'react';

const setScroll = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLayoutEffect(() => {
        // Get original value of body overflow
        const originalStyle = window.getComputedStyle(document.body).overflow;
        // Prevent scrolling on mount
        document.body.style.overflow = 'hidden';
        // Re-enable scrolling when component unmounts
        return () => (document.body.style.overflow = originalStyle);
    }, []); // Empty array ensures effect is only run on mount and unmount
};

export default setScroll;