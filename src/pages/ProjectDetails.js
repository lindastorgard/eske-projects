import React from 'react';
import useApi from '../hooks/useApi';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Container = styled.div`
    margin-left: 0;
    margin-top: 80px;
    ${({ theme }) => theme.sm`
        margin-left: 250px;
        margin-top: 0;
	`};
`;

const ProjectsDetails = () => {
    const { id } = useParams();
    const { project, error, isLoading } = useApi('', id);
    if (project) {
        console.log(project[0].acf);
    }

    return (
        <Container>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}...</p>
            ) : project ? (
                <h3>{project[0].acf.title}</h3>
            ) : null}
        </Container>
    );
};
export default ProjectsDetails;
