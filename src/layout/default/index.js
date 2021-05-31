import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { LayoutWrapper, Content } from './styles';

const DefaultLayout = ({ children }) => (
  <LayoutWrapper dir="column">
    <Header />
    <Content as="main" dir="column" align="center" justify="center">
      {children}
    </Content>
    <Footer />
  </LayoutWrapper>
);

export default DefaultLayout;