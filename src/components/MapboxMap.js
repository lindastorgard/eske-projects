import React from 'react';
import styled from 'styled-components';
import { StyledParagraph } from '../styles/typography';
import ReactMapboxGl, { Popup, Marker } from 'react-mapbox-gl';

const StyledPopup = styled.div`
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
`;

const image = require('../assets/logo192.png');

const StyledMarker = styled.img`
    width: 20px;
    height: 20px;
`;

const StyledName = styled(StyledParagraph)`
    font-size: ${({ theme }) => theme.fontSizes[1]};
    margin: 7px 7px 0px 7px;
`;

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
                circleRadius={[30]}
                containerStyle={{
                    height: '100%',
                    width: '100%',
                    overflow: 'hidden',
                }}
            >
                <Marker coordinates={[10.73516, 59.923117]} anchor="top">
                    <StyledMarker src={image} />
                </Marker>
                <Popup coordinates={[10.73516, 59.923117]}>
                    <StyledPopup>
                        <StyledName>Eske Interiør</StyledName>
                    </StyledPopup>
                </Popup>
            </Map>
        </>
    );
};
export default Mapbox;
