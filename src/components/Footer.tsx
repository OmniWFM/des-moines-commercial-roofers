import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-white text-lg font-extrabold mb-3">
            DES MOINES <span className="text-brand-red">ROOFING</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Commercial roofing installation, repair and service across {site.city}, {site.state} and the surrounding metro.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/commercial-roofing" className="hover:text-brand-red">Commercial Roofing</Link></li>
            <li><Link href="/repair-service" className="hover:text-brand-red">Repair / Service</Link></li>
            <li><Link href="/portfolio" className="hover:text-brand-red">Portfolio</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-brand-red">About</Link></li>
            <li><Link href="/contact" className="hover:text-brand-red">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3">Get In Touch</h4>
          <ul className="space-y-2 text-sm">
            <li><a href={`tel:${site.phoneRaw}`} className="hover:text-brand-red">{site.phoneDisplay}</a></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-brand-red">{site.email}</a></li>
            <li>{site.address}</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-white/10 text-xs text-white/50 flex flex-col sm:flex-row justify-between gap-2">
        <span>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span>24/7 Emergency Service Available</span>
      </div>
    </footer>
  );
}
