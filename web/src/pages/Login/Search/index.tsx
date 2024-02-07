import styled from "styled-components";
import search from './assets/search.png';
import pin from './assets/pin.png';

interface Props {
    imagem?: string,
}

const FieldDigitation = styled.input<Props>`
padding: 16px 16px 16px 30px;
background-image: url('${props => props.imagem === 'search' ? search : pin}');
background-repeat: no-repeat;
background-color: var(--light-gray);
background-position: 10px;
box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
border-radius: 8px;
border: none;
width: 40%;
::placeholder {
    color: var(--dark-gray);
    font-family: var(--main-font)
}
`;

const Container = styled.section`
background: var(--white);
box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.15);
border-radius: 8px;
padding: 2em 5em;
text-align: center;
margin: 3em 0;
`;

const Button = styled.button`
padding: 12px 16px;
background-color: var(--dark-blue);
border-radius: 8px;
border: none;
color: var(--white);
`;

const ContainerForm = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`;

const Title = styled.h2`
font-family: var(--main-font);
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
color: var(--gray);
`;

const List = styled.ul`
display: flex;
justify-content: space-around;
`;

const ItemList = styled.li`
background-color: var(--light-gray);
color: var(--gray);
padding: 4px 8px;
margin: 0 8px;
list-style-type: none;
font-size: 14px;
line-height: 16px;
border-radius: 4px;
:after {
    margin-left: 10px;
    content: 'x';
}
`;

export default function Form() {
    return (
        <Container>
            <ContainerForm>
                <FieldDigitation placeholder={'Digite a especialidade'} imagem={'search'} />
                <FieldDigitation placeholder={'Digite sua localização'} imagem={'pin'} />
                <Button>Buscar</Button>
            </ContainerForm>
            <Title>Você pode estar procurando por estas categorias:</Title>
            <List>
                <ItemList>Neurologista</ItemList>
                <ItemList>Dermatologista</ItemList>
                <ItemList>Cardiologista</ItemList>
                <ItemList>Ortopedista</ItemList>
                <ItemList>Oftalmologista</ItemList>
                <ItemList>Pediatria</ItemList>
                <ItemList>Reumatologista</ItemList>
            </List>
        </Container>
    );
}