import "./MediExplain.css";

function MediExplain() {
  return (
    <div className="medi-page">

      <h1>🩺 MediExplain AI</h1>

      <p>
        Upload your medical report and let AI explain it in simple language.
      </p>

      <div className="upload-box">

        <h2>Upload Medical Report</h2>

        <button>
          Choose PDF
        </button>

        <p>
          or Drag & Drop your file here
        </p>

      </div>

      <div className="features">

        <div className="feature">
          📄 PDF Reports
        </div>

        <div className="feature">
          🤖 AI Explanation
        </div>

        <div className="feature">
          💊 Medicine Summary
        </div>

        <div className="feature">
          📋 Easy Language
        </div>

      </div>

    </div>
  );
}

export default MediExplain;