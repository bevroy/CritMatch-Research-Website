import React from "react";
import { createRoot } from "react-dom/client";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Database,
  DollarSign,
  FileSearch,
  FileSpreadsheet,
  Hospital,
  Layers,
  LineChart,
  Lock,
  Network,
  Puzzle,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users
} from "lucide-react";
import "./styles.css";

const features = [
  {
    icon: <Puzzle />,
    title: "Cohort Builder",
    text: "The core of CritMatch. Define inclusion and exclusion criteria, expand them with terminology services, and run them against the EHR to surface candidate participants for your trial.",
    primary: true
  },
  {
    icon: <ClipboardList />,
    title: "Studies",
    text: "Organize trials, protocols, and sites in one place — with PI / Sub-I assignments that scope downstream feasibility, EDC, and finance activity."
  },
  {
    icon: <LineChart />,
    title: "Feasibility",
    text: "Answer trial feasibility questionnaires directly from EMR data. When attached to a study, results are scoped to the assigned PI / Sub-I providers' patients."
  },
  {
    icon: <FileSpreadsheet />,
    title: "EDC",
    text: "Build data-collection forms, identify enrolled participants, and pull data points directly from the EMR with a full Part 11 audit trail."
  },
  {
    icon: <DollarSign />,
    title: "Finance (CTFMS)",
    text: "Track sponsor budgets, accruals from EDC visits, invoicing and payments, and patient stipends across all of your studies."
  },
  {
    icon: <BarChart3 />,
    title: "Results",
    text: "Review, validate, and export cohort and study outputs — with reporting designed for both research operations and study teams."
  }
];

const steps = [
  "Enter study criteria",
  "Select code systems and clinical terms",
  "Run patient cohort search",
  "Review candidate list",
  "Export or route for study follow-up"
];

const competitors = [
  ["TriNetX", "Research network and feasibility analytics"],
  ["Deep 6 AI", "AI-assisted patient matching"],
  ["Epic SlicerDicer", "EHR-native reporting and analytics"],
  ["Oracle Health tools", "Population health and cohort analytics"],
  ["CritMatch", "Transparent EHR-integrated criteria matching"]
];

