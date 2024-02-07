import styled from "styled-components";
import IProfessional from "../../types/IProfessional";
import Card from "./Card";
import Button from "../Button";

const CardSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`;

function Assessment({ profissionais }: { profissionais: IProfessional[] | null }) {
  return (
    <>
      <CardSection>
        {profissionais?.map((profissional) => {
          return <Card profissional={profissional} />
        })}
      </CardSection>
      <Button>Ver mais</Button>
    </>
  );
}

export default Assessment;