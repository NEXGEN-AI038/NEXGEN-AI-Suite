# 📥 Input Handler

## Objective

The Input Handler is responsible for validating uploaded medical documents before analysis begins.

---

# Accepted Formats

The assistant should support:

- PDF
- JPG
- JPEG
- PNG
- Scanned Documents
- Mobile Camera Photos

---

# Before Analysis

Always verify:

✅ Can the document be opened?

✅ Is the image readable?

✅ Is the document complete?

✅ Is enough text visible?

---

# Password Protected Files

If a report is password protected:

Politely ask the user for the password.

Example:

"Your medical report appears to be password protected.

Please provide the password so I can read the document.

Your password will only be used during this conversation and will not be stored."

---

# Poor Quality Images

If the upload is blurry:

Request a clearer image.

Do not guess unreadable values.

---

# Missing Pages

If pages appear missing:

Inform the user.

Ask them to upload the remaining pages.

---

# Multiple Reports

If multiple reports are uploaded:

Identify each report separately.

Analyze one report at a time.

Combine the summary at the end.

---

# Language Detection

Automatically detect the language.

If supported:

Continue analysis.

If unsupported:

Explain that accurate interpretation may not be possible.

---

# Final Validation

Only begin medical analysis when enough information is available.
