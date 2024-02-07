import { Rating } from "@mui/material";
import IProfessional from "../../../types/IProfessional";
import styled from "styled-components";

const ContainerStylized = styled.div`
    flex: 40%;
    max-width: 100%;
    background-color: #ffffff;
    padding: 1em;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.15);
    border-radius: 8px;
    color: var(--gray);
    margin: 1em 2em 1em;
`;

const StyledList = styled.ul`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 0;
`;

const StyledItem = styled.li`
    list-style-type: none;
`;

const ItemInformationStylized = styled(StyledItem)`
    flex-grow: 1;
`;

const StylizedImage = styled.img`
    border-radius: 100%;
    width: 64px;
    object-fit: cover;
    height: 64px;
    border: 2px solid var(--light-blue);
    margin-right: 1em;
`;

const ParagraphStylizedName = styled.p`
    font-weight: 700;
`;

const ParagraphStylized = styled.p`
    margin: .5em 0;
    font-size: 14px;
`;


function Card({ profissional }: { profissional: IProfessional }) {
  return (
    <ContainerStylized>
      <StyledList>
        <StyledItem>
          <StylizedImage
            src={profissional.imagem}
            alt={`Foto de perfil do profissional ${profissional.nome}`}
          />
        </StyledItem>
        <ItemInformationStylized>
          <ParagraphStylizedName>{profissional.nome}</ParagraphStylizedName>
          <ParagraphStylized>{profissional.especialidade}</ParagraphStylized>
        </ItemInformationStylized>
        <StyledItem>
          <Rating
            name="simple-controlled"
            value={profissional.nota}
            readOnly={true}
          />
        </StyledItem>
      </StyledList>
    </ContainerStylized>
  );
}

export default Card;
