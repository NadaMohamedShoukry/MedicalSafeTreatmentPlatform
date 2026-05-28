import { useQuery } from "@tanstack/react-query";
import { search } from "../services/apiSearch";

function useSearch(query: string) {
  const {
    data: searchData,
    isPending,
    error,
  } = useQuery({
    queryKey: ["search_diseases", query],
    queryFn: () => search(query),
  });
  return { searchData, isPending, error };
}

export default useSearch;
