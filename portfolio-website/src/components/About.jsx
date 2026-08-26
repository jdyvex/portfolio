import { motion as Motion } from "framer-motion";
import InteractiveMesh from "./InteractiveMesh";

const principles = [
  { number: "01", title: "Start with the problem", copy: "Define the audience, goal, and constraints." },
  { number: "02", title: "Build for change", copy: "Use clear patterns that support change." },
  { number: "03", title: "Finish with care", copy: "Validate across screens and refine the details." },
];

const About = () => {
  return (
    <section id="about" className="content-section about-section" aria-labelledby="about-title">
      <InteractiveMesh />
      <div className="page-shell">
      <Motion.div className="section-heading" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.55 }}>
        <span className="section-index">01 / About</span>
        <h2 id="about-title">I bring design and development together.</h2>
      </Motion.div>

      <div className="about-grid">
        <Motion.div className="about-statement" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, delay: 0.08 }}>
          <p>I build responsive digital products with equal attention to interface design, implementation, and long-term maintainability.</p>
          <div className="about-interaction-cue" aria-hidden="true">
            <span><i /><i /><i /></span>
            Interactive field — move or tap to disturb
          </div>
        </Motion.div>

        <div className="principles-list" aria-label="Working principles">
          {principles.map((principle, index) => (
            <Motion.article key={principle.number} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.45, delay: index * 0.07 }}>
              <span>{principle.number}</span>
              <div><h3>{principle.title}</h3><p>{principle.copy}</p></div>
            </Motion.article>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
