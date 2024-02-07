import styled from "styled-components"

const Container = styled.section`
width: 50%;
`;

const Title = styled.h2`
font-weight: 700;
font-size: 24px;
line-height: 28px;
text-align: center;
color: var(--dark-blue);
`;

const Text = styled.p`
line-height: 19px;
color: var(--gray);
`;

const Subtitle = styled.h3`
line-height: 19px;
font-weight: 700;
color: var(--dark-gray);
text-align: center;
`;

const Line = styled.hr`
color: var(--gray);
`;

export default function Depositions() {
    return (
        <Container>
            <Title>Depoimentos</Title>
            <Text>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</Text>
            <Subtitle>Roberta, 40 anos, Porto Alegre/RS.</Subtitle>
            <Line />
            <Text>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</Text>
            <Subtitle>Júlio, 28 anos, Rio de janeiro/RJ.</Subtitle>
            <Line />
            <Text>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</Text>
            <Subtitle>Ricardo, 34 anos, São Paulo/SP.</Subtitle>
            <Line />
        </Container>
    );
}