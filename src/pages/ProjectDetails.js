import React from 'react';
import useApi from '../hooks/useApi';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Container = styled.div`
    margin-right: ${({ theme }) => theme.space[1]};
    margin-left: ${({ theme }) => theme.space[1]};
    margin-top: 80px;
    ${({ theme }) => theme.sm`
        margin-left: 200px;
        margin-top: 0;
	`};
`;

const GalleryWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-gap: ${({ theme }) => theme.space[1]};
    ${({ theme }) => theme.sm`
         grid-template-columns: repeat(3, 1fr);
	`};
`;
const ImageWrapper = styled.div`
    grid-column: span 1;
    min-height: 100px;
    &:nth-of-type(5n + 5) {
        grid-column: 1 / 3;
    }
    ${({ theme }) => theme.sm`
        grid-column: span 1;
        min-height: 300px;
        &:nth-of-type(5n + 5) {
          grid-column: 2 / 4;
        }
	`};
`;

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const ProjectsDetails = () => {
    const { id } = useParams();
    const { project, error, isLoading } = useApi('', id);
    if (project) {
        console.log(project[0].acf.image);
    }

    return (
        <Container>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}...</p>
            ) : project ? (
                <>
                    <h3>{project[0].acf.title}</h3>
                    <GalleryWrapper>
                        {project[0].acf.image.map(({ url, id, title }) => (
                            <ImageWrapper>
                                <Image src={url} key={id} alt={title} />
                            </ImageWrapper>
                        ))}
                    </GalleryWrapper>
                </>
            ) : null}
        </Container>
    );
};
export default ProjectsDetails;
