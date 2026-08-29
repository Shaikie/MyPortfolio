/* Graphite Field Notes: project index distinguishes curated work from experiments and source candidates. */
import { ArrowUpRight, Filter } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { projects } from "@/lib/portfolio";

const filters = ["All", "Curated", "Lab", "Source"] as const;
export default function Projects() {
  const [filter, setFilter] = useState<typeof filters[number]>("All");
  const visible = filter === "All" ? projects : projects.filter(p => p.category === filter);
  return <div className="page interior-page projects-page"><div className="page-intro project-intro"><div><p className="eyebrow"><span className="signal-bar" /> 03 / PROJECT INDEX</p><h1>A growing archive<br />of <em>builds.</em></h1></div><p className="intro-copy">Curated projects get the full case-study treatment. Lab notes capture experiments. Source candidates stay visible until there is enough verified context to tell their story.</p></div>
    <div className="filter-bar section-rule"><span className="micro-label"><Filter size={14} /> FILTER BY TYPE</span><div>{filters.map(item => <button key={item} className={filter === item ? "filter-active" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div></div>
    <div className="project-index-list">{visible.map((project, index) => <Link href={`/projects/${project.slug}`} className="index-project" key={project.slug}><span className="index-number">{String(index + 1).padStart(2, "0")}</span><div className="index-main"><div className="index-title"><h2>{project.name}</h2><ArrowUpRight size={19} /></div><p>{project.description}</p><div className="index-meta"><span className={`tag tag-${project.category.toLowerCase()}`}>{project.category}</span><span>{project.status}</span><span>{project.year}</span></div></div><div className="index-tech">{project.technologies.map(t => <span key={t}>{t}</span>)}</div></Link>)}</div>
    <div className="empty-note"><span className="status-dot" /><p>Repository discovery is intentionally paused until a GitHub profile and verified project details are confirmed.</p></div>
  </div>;
}
