import React from 'react';
import useScript from '../hooks/useScript';

const PinterestWidget = () => {
    useScript('//assets.pinterest.com/js/pinit.js');

    return (
        <a
            data-pin-do="buttonBookmark"
            data-pin-hover="true"
            data-pin-round="true"
            data-pin-tall="true"
            href="https://www.pinterest.com/pin/create/button/"
            dangerouslySetInnerHTML={{ __html: 'pintrestbtn' }}
        />
    );
};

export default PinterestWidget;
