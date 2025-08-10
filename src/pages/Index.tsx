import AceHeader from "@/components/AceHeader";
import AceHero from "@/components/AceHero";
import AceProblem from "@/components/AceProblem";
import AceSolution from "@/components/AceSolution";
import AceTestimonials from "@/components/AceTestimonials";
import AceComparison from "@/components/AceComparison";
import AceFAQ from "@/components/AceFAQ";
import AceFooter from "@/components/AceFooter";

const Index = () => {
  return (
    <main className="min-h-screen font-inter">
      <AceHeader />
      <AceHero />
      <AceProblem />
      <AceSolution />
      <AceTestimonials />
      <AceComparison />
      <AceFAQ />
      <AceFooter />
    </main>
  );
};

export default Index;
