import styled from 'styled-components';
import logo from './assets/logo.png';
import profile from './assets/perfil.png';
import search from './assets/search.png';
import authenticStore from '../../stores/authenticate.store';


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

const LinkStylizedLoggedOff = styled(LinkStylized)`
    font-weight: 400;
    text-decoration: none;
    color: var(--dark-blue);
`;

const ContainerResearch = styled.div`
    display: flex;
    align-items: center;
    background-color: #f2f2f2;
    border-radius: 20px;
    padding: 8px 16px;
`;

const InputCustomizado = styled.input`
    flex: 1;
    border: none;
    background: none;
    outline: none;
`;

const SpanCustomized = styled.span`
    background-image: url(${search});
    background-repeat: no-repeat;
    width: 25px;
    height: 25px;
    background-position: 10px;
`;

const StylizedButton = styled.a`
    background-color: var(--dark-blue);
    border-radius: 8px;
    padding: 12px 16px;
    color: var(--white);
    text-decoration: none;
`;

function Header() {
  const handleLogout = () => {
    authenticStore.logout();
  };

  return (
    <StylizedHeader>
      <img src={logo} alt="logo da empresa Voll" />
      <Container>
        {authenticStore.isAuthenticated
          ? <>
            <img src={profile} alt="imagem de perfil do usuário" />
            <LinkStylized href="/" onClick={handleLogout}>Sair</LinkStylized>
          </>
          : <>
            <LinkStylizedLoggedOff href="/sobre" >Sobre</LinkStylizedLoggedOff>
            <LinkStylizedLoggedOff href="/cadastro">Cadastre-se</LinkStylizedLoggedOff>
            <ContainerResearch>
              <InputCustomizado type="text" placeholder='Digite sua busca' />
              <SpanCustomized />
            </ContainerResearch>
            <StylizedButton href="/login">Entrar</StylizedButton>
          </>
        }
      </Container>
    </StylizedHeader>
  );
}

export default Header;