import useAboutTeam from "../../hooks/useAboutTeam";
import Error from "../Error";
import Spinner from "../Spinner";
import MemberCard from "./MemberCard";

function AboutUsSection() {
  const { aboutTeam, isPending, error } = useAboutTeam();
  if (error) return <Error error={error} />;
  if (isPending) return <Spinner />;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {aboutTeam?.map((member, index) => (
        <MemberCard key={member.id} member={member} index={index} />
      ))}
    </div>
  );
}

export default AboutUsSection;
