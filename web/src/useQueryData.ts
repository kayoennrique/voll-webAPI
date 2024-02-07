import IQuery from "./types/IQuery";
import useFetch from "./useFetch";

const useQueryData = () => {
  return useFetch<IQuery[]>({ url: 'consulta' });
}

export default useQueryData;