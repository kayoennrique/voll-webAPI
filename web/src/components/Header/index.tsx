import styled from 'styled-components';
import logo from './assets/logo.png';
import profile from './assets/perfil.png';

const StylizedHeader = styled.header`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 4em;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-grow: .1;
`;

const LinkStylized = styled.a`
 color: var(--dark-blue);
 font-weight: 700;
`;

function Header() {
  return (
    <StylizedHeader>
      <img src={logo} alt="logo da empresa Voll" />
      <Container>
        <img src={profile} alt="imagem de perfil do usuário" />
        <LinkStylized href="#">Sair</LinkStylized>
      </Container>
    </StylizedHeader>
  );
}

export default Header;