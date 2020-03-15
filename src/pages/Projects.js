import React from 'react';
import useApi from '../hooks/useApi';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

const Projects = () => {
    const param = useParams();
    const { category, error, isLoading } = useApi(param.category);
    console.log(category);

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}...</p>
            ) : category ? (
                category.map(project => {
                    return <div key={project.id}>{project.acf.title}</div>;
                })
            ) : null}
        </div>
    );
};
export default Projects;
