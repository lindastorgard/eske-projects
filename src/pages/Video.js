import React from 'react';
import useApi from '../hooks/useApi';
import { StyledH3 } from '../styles/typography';
import Layout from '../components/Layout';

function Video() {
    const { data } = useApi();
    if (data) {
    }
    return (
        <Layout>
            <StyledH3>I'm Video</StyledH3>
        </Layout>
    );
}

export default Video;
