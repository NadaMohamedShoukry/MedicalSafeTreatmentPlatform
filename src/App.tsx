// import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import MedicalFieldsDetailsPage from "./pages/MedicalFieldsDetailsPage";
import SearchPage from "./pages/SearchPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ClinicalReferencesPage from "./pages/ClinicalReferencesPage";
import SafetyGuidelinesDetailsPage from "./pages/SafetyGuidelinesDetailsPage";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route element={<Layout />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route
                path="/field/:fieldId"
                element={<MedicalFieldsDetailsPage />}
              />
              <Route
                path="/clinical-references/:fieldId"
                element={<ClinicalReferencesPage />}
              />
              <Route
                path="/safety-guideline/:guidelineId"
                element={<SafetyGuidelinesDetailsPage />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
