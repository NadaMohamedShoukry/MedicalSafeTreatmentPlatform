import { motion } from "motion/react";
import { translations } from "../data/translations";
import { useTheme } from "../context/ThemeContext";
import { Activity, Heart, Shield, Users } from "lucide-react";

import WelcomeLogo from "../components/Welcome/WelcomeLogo";
import WelcomeButton from "../components/Welcome/WelcomeButton";
import WelcomeStatsBoxes from "../components/Welcome/WelcomeStatsBoxes";

function WelcomePage() {
  const { language } = useTheme();
  const t = translations[language];

  return (
    <div className=" min-h-screen overflow-hidden relative bg-linear-to-br from-sky-100 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900">
      <div className=" z-10  flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Floating Medical Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/3 left-[10%]"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-16 h-16 rounded-2xl bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-2xl">
              <Heart className="w-8 h-8 text-red-400" />
            </div>
          </motion.div>

          <motion.div
            className="absolute top-1/3 right-[15%]"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <div className="w-20 h-20 rounded-2xl bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-2xl">
              <Activity className="w-10 h-10 text-blue-400" />
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 left-[20%]"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <div className="w-14 h-14 rounded-2xl bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-2xl">
              <Shield className="w-7 h-7 text-green-400" />
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-1/3 right-[25%]"
            animate={{
              y: [0, 25, 0],
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          >
            <div className="w-18 h-18 rounded-2xl bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-2xl p-4">
              <Users className="w-9 h-9 text-cyan-400" />
            </div>
          </motion.div>
        </div>
        {/* Content  */}
        <motion.div
          className="text-center max-w-5xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Welcome Logo */}
          <WelcomeLogo />
          {/* Platform Name */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-black bg-linear-to-r from-blue-600 via-blue-700 to-cyan-500 dark:from-blue-400 dark:via-blue-300 dark:to-cyan-300 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {t.platformName}
          </motion.h1>
          {/* Main Welcome title */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-medium max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {t.welcomeTitle}
          </motion.p>

          <WelcomeButton />

          <WelcomeStatsBoxes />
        </motion.div>
      </div>
    </div>
  );
}

export default WelcomePage;
