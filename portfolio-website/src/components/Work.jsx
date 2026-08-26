import { motion as Motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Gericht from "../assets/projects/Gericht.webp";
import GPT from "../assets/projects/GPT3.webp";
import Summize from "../assets/projects/Summize.webp";

const projects = [
  { number: "01", title: "Gericht", category: "Hospitality landing page", description: "A responsive restaurant landing page with an editorial layout, menu highlights, and smooth navigation across screen sizes.", skills: ["React", "Responsive UI", "Visual development"], image: Gericht, imageAlt: "Gericht restaurant landing page interface", demo: "https://jdyvex.github.io/gericht-landing-page/", code: "https://github.com/jdyvex/gericht-landing-page" },
  { number: "02", title: "GPT-3", category: "Technology landing page", description: "A responsive marketing site that breaks technical content into clear sections and reusable React components.", skills: ["React", "Component design", "Responsive UI"], image: GPT, imageAlt: "GPT-3 technology landing page interface", demo: "https://jdyvex.github.io/gpt3-landing-page/", code: "https://github.com/jdyvex/gpt3-landing-page" },
  { number: "03", title: "Summize", category: "AI-powered web application", description: "A web app that uses an API to turn long articles into short summaries through a simple, focused interface.", skills: ["React", "API integration", "Product UI"], image: Summize, imageAlt: "Summize article summarizer application interface", demo: "https://summize-ai-summarizer.netlify.app/", code: "https://github.com/jdyvex/ai-summarizer" },
];

const Work = () => (
  <section id="work" className="content-section work-section" aria-labelledby="work-title">
    <div className="page-shell">
      <Motion.div className="section-heading section-heading-split" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.55 }}>
        <div className="section-title-frame"><span className="section-index">03 / Selected work</span><h2 id="work-title">From responsive websites to complete web applications.</h2></div>
        <p className="section-summary-frame">A mix of marketing sites and web apps, each built to be clear, responsive, and easy to use.</p>
      </Motion.div>
      <div className="project-list">
        {projects.map((project, index) => (
          <Motion.article className="project-card" key={project.title} initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.58, delay: index * 0.06 }}>
            <a className="project-visual" href={project.demo} target="_blank" rel="noreferrer" aria-label={"View " + project.title + " live project"}>
              <img src={project.image} alt={project.imageAlt} loading="lazy" />
              <span className="project-visual-action">View live <FiArrowUpRight aria-hidden="true" /></span>
            </a>
            <div className="project-details">
              <div className="project-number">Project / {project.number}</div>
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul aria-label={project.title + " technologies"}>{project.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              <div className="project-links">
                <a href={project.demo} target="_blank" rel="noreferrer">Live project <FiArrowUpRight aria-hidden="true" /></a>
                <a href={project.code} target="_blank" rel="noreferrer">Source code <FiGithub aria-hidden="true" /></a>
              </div>
            </div>
          </Motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
