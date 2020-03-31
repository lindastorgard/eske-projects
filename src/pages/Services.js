import React from 'react';
import useApi from '../hooks/useApi';
import { StyledH3, StyledParagraph } from '../styles/typography';
import styled from 'styled-components';
import Layout from '../components/Layout';
import CircleLoader from '../components/CircleLoader';

const FlexParent = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: ${({ theme }) => theme.space[6]};
    ${({ theme }) => theme.sm`
        padding-bottom: ${({ theme }) => theme.space[4]};
        padding-top ${({ theme }) => theme.space[4]};
        flex-direction: row;
        &:nth-child(odd) {
          flex-direction: row-reverse;
        }
    `};
`;

const Column = styled.div`
    flex: 1;
    padding: ${({ theme }) => theme.space[1]};
    img {
        width: 100%;
        height: 100%;
        max-height: 450px;
    }
`;

const StyledListItem = styled.li`
    font-family: ${({ theme }) => theme.fonts.body};
`;

function Services() {
    const { servicespage, error, isLoading } = useApi();
    return (
        <Layout>
            {isLoading ? (
                <CircleLoader />
            ) : error ? (
                <StyledParagraph>{error}</StyledParagraph>
            ) : servicespage && servicespage[0].acf ? (
                <div>
                    {Object.keys(servicespage[0].acf).map(section => {
                        const { acf } = servicespage[0];
                        console.log(acf[section].image);
                        return (
                            <FlexParent>
                                <Column>
                                    <img src={acf[section].image} alt="tjenster" />
                                </Column>
                                <Column>
                                    <StyledH3>{acf[section].title}</StyledH3>
                                    <StyledParagraph>{acf[section].text}</StyledParagraph>
                                    <ul>
                                        {acf[section].list_items &&
                                            acf[section].list_items.map(li => (
                                                <StyledListItem>{li.list_item}</StyledListItem>
                                            ))}
                                    </ul>
                                </Column>
                            </FlexParent>
                        );
                    })}
                </div>
            ) : null}
        </Layout>
    );
}

export default Services;
