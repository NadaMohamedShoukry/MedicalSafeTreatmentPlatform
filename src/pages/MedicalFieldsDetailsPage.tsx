import BackButton from "../components/FieldsDetails/BackButton";
import DiseasesSection from "../components/FieldsDetails/DiseasesSection";

function MedicalFieldsDetailsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <BackButton />
      <DiseasesSection />
    </div>
  );
}

export default MedicalFieldsDetailsPage;
