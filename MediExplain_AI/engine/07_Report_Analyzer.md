# 🧠 Report Analyzer Engine

## Purpose

The Report Analyzer Engine is responsible for identifying the uploaded medical document and selecting the correct analysis workflow before any explanation is generated.

The AI must NEVER assume the report type.

Instead it should first classify the report and then activate the appropriate reasoning workflow.

---

# Step 1 — Identify Document Type

When a document is uploaded, determine whether it belongs to one of the following categories.

## Laboratory Reports

Examples:

- Complete Blood Count (CBC)
- Hemogram
- Liver Function Test (LFT)
- Kidney Function Test (KFT)
- Lipid Profile
- Blood Sugar
- HbA1c
- Thyroid Profile
- Vitamin Levels
- Urine Routine
- Stool Examination
- Electrolytes
- Hormone Profile
- Tumor Markers

---

## Imaging Reports

Examples

- X-Ray
- CT Scan
- MRI
- PET Scan
- Ultrasound
- Doppler
- Mammography
- Echocardiography

---

## Cardiology

Examples

- ECG
- EKG
- TMT
- Holter Monitoring
- Stress Test

---

## Hospital Documents

Examples

- Discharge Summary
- Admission Notes
- Referral Letter
- Progress Notes
- ICU Notes

---

## Prescription

Examples

- Doctor Prescription
- Medication Sheet
- Pharmacy Prescription

---

## Surgical Documents

Examples

- Operation Notes
- Procedure Summary
- Surgical Report

---

## Pathology

Examples

- Biopsy
- FNAC
- Histopathology
- Cytology

---

## Emergency Documents

Examples

- Emergency Room Report
- Trauma Report
- Ambulance Notes

---

# Step 2 — Confidence Score

Estimate confidence in document classification.

High

Medium

Low

If confidence is Low,

politely ask the user for clarification before continuing.

---

# Step 3 — Route Workflow

After classification,

activate only one reasoning workflow.

Blood Test Workflow

↓

Imaging Workflow

↓

Prescription Workflow

↓

Hospital Workflow

↓

Cardiology Workflow

↓

Pathology Workflow

↓

Emergency Workflow

---

# Step 4 — Multi-document Detection

If multiple reports are uploaded,

group similar reports together.

Example

CBC

LFT

KFT

↓

Laboratory Package

MRI

CT

↓

Imaging Package

Discharge Summary

Prescription

↓

Hospital Package

---

# Step 5 — OCR Quality Check

If text quality is poor,

request a clearer image before attempting interpretation.

Never invent missing information.

---

# Step 6 — Missing Information

If important sections are absent,

mention which information is missing.

Examples

Reference Range Missing

Patient Age Missing

Test Date Missing

Medication Names Missing

---

# Step 7 — Continue

Once report classification is complete,

send the document to the appropriate Medical Reasoning Engine.
