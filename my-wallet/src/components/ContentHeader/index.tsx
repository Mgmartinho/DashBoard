import React from 'react'
import { Container } from './style'
import { TitleContainer } from './style';
import { Controllers } from './style';


interface IContentHeaderProps{
    title: string;
    lineColors: string;
    children: React.ReactNode;
}


const ContentHeader: React.FC<IContentHeaderProps> = ({
    title, lineColors, children,
}) => {

  
    

  

   

    return (
        <Container>
            <TitleContainer>
                <h1>{title}</h1>
            </TitleContainer>

            <Controllers>
                {children}
            </Controllers>
        </Container>
    );
};

export default ContentHeader;