import React, { FC } from 'react';
import styled from 'styled-components';

interface IProps {
  footer?: JSX.Element;
  sidebar?: JSX.Element;
  mainContent?: JSX.Element;
}
export const HomeView: FC<IProps> = ({ footer, sidebar, mainContent }) => (
  <>
    {sidebar && <Sidebar>{sidebar}</Sidebar>}
    {mainContent && <Main>{mainContent}</Main>}
    {footer && <Footer>{footer}</Footer>}
  </>
);

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 350px;
`;

const Main = styled.div`
  height: 100%;
  width: 100%;
  padding-left: 350px;
`;
