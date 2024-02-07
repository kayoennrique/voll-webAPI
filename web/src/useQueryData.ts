import IQuery from "./types/IQuery";
import useFetch from "./useFetch";

const useQueryData = () => {
  return useFetch<IQuery[]>({ url: 'consultas' });
}

export default useQueryData;