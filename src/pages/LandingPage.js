import React from 'react';
import useApi from '../hooks/useApi';
import Slideshow from '../components/Slideshow';
import CircleLoader from '../components/CircleLoader';

const LandingPage = () => {
    const { landingpage, error, isLoading } = useApi();

    return (
        <div>
            {isLoading ? (
                <CircleLoader />
            ) : error ? (
                <p>{error}</p>
            ) : landingpage ? (
                <Slideshow landingpage={landingpage} />
            ) : null}
        </div>
    );
};
export default LandingPage;
