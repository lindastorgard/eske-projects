import React from 'react';
import styled from 'styled-components';

const Map = ReactMapboxGl({
    accessToken: 'you need to create your own',
});

<Map
    className="map"
    style="mapbox://styles/mapbox/light-v10"
    zoom={[12]}
    center={[18.05852, 59.34603]}
    containerStyle={{
        height: '100%',
        width: '100%',
    }}
>
    <Layer type="symbol" id="points1" anchor="bottom" layout={{ 'icon-image': 'harbor-15' }}>
        <Feature coordinates={[18.05852, 59.34603]} />
    </Layer>
</Map>;
