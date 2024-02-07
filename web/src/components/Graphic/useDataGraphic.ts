import IProfessional from "../../types/IProfessional";
import IQuery from "../../types/IQuery";

interface IData {
  nome: string,
  consultas: number
}

interface Props {
  profissionais: IProfessional[] | null,
  consultas: IQuery[] | null
}

const useDataGraphic = ({ profissionais, consultas }: Props) => {
  let dados: Array<IData> = [];

  if (profissionais && consultas) {
    dados = profissionais.map((profissional) => ({
      nome: profissional.nome,
      consultas: consultas.filter((consulta) =>
        consulta.profissional.some((prof) => prof.nome === profissional.nome)
      ).length
    }));
  }
  return dados
}

export default useDataGraphic;