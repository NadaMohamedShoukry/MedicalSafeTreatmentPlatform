import { motion } from "motion/react";
import { useTheme } from "../../context/ThemeContext";
import type { AboutTeamResponse } from "../../types/AboutTeam";
type MemberProps = {
  member: AboutTeamResponse;
  index: number;
};
function MemberCard({ member, index }: MemberProps) {
  const { language } = useTheme();

  return (
    <motion.div
      className="p-6 sm:p-8  rounded-3xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/60 dark:border-slate-700/60 shadow-xl hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <p
        className={`font-bold uppercase tracking-wide mb-3 ${member.key === 1 ? "text-purple-700 dark:text-purple-400" : member.key === 2 ? "text-orange-700 dark:text-orange-400" : "text-green-700 dark:text-green-400"} `}
      >
        {member.type[language]}
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-10 ">
        <img
          className="w-35 h-50 object-cover object-top rounded-full border-5 border-slate/60 dark:border-slate-700/60"
          src={member.image}
          alt={member.name[language]}
        />
        <div className="flex flex-col ">
          <h2>{member.name[language]}</h2>
          {member.role?.[language]?.map((role) => (
            <li
              className={`text-sm list-none ${member.key === 2 ? "text-orange-400 dark:text-orange-300" : "text-green-400 dark:text-green-300"}`}
            >
              {role}
            </li>
          ))}
          <p className="text-gray-700 dark:text-gray-400">
            {member.bio[language]}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default MemberCard;
