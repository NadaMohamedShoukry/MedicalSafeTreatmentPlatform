import { motion } from "motion/react";
function MobileMedicalGlassShape() {
  return (
    <div className="flex lg:hidden justify-center mt-4">
      <motion.div
        className="relative w-60 h-100 rounded-[140px]
               border border-white/20
               bg-white/10 dark:bg-white/5
               backdrop-blur-2xl
               overflow-hidden
               shadow-[0_0_60px_rgba(34,211,238,0.25)]"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-linear-to-b from-cyan-300/10 via-blue-400/5 to-transparent" />

        {/* Image */}
        <motion.img
          src="../../../public/lung.png"
          alt="Medical lungs"
          className="absolute inset-0 w-full h-full object-contain scale-110 opacity-90
                 drop-shadow-[0_0_30px_rgba(34,211,238,0.7)]"
          animate={{
            scale: [1.05, 1.1, 1.05],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </div>
  );
}

export default MobileMedicalGlassShape;
