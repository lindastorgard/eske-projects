import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PORTFOLIO, SERVICES, ABOUT, VIDEO, LANDING_PAGE } from '../utils/urlRoutes';
import NavLink from './navigation/NavILink';

const NavigationWrapper = styled.nav`
    width: 250px;
    height: 100%;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    overflow-x: hidden;
`;

const LinkCointainer = styled.ul`
    display: flex;
    flex-direction: column;
    & > * {
        padding: ${({ theme }) => theme.space[0]};
    }
    position: absolute;
    bottom: 10%;
`;
const DesktopNavigation = () => {
    return (
        <NavigationWrapper>
            <nav>
                <Link to={LANDING_PAGE.path}>Eskelogo</Link>
                <div>
                    <LinkCointainer>
                        <NavLink url={PORTFOLIO.path} link="Portfolio" />
                        <NavLink url={SERVICES.path} link="Tjenster" />
                        <NavLink url={ABOUT.path} link="Om Oss" />
                        <NavLink url={VIDEO.path} link="Video" />
                    </LinkCointainer>
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