function App() {
  return (
    <main>
      <nav className="nav">
        <div className="brand">
          <div className="brandMark">
            <img className="brandLogo" src="/assets/critmatch-logo.png" alt="CritMatch logo" />
          </div>
          <div>
            <div className="brandName">CritMatch</div>
            <div className="brandSub">End-to-End Clinical Research Platform</div>
          </div>
        </div>
        <div className="navLinks">
          <a href="#product">Product</a>
          <a href="#workflow">Workflow</a>
          <a href="#demo">Demo</a>
          <a href="#partners">Partners</a>
          <a href="#contact" className="navCta">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroCopy">
          <div className="eyebrow">
            <Activity size={16} />
            Clinical trial recruitment intelligence
          </div>
          <h1>Find research candidates faster from within the EHR.</h1>
          <p>
            CritMatch helps health systems, researchers, and sponsors identify patients who meet
            study-specific inclusion and exclusion criteria using transparent, EHR-aligned cohort logic.
          </p>
          <div className="heroButtons">
            <a className="primaryBtn" href="mailto:info@critmatchresearch.com?subject=CritMatch%20Demo%20Request">Request a Demo <ArrowRight size={18} /></a>
            <a className="secondaryBtn" href="#product">Explore Platform</a>
          </div>
        </div>

        <div className="dashboardCard">
          <div className="dashboardTop">
            <div>
              <span className="tinyLabel">Study Cohort Search</span>
              <h3>Heart Failure Device Trial</h3>
            </div>
            <ShieldCheck className="statusIcon" />
          </div>

          <div className="criteriaGrid">
            <div className="criteriaBlock">
              <span>Inclusion Criteria</span>
              <p>Age 45–80, HF history, EF &lt; 40%, recent cardiology visit</p>
            </div>
            <div className="criteriaBlock">
              <span>Exclusion Criteria</span>
              <p>Recent MI, renal failure, active malignancy, pregnancy</p>
            </div>
          </div>

          <div className="matchPanel">
            <div>
              <div className="metric">248</div>
              <span>Potential matches</span>
            </div>
            <div>
              <div className="metric">72%</div>
              <span>Criteria confidence</span>
            </div>
            <div>
              <div className="metric">14</div>
              <span>Sites enabled</span>
            </div>
          </div>

          <div className="progressRows">
            <div><span>ICD-10 search</span><b>Complete</b></div>
            <div><span>SNOMED expansion</span><b>Enabled</b></div>
            <div><span>Eligibility review</span><b>Ready</b></div>
          </div>
        </div>
      </section>

      <section className="problem">
        <div className="sectionHead">
          <span className="eyebrow small">The problem</span>
          <h2>Clinical trial recruitment still depends on manual effort.</h2>
          <p>
            Study teams often lose time translating protocol criteria into EHR queries, reviewing charts,
            and reconciling terminology differences across diagnoses, procedures, medications, and labs.
          </p>
        </div>
        <div className="statGrid">
          <div><strong>Delayed enrollment</strong><span>Trials struggle to identify eligible patients quickly.</span></div>
          <div><strong>Manual chart review</strong><span>Staff spend hours validating criteria across records.</span></div>
          <div><strong>Missed candidates</strong><span>Terminology gaps can hide otherwise eligible patients.</span></div>
        </div>
      </section>

      <section id="product" className="features">
        <div className="sectionHead">
          <span className="eyebrow small">The platform</span>
          <h2>An end-to-end clinical research platform.</h2>
          <p>
            CritMatch now spans the full study lifecycle — from cohort discovery to feasibility,
            EDC, and finance — anchored by the Cohort Builder at its core.
          </p>
        </div>
        <div className="featureGrid">
          {features.map((f) => (
            <div className={f.primary ? "featureCard primary" : "featureCard"} key={f.title}>
              {f.primary && <span className="featureBadge">Core feature</span>}
              <div className="iconWrap">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="workflow" className="workflow">
        <div className="sectionHead left">
          <span className="eyebrow small">How it works</span>
          <h2>From protocol criteria to candidate cohort.</h2>
          <p>
            CritMatch is designed as a workflow layer between the clinical research team and the EHR,
            helping turn protocol language into auditable search logic.
          </p>
        </div>
        <div className="stepList">
          {steps.map((step, index) => (
            <div className="step" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
              <CheckCircle2 />
            </div>
          ))}
        </div>
      </section>

      <section id="demo" className="demo">
        <div className="sectionHead">
          <span className="eyebrow small">Product demo</span>
          <h2>See CritMatch in action.</h2>
          <p>
            A short walkthrough of how study teams configure criteria, review matches, and move
            faster from eligibility to enrollment.
          </p>
        </div>
        <div className="demoShell">
          <video
            className="demoVideo"
            controls
            preload="metadata"
            poster="/assets/cm-demo-poster.jpg"
          >
            <source src="/assets/cm-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="positioning">
        <div className="sectionHead">
          <span className="eyebrow small">Competitive position</span>
          <h2>Built for the gap between static reports and enterprise trial platforms.</h2>
        </div>
        <div className="comparison">
          {competitors.map(([name, text]) => (
            <div className={name === "CritMatch" ? "comparisonRow highlight" : "comparisonRow"} key={name}>
              <strong>{name}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="partners" className="partners">
        <div className="partnerCard">
          <Network />
          <h2>Designed for health systems, academic centers, CROs, and sponsors.</h2>
          <p>
            CritMatch can support trial feasibility, pre-screening, cohort discovery, quality initiatives,
            and specialty registry workflows.
          </p>
        </div>
        <div className="partnerBullets">
          <div><Layers /><span>Epic and Oracle Health integration roadmap</span></div>
          <div><Lock /><span>Security-conscious architecture for clinical environments</span></div>
          <div><BarChart3 /><span>Reporting outputs for operational and study teams</span></div>
          <div><Users /><span>Supports research coordinators and investigators</span></div>
        </div>
      </section>

      <section id="contact" className="cta">
        <div className="ctaBody">
          <div>
            <span className="eyebrow small">Ready to pilot?</span>
            <h2>Bring faster cohort identification to clinical research workflows.</h2>
            <p>Submit your details and the Elionyx Health team will follow up on partnerships and pilot deployment.</p>
            <p>
              Or email us directly at{" "}
              <a href="mailto:info@critmatchresearch.com">info@critmatchresearch.com</a>.
            </p>
          </div>

          <form
            className="contactForm"
            name="contact"
            method="POST"
            action="/?submitted=true"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hpField">
              <label>
                Do not fill this out if you are human: <input name="bot-field" />
              </label>
            </p>

            <label>
              Name
              <input type="text" name="name" required />
            </label>

            <label>
              Work Email
              <input type="email" name="email" required />
            </label>

            <label>
              Organization
              <input type="text" name="organization" />
            </label>

            <label>
              Message
              <textarea name="message" rows="4" required />
            </label>

            <a
              className="primaryBtn"
              href="mailto:info@critmatchresearch.com?subject=CritMatch%20Demo%20Request"
            >
              Request Demo
              <ArrowRight size={18} />
            </a>
          </form>
        </div>
      </section>

      <footer>
        <span>© 2026 CritMatch — Powered by Elionyx Health, LLC.</span>
      </footer>
    </main>
  );
}

export default App;

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
