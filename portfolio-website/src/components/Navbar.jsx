import { useEffect, useRef, useState } from "react";
import { motion as Motion } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const [theme, setTheme] = useState(() =>
    window.localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark",
  );

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 900) setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <header className="site-header">
      <nav className="page-shell site-nav" aria-label="Primary navigation">
        <Motion.a
          className="wordmark"
          href="#home"
          aria-label="Jordan Dyvex, home"
          whileHover={{ y: -2 }}
        >
          JD<span>.</span>
        </Motion.a>

        <div className="desktop-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-pressed={theme === "light"}
          >
            {theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
          <a className="nav-cta" href="mailto:jordan@jordandyvex.com">
            Let’s talk
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>

        <Motion.div
          id="mobile-navigation"
          className="mobile-nav"
          aria-hidden={!isOpen}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, pointerEvents: "auto" },
            closed: { opacity: 0, pointerEvents: "none" },
          }}
        >
          <ul>
            {navItems.map((item, index) => (
              <Motion.li
                key={item.href}
                initial={false}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: isOpen ? index * 0.05 : 0 }}
              >
                <a href={item.href} tabIndex={isOpen ? 0 : -1} onClick={() => setIsOpen(false)}>
                  <span>0{index + 1}</span>
                  {item.label}
                </a>
              </Motion.li>
            ))}
          </ul>
          <button className="mobile-theme-toggle" type="button" tabIndex={isOpen ? 0 : -1} onClick={toggleTheme}>
            <span>{theme === "dark" ? "Use light mode" : "Use dark mode"}</span>
            {theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
          <a className="mobile-nav-cta" href="mailto:jordan@jordandyvex.com" tabIndex={isOpen ? 0 : -1} onClick={() => setIsOpen(false)}>
            Start a conversation
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </Motion.div>
      </nav>
    </header>
  );
};

export default Navbar;
