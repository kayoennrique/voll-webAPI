import styled from "styled-components";
import backgroundImage from "./ImagemDeFundo.png";
import { Outlet } from "react-router-dom";

const MainContainer = styled.div`
background-image: url(${backgroundImage});
background-size: cover;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`;

const Container = styled.div`
background-color: white;
width: 50vw;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

export default function PageDefaultForm() {
  return (
    <MainContainer>
      <Container>
        <Outlet />
      </Container>
    </MainContainer>
  );
}