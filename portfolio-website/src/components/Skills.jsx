import { motion as Motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const capabilities = [
  { number: "01", title: "Interface engineering", copy: "Responsive, accessible interfaces built from strong visual direction and practical code.", detail: "React · JavaScript · HTML · CSS" },
  { number: "02", title: "Application development", copy: "Reusable components and useful integrations that keep products consistent and maintainable.", detail: "Component architecture · API integration · Git" },
  { number: "03", title: "Product collaboration", copy: "Close collaboration from early ideas through launch, with clear communication at every step.", detail: "Prototyping · Iteration · Quality assurance" },
];

const Skills = () => (
  <section id="skills" className="content-section expertise-section" aria-labelledby="expertise-title">
    <div className="page-shell">
      <Motion.div className="section-heading section-heading-split" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.55 }}>
        <div className="section-title-frame"><span className="section-index">02 / Expertise</span><h2 id="expertise-title">What I bring to product teams.</h2></div>
        <p className="section-summary-frame">Clear code, straight answers, and reliable follow-through.</p>
      </Motion.div>

      <div className="capability-grid">
        {capabilities.map((capability, index) => (
          <Motion.article className="capability-card" key={capability.number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5, delay: index * 0.08 }} whileHover={{ y: -12, scale: 1.018, transition: { type: "spring", stiffness: 320, damping: 24, delay: 0 } }}>
            <div className="capability-card-topline"><span>{capability.number}</span><FiArrowUpRight aria-hidden="true" /></div>
            <h3>{capability.title}</h3>
            <p>{capability.copy}</p>
            <small>{capability.detail}</small>
          </Motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
