import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import IQuery from "../../types/IQuery";
import IProfessional from "../../types/IProfessional";
import useDataGraphic from "./useDataGraphic";
import styled from "styled-components";

interface Props {
  profissionais: IProfessional[] | null,
  consultas: IQuery[] | null
}

interface IData {
  nome: string,
  consultas: number
}

const StylizedSection = styled.section`
background-color: var(--white);
border-radius: 16px;
`

function Graphic({ profissionais, consultas }: Props) {
  let dados: Array<IData> = useDataGraphic({ profissionais, consultas });
  return (
    <StylizedSection>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          layout="vertical"
          data={dados}
          margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
        >
          <XAxis type="number"></XAxis>
          <YAxis type="category" dataKey="nome"></YAxis>
          <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
        </BarChart>
      </ResponsiveContainer>
    </StylizedSection>
  );
}

export default Graphic;