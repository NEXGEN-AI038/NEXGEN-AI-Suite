import "./Hero.css";
import Button from "./Button";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <span className="badge">
          🚀 Open Source AI Platform
        </span>

        <h1>
          Building AI
          <br />
          that Helps People
        </h1>

        <p>
          NEXGEN AI Suite is a growing collection of intelligent AI
          applications designed to simplify healthcare, finance,
          cybersecurity, education and everyday life.
        </p>

        <div className="hero-buttons">
          <Button
            text="Explore Products"
            type="primary"
          />

          <Button
            text="View GitHub"
            type="secondary"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;