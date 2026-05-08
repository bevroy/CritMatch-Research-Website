
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
          <div id="recruitment-content" style={{padding: "0 2rem 1.5rem 2rem", color: "#184d47"}}>
            <div style={{marginTop: 24, marginBottom: 8}}>
              <div style={{fontWeight: 700, fontSize: 22, marginBottom: 2, color: '#184d47'}}>CritMatch Validation Study Site Recruitment</div>
              <div style={{fontStyle: "italic", fontSize: 16, color: "#24706b", marginBottom: 16}}>Elionyx Health, LLC</div>
            </div>
            <div style={{fontSize: 16, marginBottom: 16}}>
              <p style={{margin: 0}}>We are seeking healthcare organizations and research sites to participate in the validation study for <b>CritMatch</b> — a clinical cohort identification and research matching platform developed by Elionyx Health, LLC.</p>
              <p style={{margin: 0}}>CritMatch is designed to help organizations identify eligible patient populations for clinical research and operational initiatives using intelligent EMR/EHR-based cohort discovery.</p>
            </div>
            <div style={{fontWeight: 600, marginBottom: 4}}>We are currently recruiting:</div>
            <ul style={{marginTop: 0, marginBottom: 16, paddingLeft: 24}}>
              <li>Clinical research sites</li>
              <li>Academic medical centers</li>
              <li>Health systems</li>
              <li>Specialty clinics</li>
              <li>CROs</li>
              <li>Research networks</li>
              <li>Innovation-focused healthcare organizations</li>
            </ul>
            <div style={{fontWeight: 600, marginBottom: 4}}>Participating validation sites will receive:</div>
            <ul style={{listStyle: 'none', paddingLeft: 0, marginTop: 0, marginBottom: 16, fontSize: 16}}>
              <li style={{marginBottom: 2}}>✔ Unlimited CritMatch platform access for one full year</li>
              <li style={{marginBottom: 2}}>✔ Early access to new product features and integrations</li>
              <li style={{marginBottom: 2}}>✔ Direct collaboration with the CritMatch development team</li>
              <li style={{marginBottom: 2}}>✔ Opportunity to contribute to publications and validation outcomes</li>
              <li>✔ Recognition as an inaugural CritMatch validation partner site</li>
            </ul>
            <div style={{fontWeight: 600, marginBottom: 4}}>Validation study focus areas:</div>
            <ul style={{marginTop: 0, marginBottom: 16, paddingLeft: 24}}>
              <li>Cohort identification accuracy</li>
              <li>Inclusion/exclusion criteria matching performance</li>
              <li>ICD-10 / CPT / SNOMED query optimization</li>
              <li>Workflow efficiency improvements</li>
              <li>Research recruitment acceleration</li>
              <li>Clinical operations and population analytics utility</li>
            </ul>
            <div style={{fontWeight: 600, marginBottom: 4}}>CritMatch is being developed to support:</div>
            <ul style={{marginTop: 0, marginBottom: 16, paddingLeft: 24}}>
              <li>Clinical trial recruitment</li>
              <li>Registry identification</li>
              <li>Population health initiatives</li>
              <li>Quality improvement programs</li>
              <li>Precision medicine workflows</li>
              <li>Research feasibility analysis</li>
            </ul>
            <div style={{fontWeight: 600, marginBottom: 4}}>We are especially interested in sites with:</div>
            <ul style={{marginTop: 0, marginBottom: 16, paddingLeft: 24}}>
              <li>Active clinical research programs</li>
              <li>EHR/EMR analytics capabilities</li>
              <li>Research recruitment challenges</li>
              <li>Innovation and AI adoption initiatives</li>
            </ul>
            <div style={{fontSize: 16, marginBottom: 12}}>
              If your organization is interested in participating in the validation of next-generation cohort discovery technology, please comment below or send a direct message.
            </div>
            <div style={{marginTop: 8, color: "#35777B", fontSize: 14}}>
              #ClinicalResearch #DigitalHealth #HealthcareInnovation #AIinHealthcare #ClinicalTrials #PatientRecruitment #HealthIT #ResearchOperations #PopulationHealth #MedicalInnovation #CritMatch #ClinicalInformatics
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recruitment;
