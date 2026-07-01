import { useRef } from "react";
import "./FileUpload.css";

function FileUpload({ selectedFile, setSelectedFile }) {

  const fileInputRef = useRef(null);

  function handleFile(event) {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
    }
  }

  function openFilePicker() {
    fileInputRef.current.click();
  }

  return (
    <div className="upload-card">

      <div className="upload-icon">
        ☁️
      </div>

      <h2>Upload Medical Report</h2>

      <p>
        Drag & Drop your report here
      </p>

      <span>OR</span>

      <button onClick={openFilePicker}>
        Choose Medical Report
      </button>

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={handleFile}
        hidden
      />

      <small>
        Supported: PDF • JPG • PNG
      </small>

    </div>
  );
}

export default FileUpload;