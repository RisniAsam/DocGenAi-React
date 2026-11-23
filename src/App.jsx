
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import HowItWorks from "./components/HowItWorks";
import Documents from "./components/Documents";
import Features from "./components/Features";
import TrustAndDisclaimer from "./components/TrustAndDisclaimer";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Documents />
        <Features />
        <TrustAndDisclaimer />
        <Pricing />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </>
  );
}

export default App;
