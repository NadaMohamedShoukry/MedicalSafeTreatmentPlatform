import HeroSection from "../components/Hero/HeroSection";
import MedicalFieldsSection from "../components/MedicalFields/MedicalFieldsSection";

function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-sky-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900">
      <HeroSection />
      <MedicalFieldsSection />
    </div>
  );
}

export default HomePage;
