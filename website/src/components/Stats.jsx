import "./Stats.css";

function Stats() {
  const stats = [
    { number: "5", label: "AI Products" },
    { number: "100%", label: "Open Source" },
    { number: "24/7", label: "AI Assistance" },
    { number: "1", label: "Vision" }
  ];

  return (
    <section className="stats">
      <h2>Our Mission</h2>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;