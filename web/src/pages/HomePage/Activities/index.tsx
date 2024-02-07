import styled from "styled-components";
import shield from './assets/escudo.png';
import calendar from './assets/calendario.png';
import bell from './assets/sino.png';
import like from './assets/like.png';

const Container = styled.section`
display: flex;
justify-content: space-between;
text-align: center;
width: 60%;
`;

const Block = styled.div`
width: 20%;
background-color: var(--light-gray);
padding: 16px 8px;
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
border-radius: 8px;
`;

const Text = styled.p`
line-height: 19px;
color: var(--dark-blue);
`;

export default function Activities() {
    return (
        <Container>
            <Block>
                <img src={shield} alt="Escudo" />
                <Text>Encontre Especialistas</Text>
            </Block>
            <Block>
                <img src={calendar} alt="Calendário" />
                <Text>Agende consultas</Text>
            </Block>
            <Block>
                <img src={bell} alt="Sino" />
                <Text>Defina lembretes</Text>
            </Block>
            <Block>
                <img src={like} alt="Avaliação" />
                <Text>Avalie o serviço</Text>
            </Block>
        </Container>
    );
}