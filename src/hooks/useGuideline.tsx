import { useQuery } from "@tanstack/react-query";
import { getGuidelineById } from "../services/apiGuideline";

function useGuideline(guidelineId: number) {
  const {
    data: guidelines,
    isPending,
    error,
  } = useQuery({
    queryKey: ["safety_guideline_content", guidelineId],
    queryFn: () => getGuidelineById(guidelineId),
  });
  return { guidelines, isPending, error };
}

export default useGuideline;
