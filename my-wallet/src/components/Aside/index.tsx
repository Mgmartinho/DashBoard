import React from "react";
import { Container, Header, LogImg, MenuContainer, MenuItemLink, Title } from './styles'
import logImg from '../../assets/logo.svg'
import { MdDashboard } from "react-icons/md";
import { MdArrowDownward } from "react-icons/md";
import { MdArrowUpward } from "react-icons/md";
import { MdExitToApp } from "react-icons/md";



const Aside: React.FC = () => {
    return (


        <Container>
            <Header>
                <LogImg src={logImg} alt="Logo Minha Carteira" />
                <Title>Minha-Carteira</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink>
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>
                <MenuItemLink>
                    <MdArrowUpward />
                    Entradas
                </MenuItemLink>
                <MenuItemLink>
                    <MdArrowDownward />
                    Saídas
                </MenuItemLink>
                <MenuItemLink>
                    <MdExitToApp />
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>



    );

}

export default Aside;