import "./HealthDashboard.css";
import HealthSummaryCard from "./HealthSummaryCard";

function HealthDashboard({ data }) {
  if (!data) return null;

  return (
    <div className="dashboard-container">

      <HealthSummaryCard overallHealth={data.overallHealth} />

      <div className="dashboard-section">

        <h2>🚨 Important Findings</h2>

        <div className="findings-grid">

          {data.topFindings.map((finding, index) => (
            <div className="finding-card" key={index}>
              <span className="finding-icon">⚠️</span>
              <p>{finding}</p>
            </div>
          ))}

        </div>

      </div>

      <div className="dashboard-section">

        <h2>📊 Test Results</h2>

        <div className="table-wrapper">

          <table className="results-table">

            <thead>

              <tr>

                <th>Test</th>
                <th>Your Result</th>
                <th>Normal Range</th>
                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {data.tests.map((test, index) => (

                <tr key={index}>

                  <td>{test.test}</td>

                  <td>{test.yourResult}</td>

                  <td>{test.normalRange}</td>

                  <td>
                    <span
                      className={
                        test.status.toLowerCase().includes("normal") ||
                        test.status.toLowerCase().includes("range")
                          ? "status-good"
                          : test.status.toLowerCase().includes("border")
                          ? "status-warning"
                          : "status-danger"
                      }
                    >
                      {test.status}
                    </span>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      <div className="dashboard-section">

        <h2>❤️ Recommended Actions</h2>

        <div className="recommendation-grid">

          {data.recommendations.map((item, index) => (

            <div className="recommendation-card" key={index}>

              ✅ {item}

            </div>

          ))}

        </div>

      </div>

      <div className="dashboard-section">

        <h2>👨‍⚕️ Doctor Advice</h2>

        <div className="doctor-card">

          {data.doctorAdvice}

        </div>

      </div>

    </div>
  );
}

export default HealthDashboard;