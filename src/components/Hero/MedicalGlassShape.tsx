import { motion } from "motion/react";
function MedicalGlassShape() {
  return (
    <div className="hidden lg:flex absolute inset-0 items-center justify-end pr-24 pl-24 pointer-events-none overflow-hidden">
      {/* Outer Glow */}
      <motion.div
        className="absolute w-65 sm:w-[320px] lg:w-90 h-105 sm:h-125 lg:h-140 rounded-[220px] 
               bg-cyan-400/10 blur-3xl"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Glass Container */}
      <motion.div
        className="relative w-60 sm:w-75 lg:w-85
                      h-100 sm:h-120 lg:h-135
                        rounded-[180px]
               border border-white/20
               bg-white/10 dark:bg-white/5
               backdrop-blur-2xl
               overflow-hidden
               shadow-[0_0_80px_rgba(34,211,238,0.25)]"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-linear-to-b
                 from-cyan-300/10
                 via-blue-400/5
                 to-transparent"
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />

        {/* Floating Glow Rings */}
        <motion.div
          className="absolute -top-10 left-1/2 -translate-x-1/2
                 w-62.5 h-62.5
                 rounded-full border border-cyan-300/20"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2
                 w-45 h-45
                 rounded-full border border-blue-300/10"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Medical Image */}
        <motion.img
          src="./lung.png" // replace with your image path
          alt="Medical lungs"
          className="absolute inset-0 w-full h-full object-contain
                 scale-110 opacity-90
                 drop-shadow-[0_0_40px_rgba(34,211,238,0.8)]"
          animate={{
            scale: [1.08, 1.12, 1.08],
            opacity: [0.85, 1, 0.85],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Shine Effect */}
        <motion.div
          className="absolute -left-40 top-0 w-32 h-full
                 bg-white/10 rotate-12 blur-2xl"
          animate={{
            x: [-200, 500],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        />

        {/* Small Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cyan-200/40"
            style={{
              // eslint-disable-next-line react-hooks/purity
              top: `${Math.random() * 100}%`,
              // eslint-disable-next-line react-hooks/purity
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default MedicalGlassShape;
