/* Graphite Field Notes: homepage uses a wide editorial statement beside a narrow evidence rail. */
import { ArrowDownRight, ArrowUpRight, Github, MoveUpRight } from "lucide-react";
import { Link } from "wouter";
import { projects, skillGroups } from "@/lib/portfolio";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  return <div className="page home-page">
    <section className="hero-grid">
      <div className="hero-copy reveal">
        <p className="eyebrow"><span className="signal-bar" /> 00 / DEVELOPER FIELD NOTES</p>
        <h1>Building useful<br /><em>systems</em> from<br />curiosity.</h1>
        <p className="hero-lede">A living record of software experiments, engineering decisions, and the work still worth investigating.</p>
        <div className="hero-actions">
          <Link href="/projects" className="button-primary">Explore the work <ArrowUpRight size={16} /></Link>
          <a href="https://github.com/Shaikie/MyPortfolio" target="_blank" rel="noreferrer" className="button-quiet"><Github size={16} /> GitHub source</a>
        </div>
      </div>
      <div className="hero-visual reveal-delay" role="img" aria-label="A graphite workbench with a notebook and keyboard">
        <div className="hero-visual-image" />
        <div className="visual-stamp">OBSERVATION<br /><strong>001</strong></div>
        <p className="visual-caption">Work is a series of<br />questions made tangible.</p>
      </div>
    </section>

    <section className="proof-strip section-rule">
      <div className="proof-label"><span>INDEX</span><strong>01</strong></div>
      <div><p className="micro-label">CURRENTLY EXPLORING</p><p className="proof-value">software systems / applied AI / the space between idea and implementation</p></div>
      <div className="proof-aside"><span className="status-dot" /> <span>portfolio foundation<br />under active construction</span></div>
    </section>

    <section className="home-projects content-section">
      <div className="section-heading"><div><p className="eyebrow"><span className="signal-bar" /> 01 / SELECTED WORK</p><h2>Projects with<br /><em>something to say.</em></h2></div><Link href="/projects" className="text-link">View project index <ArrowUpRight size={15} /></Link></div>
      <div className="project-feature-grid">
        {featured.map((project, index) => <Link href={`/projects/${project.slug}`} className={`project-card ${index === 1 ? "project-card-offset" : ""}`} key={project.slug}>
          <div className="card-top"><span className="card-index">0{index + 1}</span><span className="tag">{project.category}</span></div>
          <div className="card-evidence"><span>FIELD RECORD</span><span>STATUS / {project.status.toUpperCase()}</span></div><div className="card-body"><div className="card-image" style={{ backgroundImage: `url(${index === 0 ? "/manus-storage/lab-detail_95739230.jpg" : "/manus-storage/architecture-texture_881bc978.jpg"})` }}><span>{project.status}</span></div><h3>{project.name}</h3><p>{project.description}</p></div>
          <div className="card-footer"><span>Read build notes / source trail</span><MoveUpRight size={16} /></div>
        </Link>)}
      </div>
    </section>

    <section className="home-systems content-section section-rule">
      <div className="section-heading compact"><div><p className="eyebrow"><span className="signal-bar" /> 02 / WORKING TOOLKIT</p><h2>Tools are only<br /><em>the beginning.</em></h2></div><Link href="/about" className="text-link">More about the practice <ArrowUpRight size={15} /></Link></div>
      <div className="toolkit-row">{skillGroups.map((group) => <div className="toolkit-group" key={group.label}><span className="micro-label">{group.label}</span><div>{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div>
    </section>

    <section className="closing-note content-section"><ArrowDownRight className="closing-arrow" size={42} strokeWidth={1} /><p className="eyebrow">A NOTE FROM THE WORKBENCH</p><h2>The best portfolio<br />is still being <em>built.</em></h2><Link href="/contact" className="button-primary">Open a conversation <ArrowUpRight size={16} /></Link></section>
  </div>;
}
