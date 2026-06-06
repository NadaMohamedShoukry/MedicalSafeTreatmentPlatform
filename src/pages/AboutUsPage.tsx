import AboutUsSection from "../components/AboutUs/AboutUsSection";
import Aim from "../components/AboutUs/Aim";

function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-5">
      <Aim />
      <hr />
      <AboutUsSection />
    </div>
  );
}

export default AboutUsPage;
