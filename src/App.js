import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import "./App.css";
import Home from "./Home";
import Solutions from "./Solutions";
import About from "./About";
import Journey from "./Journey";
import Contact from "./Contact";
import Footer from "./Footer";
import { useScrollMemory } from "./hooks/useScrollMemory";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AIConsulting from "./components/ui/AIConsulting/AIConsulting";
import AIStrategy from "./components/ui/AIConsulting/AIStrategy";
import BusinessTechnology from "./components/ui/Business and Technology Consulting/businessandTechnology";
import DigitalMarketing from "./components/ui/Digital Marketing/digitalMarketing";
import CustomAIDevelopment from "./components/ui/AIConsulting/CustomAIDevelopment";
import GenerativeAI from "./components/ui/AIConsulting/GenerativeAI";
import AgenticAI from "./components/ui/AIConsulting/AgenticAI";
import EthicalAI from "./components/ui/AIConsulting/EthicalAI";
import AIResearchTraining from "./components/ui/AIConsulting/AIResearchTraining";
import MicrosoftServices from "./components/ui/Business and Technology Consulting/MicrosoftServices";
import WebsiteDesign from "./components/ui/Business and Technology Consulting/WebsiteDesign";
import CloudSolutions from "./components/ui/Business and Technology Consulting/CloudSolutions";
import Cybersecurity from "./components/ui/Business and Technology Consulting/Cybersecurity";
import DigitalTransformation from "./components/ui/Business and Technology Consulting/DigitalTransformation";
import GovernanceRiskCompliance from "./components/ui/Business and Technology Consulting/GovernanceRiskCompliance";
import DemandGeneration from "./components/ui/Digital Marketing/DemandGeneration";
import SEO from "./components/ui/Digital Marketing/SEO";
import SocialMediaMarketing from "./components/ui/Digital Marketing/SocialMediaMarketing";
import EmailContentMarketing from "./components/ui/Digital Marketing/EmailContentMarketing";
import VideoMarketing from "./components/ui/Digital Marketing/VideoMarketing";
import InfluencerMarketing from "./components/ui/Digital Marketing/InfluencerMarketing";
import AOS from "aos";
import "aos/dist/aos.css";
import RedingtonGulf from "./components/ui/caseStudies/redingtongulf";
import Qatar from "./components/ui/caseStudies/qatar";
import Microsoft from "./components/ui/caseStudies/microsoft";
import MicrosoftKSA from "./components/ui/caseStudies/micrpsoftKSA";

function AppContent() {
  const location = useLocation();
  useScrollMemory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/AIConsulting" element={<AIConsulting />} />
          <Route
            exact
            path="/solutions/AIConsulting/AIstrategy"
            element={<AIStrategy />}
          />
          <Route
            exact
            path="/solutions/AIConsulting/customAI-development"
            element={<CustomAIDevelopment />}
          />
          <Route
            exact
            path="/solutions/AIConsulting/genAI-development"
            element={<GenerativeAI />}
          />
          <Route
            exact
            path="/solutions/AIConsulting/agenticAI"
            element={<AgenticAI />}
          />
          <Route
            exact
            path="/solutions/AIConsulting/ethicalAI-compliance"
            element={<EthicalAI />}
          />
          <Route
            exact
            path="/solutions/AIConsulting/AI-research"
            element={<AIResearchTraining />}
          />
          <Route
            exact
            path="/solutions/business-technology"
            element={<BusinessTechnology />}
          />
          <Route
            exact
            path="/solutions/business-technology/microsoft"
            element={<MicrosoftServices />}
          />
          <Route
            exact
            path="/solutions/business-technology/website-design"
            element={<WebsiteDesign />}
          />
          <Route
            exact
            path="/solutions/business-technology/cloud-solutions"
            element={<CloudSolutions />}
          />
          <Route
            exact
            path="/solutions/business-technology/cybersecurity"
            element={<Cybersecurity />}
          />
          <Route
            exact
            path="/solutions/business-technology/strategy-digitalTransformation"
            element={<DigitalTransformation />}
          />
          <Route
            exact
            path="/solutions/business-technology/risk-compliance"
            element={<GovernanceRiskCompliance />}
          />
          <Route
            exact
            path="/solutions/digital-marketing"
            element={<DigitalMarketing />}
          />
          <Route
            exact
            path="/solutions/digital-marketing/demand-generation"
            element={<DemandGeneration />}
          />
          <Route
            exact
            path="/solutions/digital-marketing/seo"
            element={<SEO />}
          />
          <Route
            exact
            path="/solutions/digital-marketing/smm"
            element={<SocialMediaMarketing />}
          />
          <Route
            exact
            path="/solutions/digital-marketing/content-marketing"
            element={<EmailContentMarketing />}
          />
          <Route
            exact
            path="/solutions/digital-marketing/video-marketing"
            element={<VideoMarketing />}
          />
          <Route
            exact
            path="/solutions/digital-marketing/influencer-marketing"
            element={<InfluencerMarketing />}
          />
          <Route
            exact
            path="/solutions/casestudies/redingtongulf"
            element={<RedingtonGulf />}
          />
          <Route
            exact
            path="/solutions/casestudies/microsoft"
            element={<Microsoft />}
          />
          <Route
            exact
            path="/solutions/casestudies/microsoftksa"
            element={<MicrosoftKSA />}
          />
          <Route
            exact
            path="/solutions/casestudies/qatar"
            element={<Qatar />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
