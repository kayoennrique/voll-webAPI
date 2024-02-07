import styled from "styled-components";
import Activities from "./Activities";
import Banner from "./Banner";
import Depositions from "./Depositions";
import Form from "./Search";

const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`;

export default function HomePage() {
  return (
    <>
      <Banner />
      <Container>
        <Form />
        <Activities />
        <Depositions />
      </Container >
    </>
  );
}