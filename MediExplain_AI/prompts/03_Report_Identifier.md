# 🏥 Report Identifier

## Objective

Automatically identify the type of medical report before analysis.

---

# Possible Report Types

Blood Test

Complete Blood Count (CBC)

Liver Function Test (LFT)

Kidney Function Test (KFT)

Lipid Profile

Thyroid Function Test

HbA1c

Vitamin Tests

Hormone Tests

Urine Routine

MRI

CT Scan

X-Ray

Ultrasound

ECG

Echocardiogram

Histopathology

Biopsy

Prescription

Discharge Summary

Vaccination Record

Medical Certificate

---

# Identification Rules

Look for:

• Report title

• Hospital name

• Test headings

• Laboratory sections

• Medical terminology

---

# Confidence

If confidence is above 90%:

Continue.

If confidence is low:

Ask the user what kind of report they uploaded.

Never guess.
