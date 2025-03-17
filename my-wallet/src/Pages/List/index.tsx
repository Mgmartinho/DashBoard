import React from 'react'
import { Container, Content,Filters } from './style';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Controllers } from '../../components/ContentHeader/style';
import { title } from 'process';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';


const List = () => {

    const months = [
        { value: 1, label: 'Janeiro' },
        { value: 2, label: 'Fevereiro' },
        { value: 3, label: 'Março' },
        { value: 4, label: 'Abril' },
        { value: 5, label: 'Maio' },
        { value: 6, label: 'Junho' },
        { value: 7, label: 'Julho' },
        { value: 8, label: 'Agosto' },
        { value: 9, label: 'Setembro' },
        { value: 10, label: 'Outubro' },
        { value: 11, label: 'Novembro' },
        { value: 12, label: 'Dezembro' },

    ];

    const years = [
        { value: 2025, label: 2025},
        { value: 2024, label: 2024},
        { value: 2023, label: 2023},
       

    ];

    return (
        <Container>
            <ContentHeader title="Saídas" lineColors="#E44c4E">
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>

            <Filters>
                <button
                type='button'
                className='tag-filter tag-filter-recurrent'
                >
                    Recorrentes
                </button>

                <button
                type='button'
                className='tag-filter tag-filter-eventual'
                >
                    Eventuais
                </button>
            </Filters>

            <Content>
                <HistoryFinanceCard 
                    tagColor="#E44c4e"
                    title='Conta de Luz'
                    subTitle='17/03/2025'
                    amount='R$ 260.00'
                />
           
           </Content>

        </Container>
    )
}

export default List;