import assessment from './assets/avaliacao.png';
import graphic from './assets/grafico.png';
import query from './assets/consulta.png';
import styled from 'styled-components';

interface Props {
  imagem?: string,
  children?: React.ReactNode
}

interface IImages {
  assessment: string,
  graphic: string,
  query: string
}

const SpanStylized = styled.span<Props>`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 25px;
    height: 25px;
    background-image: ${props => props.imagem ? `url(${props.imagem})` : 'none'};
`;

const TitleStylized = styled.h2`
    color: var(--light-blue);
`;

const ContainerStylized = styled.div`
    display: flex;
    align-items: center;
`;

function Title({ imagem, children }: Props) {
  const imageList: IImages = {
    assessment: assessment,
    graphic: graphic,
    query: query
  }

  return (
    <ContainerStylized>
      {imagem && <SpanStylized imagem={imageList[imagem as keyof IImages]} />}
      <TitleStylized>{children}</TitleStylized>
    </ContainerStylized>
  );
}

export default Title;