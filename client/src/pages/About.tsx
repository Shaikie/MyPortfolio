import { ArrowUpRight, Circle } from "lucide-react";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import { about, skillGroups } from "@/lib/portfolio";

export default function About() {
  const reducedMotion = useReducedMotion();

  return <div className="page interior-page about-page">
    <div className="page-intro"><p className="eyebrow"><span className="signal-bar" /> 02 / PROFILE SHEET</p><h1>A developer<br />in <em>progress.</em></h1><p className="intro-copy">A working profile of a computer science student and developer exploring software engineering, cybersecurity, AI, design, and practical systems.</p></div>
    <div className="split-section section-rule"><div className="section-index">A / <span>ORIENTATION</span></div><div className="narrative">
      <h2 className="about-headline">{about.headline}</h2>
      {about.paragraphs.map((paragraph, index) => <p key={index} className={index === 0 ? "dropcap" : ""}>{paragraph}</p>)}
      {!about.headline && about.paragraphs.length === 0 ? <div className="placeholder-note"><Circle size={10} fill="currentColor" /><span><strong>Personal profile needed.</strong><br />Add a verified introduction and development journey.</span></div> : null}
    </div></div>
    <div className="split-section section-rule"><div className="section-index">B / <span>INTERESTS</span></div><div className="interest-list"><div><span>01</span><h3>Engineering systems</h3><p>Architecture, trade-offs, and the invisible decisions that make software dependable.</p></div><div><span>02</span><h3>Applied intelligence</h3><p>AI experiments grounded in useful interfaces, real constraints, and clear outcomes.</p></div><div><span>03</span><h3>Local context</h3><p>Digital tools that take the realities of East African users and infrastructure seriously.</p></div></div></div>
    <div className="split-section section-rule"><div className="section-index">C / <span>TOOLKIT</span></div><div className="skills-list">{skillGroups.map(group => <div className="skill-line" key={group.label}><span className="micro-label">{group.label}</span><div>{group.items.map((item, index) => <motion.span key={item} initial={reducedMotion ? false : { opacity: 0, y: 8 }} whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .35, delay: index * .035 }}>{item}</motion.span>)}</div><small>{group.note}</small></div>)}</div></div>
    <div className="page-cta"><p className="eyebrow">KEEP READING</p><Link href="/projects" className="text-link">See what is being built <ArrowUpRight size={15} /></Link></div>
  </div>;
}
