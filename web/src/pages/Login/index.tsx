import styled from "styled-components";

import Banner from "./Banner";

import Form from "./Search";
import Activities from "./Activities";
import Depositions from "./Depositions";

const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`

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
  )
}