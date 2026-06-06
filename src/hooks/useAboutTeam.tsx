import { useQuery } from "@tanstack/react-query";
import { getAboutTeam } from "../services/apiAboutTeam";

function useAboutTeam() {
  const {
    data: aboutTeam,
    isPending,
    error,
  } = useQuery({
    queryKey: ["about-team"],
    queryFn: getAboutTeam,
  });
  return { aboutTeam, isPending, error };
}

export default useAboutTeam;
