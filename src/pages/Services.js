import React from 'react';
import useApi from '../hooks/useApi';
import { StyledH3 } from '../styles/typography';
import Layout from '../components/Layout';

function Services() {
    const { data } = useApi();
    return (
        <Layout>
            <div>
                <StyledH3>I'm Tjenster</StyledH3>
            </div>
        </Layout>
    );
}

export default Services;
