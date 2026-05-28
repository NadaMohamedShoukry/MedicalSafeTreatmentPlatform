import { useQuery } from "@tanstack/react-query";
import { getFieldDiseases } from "../services/apiFieldDiseases";

function useFieldDiseases(field_id: number) {
  const {
    data: fieldDiseases,
    isPending,
    error,
  } = useQuery({
    queryKey: ["field_diseases", field_id],
    queryFn: () => getFieldDiseases(field_id),
  });
  return { fieldDiseases, isPending, error };
}

export default useFieldDiseases;
