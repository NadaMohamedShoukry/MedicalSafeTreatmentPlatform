import { useQuery } from "@tanstack/react-query";
import { GlobalSearch, type SearchResult } from "../services/apiSearch";

function useSearch(query: string) {
  const {
    data: searchData,
    isPending,
    error,
  } = useQuery<SearchResult[]>({
    queryKey: ["search_diseases", query],
    queryFn: () => GlobalSearch(query),
  });
  return { searchData, isPending, error };
}

export default useSearch;
