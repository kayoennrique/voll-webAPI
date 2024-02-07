import whatsapp from './assets/whatsapp.png';
import instagram from './assets/instagram.png';
import google from './assets/google.png';
import facebook from './assets/facebook.png';
import styled from 'styled-components';

const FooterStylized = styled.footer`
    height: 100%;
    color: white;
    padding: 1em;
    background-color: var(--dark-blue);
    text-align: center;
`;

const StyledList = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 10%;
    margin: 1em auto;
`;

const StyledItem = styled.li`
    list-style-type: none;
`;

function Footer() {
  return (
    <FooterStylized>
      <StyledList>
        <StyledItem>
          <a href="#">
            <img src={facebook} alt="logo do facebook" />
          </a>
        </StyledItem>
        <StyledItem>
          <a href="#">
            <img src={whatsapp} alt="logo do whatsapp" />
          </a>
        </StyledItem>
        <StyledItem>
          <a href="#">
            <img src={google} alt="logo do google" />
          </a>
        </StyledItem>
        <StyledItem>
          <a href="#">
            <img src={instagram} alt="logo do instagram" />
          </a>
        </StyledItem>
      </StyledList>
      <p>2024 © Desenvolvido por Kayo Ennrique</p>
    </FooterStylized>
  );
}


export default Footer;