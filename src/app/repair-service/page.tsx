import type { Metadata } from "next";
import Image from "next/image";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Repair & 24/7 Service",
  description:
    "24/7 commercial roof repair in Des Moines, Iowa. Leak detection, storm damage repair, preventative maintenance and emergency response."
};

const items = [
  { t: "Emergency Leak Repair", d: "Rapid response to active leaks to protect your inventory and operations." },
  { t: "Storm & Hail Damage", d: "Full inspection, documentation and insurance-ready storm damage reports." },
  { t: "Preventative Maintenance", d: "Scheduled inspections and tune-ups that extend the life of your roof." },
  { t: "Moisture Surveys", d: "Infrared and core sampling to locate hidden saturation before it spreads." }
];

export default function RepairService() {
  return (
    <>
      <section className="relative pt-40 pb-20 bg-brand-dark">
        <Image src={site.images.repair} alt="Commercial roof repair" fill className="object-cover opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4">
          <span className="inline-block bg-brand-red text-white text-xs font-bold tracking-widest px-3 py-1.5 rounded mb-4">24/7 EMERGENCY SERVICE</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Repair &amp; Service</h1>
          <p className="text-white/80 max-w-2xl text-lg">
            Rapid, professional roof repair and maintenance that keeps Des Moines businesses dry and open &mdash; any time, day or night.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((i) => (
            <div key={i.t} className="flex gap-5 p-7 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all">
              <div className="text-brand-red text-3xl font-extrabold">&#9889;</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{i.t}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{i.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Roof Emergency Right Now?</h2>
          <p className="text-white/80 mb-8">Our crews are on call around the clock. Call now and we&apos;ll dispatch a team fast.</p>
          <a href={`tel:${site.phoneRaw}`} className="inline-block bg-brand-red text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-red-700 transition-colors">
            Call {site.phoneDisplay}
          </a>
        </div>
      </section>

      <CTA />
    </>
  );
}
