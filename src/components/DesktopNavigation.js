import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PORTFOLIO, SERVICES, ABOUT, VIDEO, LANDING_PAGE } from '../utils/urlRoutes';

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
    text-decoration: none;
`;

const DesktopNavigation = () => {
    return (
        <NavigationWrapper>
            <nav>
                <Link to={LANDING_PAGE.path}>Eskelogo</Link>
                <div>
                    <ul>
                        <StyledLinks>
                            <Link to={PORTFOLIO.path}>Portfolio</Link>
                        </StyledLinks>
                        <StyledLinks>
                            <Link to={SERVICES.path}>Tjenster</Link>
                        </StyledLinks>
                        <StyledLinks>
                            <Link to={ABOUT.path}>Om Oss</Link>
                        </StyledLinks>
                        <StyledLinks>
                            <Link to={VIDEO.path}>Video</Link>
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
