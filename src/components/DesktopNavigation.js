import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavigationWrapper = styled.nav`
    width: 250px;
    height: 100%;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.brand};
`;

const StyledLinks = styled.li`
    list-style: none;
    a {
        text-decoration: none;
    }
`;

const DesktopNavigation = () => {
    return (
        <NavigationWrapper>
            <nav>
                <a href="/">Eskelogo</a>
                <div>
                    <ul>
                        <StyledLinks>
                            <Link to={'/portfolio'}>Portfolio</Link>
                        </StyledLinks>
                        <StyledLinks>
                            <Link to={'/tjenster'}>Tjenster</Link>
                        </StyledLinks>
                        <StyledLinks>
                            <Link to={'/omoss'}>Om Oss</Link>
                        </StyledLinks>
                        <StyledLinks>
                            <Link to={'/video'}>Video</Link>
                        </StyledLinks>
                        <StyledLinks>
                            <Link to={'/maincategories'}>Main Categries</Link>
                        </StyledLinks>
                    </ul>
                </div>
            </nav>
            {/* <ul>
                {categories && categories.length > 0
                    ? categories.map(category => {
                          const title = category.acf.title;
                          return (
                              <CatetoryLink key={category.id} props={title}>
                                  {title}
                              </CatetoryLink>
                          );
                      })
                    : null}
            </ul> */}
        </NavigationWrapper>
    );
};

export default DesktopNavigation;
