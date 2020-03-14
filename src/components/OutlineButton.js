import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useLocalState from '../hooks/useLocalState';

const StyledButton = styled.button`
    border: 1px solid ${props => props.theme.primary};
    background-color: ${props => props.theme.secondary};
`;

const OutlinedButton = ({ children, category }) => {
    const [categoryFilter, setCategoryFilter] = useLocalState('category');
    return (
        <Link to="/products">
            <StyledButton onClick={() => setCategoryFilter(category)}>{children}</StyledButton>
        </Link>
    );
};

export default OutlinedButton;
