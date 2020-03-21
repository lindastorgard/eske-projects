import React from 'react';
import useApi from '../hooks/useApi';
import Slideshow from '../components/Slideshow';

const LandingPage = () => {
    const { landingpage, error, isLoading } = useApi();
    // console.log(landingpage);

    return (
        <div>
            {isLoading ? (
                <p>Loading</p>
            ) : error ? (
                <p>{error}</p>
            ) : landingpage ? (
                <div>
                    <Slideshow landingpage={landingpage} />
                </div>
            ) : null}
        </div>
    );
};
export default LandingPage;
