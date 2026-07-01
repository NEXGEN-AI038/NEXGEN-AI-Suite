import { useState } from "react";
import "./MediExplain.css";
import FileUpload from "../components/FileUpload";

function MediExplain() {

  const [selectedFile, setSelectedFile] = useState(null);

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

          <p>
            <strong>Name:</strong> {selectedFile.name}
          </p>

          <p>
            <strong>Size:</strong> {(selectedFile.size / 1024).toFixed(2)} KB
          </p>

          <p>
            <strong>Type:</strong> {selectedFile.type}
          </p>

          <div className="ready-badge">
            ✅ Ready for AI Analysis
          </div>

        </div>

      )}

    </div>
  );
}

export default MediExplain;