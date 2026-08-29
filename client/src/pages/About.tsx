/* Graphite Field Notes: about page reads like a profile sheet, separating verified direction from requested personal details. */
import { ArrowUpRight, Circle } from "lucide-react";
import { Link } from "wouter";
import { skillGroups } from "@/lib/portfolio";

export default function About() {
  return <div className="page interior-page about-page">
    <div className="page-intro"><p className="eyebrow"><span className="signal-bar" /> 02 / PROFILE SHEET</p><h1>A developer<br />in <em>progress.</em></h1><p className="intro-copy">This is the working profile of a software developer, computer science student, engineer, hacker, trader, and technology enthusiast. The final version should be completed from verified personal information—not assumptions.</p></div>
    <div className="split-section section-rule"><div className="section-index">A / <span>ORIENTATION</span></div><div className="narrative"><p className="dropcap">The work begins with a question: what could be made clearer, more useful, or more resilient? From there, the practice moves between interface, application logic, data, and the systems that hold everything together.</p><p>This page intentionally avoids invented biography. It is structured as a ready-to-fill profile so the public story stays accurate as the portfolio grows.</p><div className="placeholder-note"><Circle size={10} fill="currentColor" /><span><strong>Personal profile needed.</strong><br />Add a short verified introduction, education details, development journey, and current direction.</span></div></div></div>
    <div className="split-section section-rule"><div className="section-index">B / <span>INTERESTS</span></div><div className="interest-list"><div><span>01</span><h3>Engineering systems</h3><p>Architecture, trade-offs, and the invisible decisions that make software dependable.</p></div><div><span>02</span><h3>Applied intelligence</h3><p>AI experiments grounded in useful interfaces, real constraints, and clear outcomes.</p></div><div><span>03</span><h3>Local context</h3><p>Digital tools that take the realities of East African users and infrastructure seriously.</p></div></div></div>
    <div className="split-section section-rule"><div className="section-index">C / <span>TOOLKIT</span></div><div className="skills-list">{skillGroups.map(group => <div className="skill-line" key={group.label}><span className="micro-label">{group.label}</span><div>{group.items.map(item => <span key={item}>{item}</span>)}</div><small>{group.note}</small></div>)}</div></div>
    <div className="page-cta"><p className="eyebrow">KEEP READING</p><Link href="/projects" className="text-link">See what is being built <ArrowUpRight size={15} /></Link></div>
  </div>;
}
