import IProfessional from "./types/IProfessional";
import useFetch from "./useFetch";

const useDataProfessional = () => {
  return useFetch<IProfessional[]>({ url: 'profissionais' });
}

export default useDataProfessional;