import { Heart, Mail } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { translations } from "../../data/translations";
import { motion } from "motion/react";
function Footer() {
  const { language } = useTheme();
  const t = translations[language];
  return (
    <footer className="relative  py-12 bg-white/30 dark:bg-slate-900/30 backdrop-blur-xl border-t border-white/20 dark:border-slate-700/20">
      <div className=" container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {t.platformName}
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {language === "en"
                ? "Empowering public health awareness in alignment with Egypt Vision 2030."
                : "تمكين الوعي الصحي العام بما يتماشى مع رؤية مصر 2030."}
            </p>
          </motion.div>

          {/* Team */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">
              {t.team}
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>{language === "en" ? "Medical Team" : "الفريق الطبي"}</li>
              <li>{language === "en" ? "Development Team" : "فريق التطوير"}</li>
              <li>{language === "en" ? "Research Team" : "فريق البحث"}</li>
              <li>{language === "en" ? "Design Team" : "فريق التصميم"}</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">
              {t.contact}
            </h4>
            <div className="flex gap-4">
              {[
                {
                  icon: Mail,
                  href: "mailto:info@safetreatment.eg",
                  label: "Email",
                },
                { icon: Mail, href: "#", label: "GitHub" },
                { icon: Mail, href: "#", label: "LinkedIn" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/60 dark:border-slate-700/60 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-300 text-gray-600 dark:text-gray-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="pt-8 border-t border-white/20 dark:border-slate-700/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t.copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
