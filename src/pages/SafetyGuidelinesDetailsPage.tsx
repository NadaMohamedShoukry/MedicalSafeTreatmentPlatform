import BackButton from "../components/BackButton";
import SafetyGuidelinesDetailsSection from "../components/SafetyGuidelinesDetails/SafetyGuidelinesDetailsSection";

function SafetyGuidelinesDetailsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <BackButton />
      <SafetyGuidelinesDetailsSection />
    </div>
  );
}
export default SafetyGuidelinesDetailsPage;
