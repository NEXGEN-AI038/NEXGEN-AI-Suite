import { useState } from "react";
import "./MediExplain.css";

import FileUpload from "../components/FileUpload";
import HealthDashboard from "../components/HealthDashboard";

import { extractTextFromPDF } from "../utils/pdfReader";
import { analyzeMedicalReport } from "../services/geminiService";

function MediExplain() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfText, setPdfText] = useState("");
  const [aiResult, setAiResult] = useState(null);

  const [loading, setLoading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  async function handleReadPDF() {

    if (!selectedFile) {
      alert("Please select a PDF first.");
      return;
    }

    try {

      setLoading(true);

      const text = await extractTextFromPDF(selectedFile);

      setPdfText(text);

      setLoading(false);

      setAnalyzing(true);

      const result = await analyzeMedicalReport(text);

      setAiResult(result);

      setAnalyzing(false);

    } catch (error) {

      console.error(error);

      setLoading(false);
      setAnalyzing(false);

      alert(error.message || "Unable to analyze the PDF.");

    }

  }

  return (

    <div className="medi-page">

      <h1>🩺 MediExplain AI</h1>

      <p>
        Upload your medical report and understand it in simple language.
      </p>

      <FileUpload
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
      />

      {selectedFile && (

        <div className="file-info">

          <h3>📄 File Ready</h3>

          <p>
            <strong>Name:</strong> {selectedFile.name}
          </p>

          <p>
            <strong>Size:</strong>{" "}
            {(selectedFile.size / 1024).toFixed(2)} KB
          </p>

          <p>
            <strong>Type:</strong> {selectedFile.type}
          </p>

          <div className="ready-badge">

            ✅ Ready for AI Analysis

          </div>

          <button
            className="analyze-button"
            onClick={handleReadPDF}
          >

            {loading ? "Reading PDF..." : "Analyze Report"}

          </button>

        </div>

      )}

      {analyzing && (

        <div className="pdf-output">

          <h2>🤖 AI is analyzing your report...</h2>

          <p>
            Please wait while MediExplain reviews your medical report.
          </p>

        </div>

      )}

      {aiResult && (

        <HealthDashboard
          data={aiResult}
        />

      )}

      {pdfText && (

        <details className="pdf-output">

          <summary>
            📖 View Extracted PDF Text
          </summary>

          <pre>{pdfText}</pre>

        </details>

      )}

    </div>

  );

}

export default MediExplain;