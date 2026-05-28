import { useQuery } from "@tanstack/react-query";
import { getClinicalReferences } from "../services/apiClinicalReferences";

function useClinicalReferences(field_id: number) {
  const {
    data: clinicalReferences,
    isPending,
    error,
  } = useQuery({
    queryKey: ["clinical_references", field_id],
    queryFn: () => getClinicalReferences(field_id),
  });
  return { clinicalReferences, isPending, error };
}

export default useClinicalReferences;
