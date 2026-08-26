import { motion as Motion } from "framer-motion";
import { FiArrowDownRight, FiArrowUpRight, FiCheck } from "react-icons/fi";

const expertise = [
  "Responsive interfaces",
  "React architecture",
  "Design-minded development",
];

const Home = () => {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="page-shell hero-layout">
        <Motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="availability-pill">
            <span className="availability-dot" aria-hidden="true" />
            Open to roles &amp; select projects
          </div>

          <p className="hero-kicker">Developer · Creative technologist</p>
          <h1 id="hero-title">
            Builder of
            <span> digital products.</span>
          </h1>
          <p className="hero-intro">
            I’m Jordan. I build websites and web apps that are clear,
            responsive, and pleasant to use. I care about the small details,
            but I keep the code practical.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore selected work
              <FiArrowDownRight aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="mailto:jordan@jordandyvex.com">
              Start a conversation
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </Motion.div>

        <Motion.aside
          className="expertise-card"
          aria-label="Core expertise"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="expertise-card-topline">
            <span>Core expertise</span>
            <span>01—03</span>
          </div>
          <div className="expertise-monogram" aria-hidden="true">
            JD
          </div>
          <ul>
            {expertise.map((item) => (
              <li key={item}>
                <FiCheck aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p>
            I’m available to work with product teams, agencies, and founders.
          </p>
        </Motion.aside>
      </div>

      <a className="scroll-cue" href="#about">
        <span>Continue</span>
        <FiArrowDownRight aria-hidden="true" />
      </a>
    </section>
  );
};

export default Home;
