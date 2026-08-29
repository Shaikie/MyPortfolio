/* Graphite Field Notes: not-found page preserves the field-note visual language and offers a clear return path. */
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
export default function NotFound() { return <div className="page interior-page"><p className="eyebrow"><span className="signal-bar" /> 404 / UNINDEXED ROUTE</p><h1>This record is<br /><em>not indexed.</em></h1><p className="intro-copy">The page you requested does not exist in the current field notes.</p><Link href="/" className="back-link"><ArrowLeft size={15} /> Return home</Link></div>; }
