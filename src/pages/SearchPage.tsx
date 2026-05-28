import SearchHeader from "../components/Search/SearchHeader";
import SearchSection from "../components/Search/SearchSection";

function SearchPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SearchHeader />
      <SearchSection />
    </div>
  );
}

export default SearchPage;
