import { useQuery } from "@tanstack/react-query";
import { getMedicalFields } from "../services/apiMedicalFields";
import type { MedicalFieldsResponse } from "../types/MedicalFields";

function useMedicalFields() {
  const {
    data: medicalFields,
    isPending,
    error,
  } = useQuery<MedicalFieldsResponse[]>({
    queryKey: ["medical_fields"],
    queryFn: getMedicalFields,
  });
  return { medicalFields, isPending, error };
}

export default useMedicalFields;
