import { useState } from "react";
import "./MediExplain.css";
import FileUpload from "../components/FileUpload";
import { extractTextFromPDF } from "../utils/pdfReader";

function MediExplain() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfText, setPdfText] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleReadPDF() {
    if (!selectedFile) {
      alert("Please select a PDF first.");
      return;
    }

    try {
      setLoading(true);

      const text = await extractTextFromPDF(selectedFile);

      setPdfText(text);

    } catch (error) {
      console.error(error);
      alert("Unable to read the PDF.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="medi-page">

      <h1>🩺 MediExplain AI</h1>

      <p>
        Upload your medical report and let AI explain it in simple language.
      </p>

      <FileUpload
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
      />

      {selectedFile && (
        <div className="file-info">

          <h3>📄 File Ready for Analysis</h3>

          <p><strong>Name:</strong> {selectedFile.name}</p>

          <p><strong>Size:</strong> {(selectedFile.size / 1024).toFixed(2)} KB</p>

          <p><strong>Type:</strong> {selectedFile.type}</p>

          <div className="ready-badge">
            ✅ Ready
          </div>

          <button
            className="analyze-button"
            onClick={handleReadPDF}
          >
            {loading ? "Reading PDF..." : "Read PDF"}
          </button>

        </div>
      )}

      {pdfText && (
        <div className="pdf-output">

          <h2>📖 Extracted Text</h2>

          <pre>{pdfText}</pre>

        </div>
      )}

    </div>
  );
}

export default MediExplain;