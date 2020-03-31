import React from 'react';
import styled from 'styled-components';

const StyledBurger = styled.button`
    position: absolute;
    top: ${({ theme }) => theme.space[3]};
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
        width: ${({ theme }) => theme.space[3]};
        height: 2px;
        background: ${({ theme }) => theme.secondary};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
        :first-child {
            transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
        }
        :nth-child(2) {
            opacity: ${({ open }) => (open ? '0' : '1')};
            transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
        }
        :nth-child(3) {
            transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }
`;

const Hamburger = ({ open, setOpen }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    );
};

export default Hamburger;
