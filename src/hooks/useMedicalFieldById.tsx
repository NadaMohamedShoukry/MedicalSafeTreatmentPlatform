import { useQuery } from "@tanstack/react-query";
import { getMedicalFieldById } from "../services/apiMedicalFields";
import type { MedicalFieldsResponse } from "../types/MedicalFields";

function useMedicalFieldById(fieldId: number) {
  const {
    data: medicalFieldById,
    isPending,
    error,
  } = useQuery<MedicalFieldsResponse[]>({
    queryKey: ["medical_fields", fieldId],
    queryFn: () => getMedicalFieldById(fieldId),
  });
  return { medicalFieldById, isPending, error };
}

export default useMedicalFieldById;
