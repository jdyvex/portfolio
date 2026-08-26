import { motion as Motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Contact = () => (
  <section id="contact" className="content-section contact-section" aria-labelledby="contact-title">
    <div className="page-shell contact-layout">
      <Motion.div className="contact-copy" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }}>
        <div className="section-title-frame">
          <span className="section-index">04 / Contact</span>
          <div className="contact-copy-frame">
            <h2 id="contact-title">Have a role, project, or collaboration in mind?</h2>
            <p>Send me a few details about what you’re building or where you need help. I’ll reply with questions and next steps.</p>
            <a className="direct-email" href="mailto:jordan@jordandyvex.com"><FiMail aria-hidden="true" />jordan@jordandyvex.com<FiArrowUpRight aria-hidden="true" /></a>
            <div className="social-links" aria-label="Social links">
              <a href="https://www.linkedin.com/in/jordan-dyvex/" target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" />LinkedIn</a>
              <a href="https://github.com/jdyvex" target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" />GitHub</a>
            </div>
          </div>
        </div>
      </Motion.div>

      <Motion.form method="POST" action="https://getform.io/f/77815d0b-3f4a-44f8-8073-e7b27e8ac2e1" className="contact-form" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.22 }} transition={{ duration: 0.55, delay: 0.1 }}>
        <div className="contact-form-topline" aria-hidden="true">
          <span>Project brief</span>
          <span><i />Open channel</span>
        </div>
        <div className="form-row">
          <div className="form-field"><label htmlFor="name">Name</label><input id="name" type="text" name="name" autoComplete="name" placeholder="Your name" required /></div>
          <div className="form-field"><label htmlFor="email">Email</label><input id="email" type="email" name="email" autoComplete="email" placeholder="you@example.com" required /></div>
        </div>
        <div className="form-field">
          <label htmlFor="interest">I’m reaching out about</label>
          <select id="interest" name="interest" defaultValue="" required>
            <option value="" disabled>Select one</option>
            <option value="full-time-opportunity">A full-time opportunity</option>
            <option value="contract-freelance">A contract or freelance project</option>
            <option value="website-product-build">A website or product build</option>
            <option value="development-consulting">Web development consulting or support</option>
            <option value="agency-partnership">An agency or studio partnership</option>
            <option value="speaking-community">A speaking or community opportunity</option>
            <option value="other">Something else</option>
          </select>
        </div>
        <div className="form-field"><label htmlFor="message">A little about it</label><textarea id="message" name="message" rows="6" placeholder="What are you hoping to build or solve?" required /></div>
        <button className="form-submit" type="submit">Send inquiry<FiArrowUpRight aria-hidden="true" /></button>
      </Motion.form>
    </div>
    <footer className="page-shell site-footer"><p>© {new Date().getFullYear()} Jordan Dyvex</p><a href="#home">Back to top ↑</a></footer>
  </section>
);

export default Contact;
