import { motion } from "motion/react";
function WelcomeLogo() {
  return (
    <motion.div
      className="flex justify-center mb-8 mt-2"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-linear-to-r from-blue-200 to-cyan-100 rounded-3xl blur-xl opacity-50 animate-pulse" />
        <div className="relative w-22 h-22 sm:w-30 sm:h-30 rounded-3xl bg-linear-to-br bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl">
          <img
            className="w-20 h-20 sm:w-30 sm:h-30"
            src="../../public/logoImage.png"
            alt="logo_image"
          />
          {/* <svg
            className="w-12 h-12 sm:w-16 sm:h-16 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg> */}
        </div>
      </div>
    </motion.div>
  );
}

export default WelcomeLogo;
