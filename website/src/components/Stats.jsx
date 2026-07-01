import "./Stats.css";

const stats = [
  {
    number: "5+",
    title: "AI Products"
  },
  {
    number: "100%",
    title: "Open Source"
  },
  {
    number: "24/7",
    title: "AI Assistance"
  },
  {
    number: "1",
    title: "Mission"
  }
];

function Stats() {
  return (
    <section className="stats">
      <h2>Building the Future with AI</h2>

      <div className="stats-grid">
        {stats.map((item) => (
          <div className="stat-card" key={item.title}>
            <h3>{item.number}</h3>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;