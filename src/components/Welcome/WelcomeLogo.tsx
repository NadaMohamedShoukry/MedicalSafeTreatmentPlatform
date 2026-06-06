import { motion } from "motion/react";
import Logo from "../../assets/logo3.png";
function WelcomeLogo() {
  return (
    <motion.div
      className="flex justify-center mb-8 mt-2"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
    >
     
      <img className="w-30 h-25 sm:w-35 sm:h-30 " src={Logo} alt="logo_image" />
    
    </motion.div>
  );
}

export default WelcomeLogo;
