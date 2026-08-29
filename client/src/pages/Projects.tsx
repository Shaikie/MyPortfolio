import { ArrowUpRight, ExternalLink, Filter, Image as ImageIcon, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/lib/portfolio";

const filters = ["All", "Featured", "Product", "Experiment"] as const;

export default function Projects() {
  const [filter, setFilter] = useState<typeof filters[number]>("All");
  const reducedMotion = useReducedMotion();
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="page interior-page projects-page">
      <section className="page-intro project-intro"><div><p className="eyebrow"><span className="signal-bar" /> MY WORK</p><h1>Things I've<br /><em>built.</em></h1></div><p className="intro-copy">A collection of products, experiments, and ideas turned into something real. Explore a project for its story, or jump straight into a live build.</p></section>
      <div className="filter-bar"><span className="micro-label"><Filter size={14} /> FILTER BY TYPE</span><div>{filters.map((item) => <button key={item} className={filter === item ? "filter-active" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div></div>
      <section className="project-index-list bright-project-grid">
        {visible.map((project, index) => (
          <motion.article key={project.slug} className="index-project project-index-card" initial={reducedMotion ? false : { opacity: 0, y: 24 }} whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .45, delay: index * .07, ease: "easeOut" }}>
            <Link href={`/projects/${project.slug}`} className="project-index-cover-link" aria-label={`View ${project.name} project`}>
              <div className="project-index-cover project-preview">
                {project.image ? <img src={project.image} alt={`${project.name} live preview`} loading="lazy" /> : <div className="project-preview-placeholder"><ImageIcon size={30} /><span>Preview pending</span><small>Project visuals will be added here.</small></div>}
                <span className={project.live ? "live-badge" : "status-badge"}>{project.live ? "LIVE ↗" : project.status}</span>
              </div>
            </Link>
            <div className="index-main"><Link href={`/projects/${project.slug}`} className="index-title"><h2>{project.name}</h2><ArrowUpRight size={19} /></Link><p>{project.description}</p><div className="index-meta"><span className="tag">{project.category}</span><span>{project.status}</span><span>{project.year}</span></div><div className="index-tech">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><div className="project-actions"><Link href={`/projects/${project.slug}`} className="project-action primary">View Project <ArrowUpRight size={14} /></Link>{project.live ? <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-action secondary">Live Demo <ExternalLink size={14} /></a> : null}</div></div>
            <span className="project-index-number">{String(index + 1).padStart(2, "0")}</span>
          </motion.article>
        ))}
      </section>
      <div className="empty-note"><span className="status-dot" /><p>More work will be added as projects are verified and ready to tell their full story.</p></div>
    </div>
  );
}
