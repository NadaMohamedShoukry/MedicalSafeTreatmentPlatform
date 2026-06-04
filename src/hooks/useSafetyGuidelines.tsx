import { useQuery } from "@tanstack/react-query";
import { getSafetyGuidelines } from "../services/apiSafetyGuidelines";

function useSafetyGuidelines() {
  const {
    data: safetyGuidelines,
    isPending,
    error,
  } = useQuery({
    queryKey: ["safety_guidelines"],
    queryFn: getSafetyGuidelines,
  });
  return { safetyGuidelines, isPending, error };
}

export default useSafetyGuidelines;
