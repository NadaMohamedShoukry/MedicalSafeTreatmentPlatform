// import { translations } from "../data/translations";
import { motion } from "motion/react";
import MedicalGlassShape from "./MedicalGlassShape";
import HeroStatsBoxes from "./HeroStatsBoxes";
import HeroTextContent from "./HeroTextContent";
import MobileMedicalGlassShape from "./MobileMedicalGlassShape";

function HeroSection() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12 min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-125 h-125 rounded-full bg-gradient-radial from-blue-200/30 dark:from-blue-500/10 to-transparent blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-150 h-150 rounded-full bg-gradient-radial from-cyan-200/30 dark:from-cyan-500/10 to-transparent blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <MedicalGlassShape />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-center">
        <div className=" px-4 sm:px-6 lg:px-8">
          {/* Text Content */}
          <motion.div
            className="space-y-4 order-1 lg:order-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTextContent />
            <HeroStatsBoxes />
          </motion.div>
          <MobileMedicalGlassShape />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
