import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const StyledBurger = styled.button`
    position: absolute;
    top: ${({ theme }) => theme.space[2]};
    right: ${({ theme }) => theme.space[2]};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: ${({ theme }) => theme.space[3]};
    height: ${({ theme }) => theme.space[3]};
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: ${({ open }) => (open ? '6' : '2')};
    &:active {
        outline: none;
    }
    div {
        height: 2px;
        background: ${({ open }) => (open ? 'black' : props => props.colorProp)};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
        :first-child {
            width: ${({ theme }) => theme.space[3]};
            transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
        }
        :nth-child(2) {
            width: ${({ theme }) => theme.space[2]};
            margin-left: auto;
            opacity: ${({ open }) => (open ? '0' : '1')};
            transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
        }
        :nth-child(3) {
            width: ${({ theme }) => theme.space[3]};
            transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }
    ${({ theme }) => theme.sm`
        top: ${({ theme }) => theme.space[4]};
    `};
`;

const Hamburger = ({ open, setOpen }) => {
    const { pathname } = useLocation();

    return (
        <StyledBurger
            colorProp={pathname === '/' ? ({ theme }) => theme.brand : ({ theme }) => theme.text}
            open={open}
            onClick={() => setOpen(!open)}
        >
            <div />
            <div />
            <div />
        </StyledBurger>
    );
};

export default Hamburger;

Hamburger.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
};
