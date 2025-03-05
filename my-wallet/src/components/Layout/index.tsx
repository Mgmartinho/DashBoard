
import { Container } from './styles'
import React from "react";
import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../content';

const Layout: React.FC = () => {
    return (
        <Container>
            <MainHeader />
            <Aside />
            <Content />

        </Container>
    );
};

export default Layout;