/* Graphite Field Notes: global routing shell with an editorial index rail and instrument-like navigation. */
import { Route, Switch, useLocation } from "wouter";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Lab from "./pages/Lab";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

const navItems = [
  ["01", "Home", "/"],
  ["02", "About", "/about"],
  ["03", "Projects", "/projects"],
  ["04", "Lab", "/lab"],
  ["05", "Contact", "/contact"],
];

function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);

  return (
    <div className="site-shell">
      <aside className="index-rail" aria-label="Portfolio index">
        <a href="/" className="brand-lockup" aria-label="Shaikie home">
          <span className="brand-mark"><span>S</span><i /></span>
          <span className="brand-name">SHAIKIE</span>
        </a>
        <div className="rail-rule" />
        <p className="rail-caption">PERSONAL SYSTEMS<br />/ FIELD NOTES</p>
        <nav className="rail-nav">
          {navItems.map(([number, label, href]) => (
            <a key={href} href={href} className={location === href ? "active" : ""}>
              <span>{number}</span>{label}
            </a>
          ))}
        </nav>
        <div className="rail-footer">
          <span className="status-dot" />
          <span>OPEN TO BUILDING</span>
          <span className="rail-year">© {year}</span>
        </div>
      </aside>

      <header className="mobile-header">
        <a href="/" className="brand-lockup" aria-label="Shaikie home">
          <span className="brand-mark"><span>S</span><i /></span>
          <span className="brand-name">SHAIKIE</span>
        </a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>
      {open && <nav className="mobile-nav">{navItems.map(([number, label, href]) => <a key={href} href={href}><span>{number}</span>{label}<ArrowUpRight size={16} /></a>)}</nav>}

      <main className="content-canvas">{children}</main>
    </div>
  );
}

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/projects/:slug" component={ProjectDetail} />
    <Route path="/lab" component={Lab} />
    <Route path="/contact" component={Contact} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <Layout><Router /></Layout>;
}
