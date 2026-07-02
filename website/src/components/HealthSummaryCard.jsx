import "./HealthSummaryCard.css";

function HealthSummaryCard({ overallHealth }) {
  if (!overallHealth) return null;

  const getStatusClass = () => {
    const status = overallHealth.status.toLowerCase();

    if (status.includes("good")) return "good";
    if (status.includes("normal")) return "good";
    if (status.includes("attention")) return "warning";
    if (status.includes("important")) return "danger";
    if (status.includes("high")) return "danger";

    return "info";
  };

  return (
    <div className="health-card">

      <div className={`health-status ${getStatusClass()}`}>
        {overallHealth.status}
      </div>

      <h2>🩺 Overall Health</h2>

      <p>{overallHealth.summary}</p>

    </div>
  );
}

export default HealthSummaryCard;