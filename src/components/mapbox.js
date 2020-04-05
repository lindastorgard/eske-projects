import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoibGluZGFzdG9yZ2FyZCIsImEiOiJjazczZnNjN2swYm96M2RtaXhpcmFnd2Q4In0.0EWzA-z-UE0VGMsxoR_7Ug',
});

const Mapbox = () => {
    return (
        <>
            <Map
                // eslint-disable-next-line react/style-prop-object
                style="mapbox://styles/lindastorgard/ck8n1v2rh0r131iouqic4o1eo"
                zoom={[15]}
                center={[10.73516, 59.923117]}
                containerStyle={{
                    height: '100%',
                    width: '100%',
                    overflow: 'hidden',
                }}
            >
                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[10.73516, 59.923117]} />
                </Layer>
            </Map>
        </>
    );
};
export default Mapbox;
