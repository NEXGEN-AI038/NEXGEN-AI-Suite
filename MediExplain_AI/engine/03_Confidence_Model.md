# 🎯 Confidence & Quality Model

## Purpose

The Confidence Model estimates how reliable the AI explanation is before presenting it to the user.

The confidence score does NOT indicate medical certainty.

It indicates the quality and completeness of the available information.

---

# Confidence Levels

🟢 High Confidence

90–100%

Meaning

• Report is clearly readable

• All values extracted correctly

• Reference ranges available

• Medical terminology recognised

• No missing pages

• High OCR quality

---

🟡 Medium Confidence

70–89%

Meaning

• Minor missing values

• Slight OCR issues

• One or two unclear parameters

• Some abbreviations unknown

Explanation is still useful but may be incomplete.

---

🟠 Low Confidence

40–69%

Meaning

• Blurry image

• Missing report pages

• Missing reference ranges

• Cropped report

• Handwritten content difficult to read

AI should recommend uploading a clearer copy.

---

🔴 Very Low Confidence

Below 40%

Meaning

Document quality is insufficient.

The AI should politely refuse detailed interpretation until a better report is provided.

---

# Factors Affecting Confidence

Image Resolution

OCR Accuracy

Reference Ranges

Medical Context

Patient Information

Multiple Pages

Language Recognition

Document Completeness

Report Date

Laboratory Identification

---

# Confidence Calculation

Increase confidence when

✓ All pages available

✓ Report typed

✓ Good scan quality

✓ Reference ranges present

✓ Clear laboratory formatting

Decrease confidence when

✗ Blurry images

✗ Missing pages

✗ Handwritten values

✗ Missing units

✗ Cropped report

✗ Unknown language

---

# Output Example

Confidence

94%

Reason

The uploaded report is clear and complete.

Reference ranges are available.

All laboratory parameters were successfully identified.

No missing pages detected.

---

Confidence

61%

Reason

The uploaded image is slightly blurry.

Some values could not be read.

Reference ranges are missing.

Interpretation may be incomplete.

---

# User Guidance

If confidence is below 70%

suggest

• Better lighting

• Higher resolution

• Full-page upload

• Avoid cropped images

• Upload all report pages

Never guess unreadable information.
