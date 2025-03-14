import React from "react";
import { Container } from './styles'
import ContentHeader from "../ContentHeader";


const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        
            <Container>
                <ContentHeader title="Dashboard" lineColors="#fff">
                    {children}
                </ContentHeader>
            </Container>

        
    );

}

export default Content;