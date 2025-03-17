import React from 'react'
import { Container, Content } from './style';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Controllers } from '../../components/ContentHeader/style';
import { title } from 'process';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';


const List = () => {

    const options = [
        { value: 'teste', label: 'teste' },
        { value: 'teste1', label: 'teste1' },
        { value: 'teste2', label: 'teste2' },
        { value: 'teste3', label: 'teste3' },

    ];

    return (
        <Container>
            <ContentHeader title="Saídas" lineColors="#E44c4E">
                <SelectInput options={options} />
            </ContentHeader>

            <Content>
                <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44c4e"
                    title='Conta de Luz'
                    subTitle='17/03/2025'
                    amount='R$ 260.00'
                />
            </Content>
            <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44c4e"
                    title='Água'
                    subTitle='17/03/2025'
                    amount='R$ 40.00'
                />
                 <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44c4e"
                    title='Internet'
                    subTitle='17/03/2025'
                    amount='R$ 90.00'
                />
                 <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44c4e"
                    title='Televisão'
                    subTitle='17/03/2025'
                    amount='R$ 90.00'
                />
                 <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44c4e"
                    title='Gás'
                    subTitle='17/03/2025'
                    amount='R$ 90.00'
                />
                 <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44c4e"
                    title='Seguro Automotivo'
                    subTitle='17/03/2025'
                    amount='R$ 350.00'
                />
                 <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44c4e"
                    title='Seguro Residencial'
                    subTitle='17/03/2025'
                    amount='R$ 15.00'
                />
                 <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44c4e"
                    title='Financiamento Carro'
                    subTitle='17/03/2025'
                    amount='R$ 2032.00'
                />
        </Container>
    )
}

export default List;