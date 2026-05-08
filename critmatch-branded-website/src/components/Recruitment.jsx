
import React, { useState } from "react";
import "../styles.css";

const Recruitment = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{maxWidth: 700, margin: "2rem auto"}}>
      <div
        style={{
          background: "#e6f4f1",
          border: "2px solid #b7e0d8",
          borderRadius: 16,
          boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
          padding: open ? "0 0 1.5rem 0" : 0,
          transition: "box-shadow 0.2s"
        }}
      >
        <button
          onClick={() => setOpen((o) => !o)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            background: "none",
            border: "none",
            padding: "1.25rem 2rem 1.25rem 1.5rem",
            fontSize: "1.15rem",
            fontWeight: 600,
            color: "#24706b",
            cursor: "pointer",
            borderRadius: 16,
            outline: "none"
          }}
          aria-expanded={open}
          aria-controls="recruitment-content"
        >
          <span>CritMatch Validation Study Site Recruitment</span>
          <span style={{fontSize: "1.5rem", marginLeft: 12}}>{open ? "▲" : "▼"}</span>
        </button>
        {open && (
          <div id="recruitment-content" style={{padding: "0 2rem"}}>
            <div style={{marginTop: 8, marginBottom: 8, color: "#444", fontStyle: "italic", fontSize: 16}}>Elionyx Health, LLC</div>
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
    </div>
  );
};

export default Recruitment;
