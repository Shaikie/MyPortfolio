import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return <div className="page interior-page contact-page">
    <div className="page-intro"><p className="eyebrow"><span className="signal-bar" /> 05 / CONTACT SHEET</p><h1>Bring a good<br /><em>problem.</em></h1><p className="intro-copy">For collaborations, technical conversations, or a project worth documenting, use one of the direct channels below.</p></div>
    <div className="contact-grid section-rule"><div className="contact-message"><span className="section-index">A / <span>OPEN CHANNEL</span></span><h2>Let’s make the<br />next question<br /><em>concrete.</em></h2><p>If you have an interesting project, technical question, collaboration idea, or opportunity, email is the simplest way to reach me.</p></div><div className="contact-links">
      {/* TODO: Replace YOUR_EMAIL@example.com with the real public email address before deploying. */}
      <a className="contact-link" href="mailto:YOUR_EMAIL@example.com?subject=Portfolio%20contact"><Mail size={18} /><span><small>DIRECT EMAIL</small>Send me a message</span><ArrowUpRight size={17} /></a>
      <a className="contact-link" href="https://github.com/Shaikie" target="_blank" rel="noreferrer"><Github size={18} /><span><small>PUBLIC SOURCE</small>GitHub / Shaikie</span><ArrowUpRight size={17} /></a>
      <div className="placeholder-note"><Linkedin size={16} /><span><strong>LinkedIn</strong><br />A public profile link can be added when there is a verified destination to publish.</span></div>
    </div></div>
    <div className="availability"><span className="status-dot" /> STATUS / OPEN TO BUILDING WITH PEOPLE WHO CARE ABOUT THE DETAILS</div>
  </div>;
}
