import React from "react";
import { Container, Header, LogImg, MenuContainer, MenuItemLink, Title } from './styles'
import logImg from '../../assets/logo.svg'
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
} from 'react-icons/md';


const Aside: React.FC = () => {
    return (


        <Container>
            <Header>
                <LogImg src={logImg} alt="Logo Minha Carteira" />
                <Title>Minha-Carteira</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink >
                    <MdDashboard size={18}/>
                    Dashboard
                </MenuItemLink>
                <MenuItemLink >
                    <MdArrowUpward size={18}/>
                    Entradas
                </MenuItemLink>
                <MenuItemLink >
                    <MdArrowDownward size={18}/>
                    Saídas
                </MenuItemLink>
                <MenuItemLink >
                    <MdExitToApp size={18}/>
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>



    );

}

export default Aside;