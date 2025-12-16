import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { CountryProfile } from "@/components/CountryProfile";
import { CulturalFeatures } from "@/components/CulturalFeatures";
import { GlobalConnections } from "@/components/GlobalConnections";
import { ContemporaryIssues } from "@/components/ContemporaryIssues";
import { PersonalReflection } from "@/components/PersonalReflection";
import { References } from "@/components/References";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Japan Cultural e-Portfolio | The Contemporary World</title>
        <meta
          name="description"
          content="Explore Japan's rich cultural heritage, traditions, and global connections in this digital e-portfolio for The Contemporary World course."
        />
      </Helmet>

      <div className="min-h-screen">
        <ScrollProgress />
        <ScrollToTop />
        <Navigation />
        <main>
          <HeroSection />
          <CountryProfile />
          <CulturalFeatures />
          <GlobalConnections />
          <ContemporaryIssues />
          <PersonalReflection />
          <References />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
