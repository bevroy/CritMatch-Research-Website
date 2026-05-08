
import React, { useState } from "react";
import "../styles.css";

const Recruitment = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="recruitment-container" style={{maxWidth: 800, margin: "2rem auto", padding: "2rem", background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.05)"}}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          padding: "1rem",
          fontSize: "1.2rem",
          background: "#35777B",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          marginBottom: open ? 24 : 0,
          transition: "background 0.2s"
        }}
        aria-expanded={open}
        aria-controls="recruitment-content"
      >
        {open ? "Hide Recruitment Details ▲" : "Show Recruitment Details ▼"}
      </button>
      {open && (
        <div id="recruitment-content">
          <h1 style={{color: "#35777B", textAlign: "center", marginBottom: 0}}>CritMatch Validation Study Site Recruitment</h1>
          <h3 style={{fontStyle: "italic", textAlign: "center", color: "#555", marginTop: 0}}>Elionyx Health, LLC</h3>
          <p>We are seeking healthcare organizations and research sites to participate in the validation study for <b>CritMatch</b> — a clinical cohort identification and research matching platform developed by Elionyx Health, LLC.</p>
          <p>CritMatch is designed to help organizations identify eligible patient populations for clinical research and operational initiatives using intelligent EMR/EHR-based cohort discovery.</p>
          <h4>We are currently recruiting:</h4>
          <ul>
            <li>Clinical research sites</li>
            <li>Academic medical centers</li>
            <li>Health systems</li>
            <li>Specialty clinics</li>
            <li>CROs</li>
            <li>Research networks</li>
            <li>Innovation-focused healthcare organizations</li>
          </ul>
          <h4>Participating validation sites will receive:</h4>
          <ul style={{listStyle: 'none', paddingLeft: 0}}>
            <li>✔ Unlimited CritMatch platform access for one full year</li>
            <li>✔ Early access to new product features and integrations</li>
            <li>✔ Direct collaboration with the CritMatch development team</li>
            <li>✔ Opportunity to contribute to publications and validation outcomes</li>
            <li>✔ Recognition as an inaugural CritMatch validation partner site</li>
          </ul>
          <h4>Validation study focus areas:</h4>
          <ul>
            <li>Cohort identification accuracy</li>
            <li>Inclusion/exclusion criteria matching performance</li>
            <li>ICD-10 / CPT / SNOMED query optimization</li>
            <li>Workflow efficiency improvements</li>
            <li>Research recruitment acceleration</li>
            <li>Clinical operations and population analytics utility</li>
          </ul>
          <h4>CritMatch is being developed to support:</h4>
          <ul>
            <li>Clinical trial recruitment</li>
            <li>Registry identification</li>
            <li>Population health initiatives</li>
            <li>Quality improvement programs</li>
            <li>Precision medicine workflows</li>
            <li>Research feasibility analysis</li>
          </ul>
          <h4>We are especially interested in sites with:</h4>
          <ul>
            <li>Active clinical research programs</li>
            <li>EHR/EMR analytics capabilities</li>
            <li>Research recruitment challenges</li>
            <li>Innovation and AI adoption initiatives</li>
          </ul>
          <p>If your organization is interested in participating in the validation of next-generation cohort discovery technology, please comment below or send a direct message.</p>
          <div style={{marginTop: 24, color: "#35777B", fontSize: 14}}>
            #ClinicalResearch #DigitalHealth #HealthcareInnovation #AIinHealthcare #ClinicalTrials #PatientRecruitment #HealthIT #ResearchOperations #PopulationHealth #MedicalInnovation #CritMatch #ClinicalInformatics
          </div>
        </div>
      )}
    </div>
  );
};

export default Recruitment;
