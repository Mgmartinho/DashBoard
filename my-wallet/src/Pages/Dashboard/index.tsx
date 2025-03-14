import React from 'react'
import { Container } from './style';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Controllers } from '../../components/ContentHeader/style';
import { title } from 'process';



const Dashboard = () => {

    const options = [ 
        {value: 'teste', label: 'teste'},
        {value: 'teste1', label: 'teste1'},
        {value: 'teste2', label: 'teste2'},
        {value: 'teste3', label: 'teste3'},
    
    ];

    return (
        <Container>
           <ContentHeader title="Dashboard" lineColors="#fff">
                <SelectInput options={options}/>
           </ContentHeader>
           </Container>
    )
}

export default Dashboard;