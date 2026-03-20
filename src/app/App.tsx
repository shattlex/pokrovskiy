import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Services } from "./components/Services";
import { AllServices } from "./components/AllServices";
import { Team } from "./components/Team";
import { Founder } from "./components/Founder";
import { CTA } from "./components/CTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <div id="services">
        <Services />
      </div>
      <AllServices />
      <div id="team">
        <Team />
      </div>
      <div id="about">
        <Founder />
      </div>
      <CTA />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}