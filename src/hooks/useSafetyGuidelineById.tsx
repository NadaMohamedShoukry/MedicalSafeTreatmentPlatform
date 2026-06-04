import { useQuery } from "@tanstack/react-query";
import { getSafetyGuidelinesById } from "../services/apiSafetyGuidelines";

function useSafetyGuidelineById(guidelineId: number) {
  const {
    data: safetyGuidelineById,
    isPending,
    error,
  } = useQuery({
    queryKey: ["safety_guidelines", guidelineId],
    queryFn: () => getSafetyGuidelinesById(guidelineId),
  });
  return { safetyGuidelineById, isPending, error };
}

export default useSafetyGuidelineById;
