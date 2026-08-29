import { ArrowUpRight, ExternalLink, Filter, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { projects } from "@/lib/portfolio";

const filters = ["All", "Curated", "Lab", "Source"] as const;

export default function Projects() {
  const [filter, setFilter] = useState<typeof filters[number]>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="page interior-page projects-page">
      <section className="page-intro project-intro">
        <div>
          <p className="eyebrow"><span className="signal-bar" /> MY WORK</p>
          <h1>Things I've<br /><em>built.</em></h1>
        </div>
        <p className="intro-copy">A collection of products, experiments, and ideas turned into something real. Explore a project for its story, or jump straight into a live build.</p>
      </section>

      <div className="filter-bar">
        <span className="micro-label"><Filter size={14} /> FILTER BY TYPE</span>
        <div>{filters.map((item) => <button key={item} className={filter === item ? "filter-active" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div>
      </div>

      <section className="project-index-list bright-project-grid">
        {visible.map((project, index) => (
          <article className="index-project project-index-card" key={project.slug}>
            <Link href={`/projects/${project.slug}`} className="project-index-cover-link" aria-label={`View ${project.name} project`}> 
              <div className="project-index-cover"><span>{project.status}</span><Sparkles size={20} /></div>
            </Link>
            <div className="index-main">
              <Link href={`/projects/${project.slug}`} className="index-title"><h2>{project.name}</h2><ArrowUpRight size={19} /></Link>
              <p>{project.description}</p>
              <div className="index-meta"><span className="tag">{project.category}</span><span>{project.status}</span><span>{project.year}</span></div>
              <div className="index-tech">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              <div className="project-actions">
                <Link href={`/projects/${project.slug}`} className="project-action primary">View Project <ArrowUpRight size={14} /></Link>
                {project.live ? <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-action secondary">Live <ExternalLink size={14} /></a> : null}
              </div>
            </div>
            <span className="project-index-number">{String(index + 1).padStart(2, "0")}</span>
          </article>
        ))}
      </section>

      <div className="empty-note"><span className="status-dot" /><p>More work will be added as projects are verified and ready to tell their full story.</p></div>
    </div>
  );
}
