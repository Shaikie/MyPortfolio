import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { Link, useRoute } from "wouter";
import { projects } from "@/lib/portfolio";

export default function ProjectDetail() {
  const [, params] = useRoute("/projects/:slug");
  const project = projects.find((p) => p.slug === params?.slug);

  if (!project) {
    return (
      <div className="page interior-page">
        <p className="eyebrow">404 / RECORD NOT FOUND</p>
        <h1>This entry is<br /><em>not indexed.</em></h1>
        <Link href="/projects" className="text-link">Return to project index <ArrowUpRight size={15} /></Link>
      </div>
    );
  }

  const sections = [
    ["01", "Problem", project.problem],
    ["02", "Solution", project.solution],
    ["03", "Architecture", project.architecture],
    ["04", "Implementation", project.implementation],
    ["05", "Challenges", project.challenges],
    ["06", "Lessons learned", project.lessons],
  ];

  return (
    <div className="page case-page">
      <Link href="/projects" className="back-link"><ArrowLeft size={15} /> Project index</Link>
      <div className="case-header">
        <div>
          <p className="eyebrow"><span className="signal-bar" /> {project.category.toUpperCase()} / CASE STUDY</p>
          <h1>{project.name}<br /><em>build notes.</em></h1>
        </div>
        <div className="case-meta">
          <span className="tag">{project.status}</span>
          <span>{project.year}</span>
          <div className="case-tech">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        </div>
      </div>

      <div
        className={`case-image${project.image ? " has-image" : " no-image"}`}
        style={project.image ? { backgroundImage: `url(${project.image})` } : undefined}
        aria-label={project.image ? `${project.name} project preview` : undefined}
      />

      <div className="case-sections">
        {sections.map(([num, title, body]) => (
          <section className="case-section" key={num}>
            <span className="section-index">{num} /</span>
            <div><h2>{title}</h2><p>{body}</p></div>
          </section>
        ))}
      </div>

      <div className="case-footer">
        <span className="micro-label">LINKS</span>
        <div>
          {project.github ? <a href={project.github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={14} /></a> : null}
          {project.live ? <a href={project.live} target="_blank" rel="noreferrer">Live project <ExternalLink size={14} /></a> : null}
        </div>
      </div>
    </div>
  );
}
