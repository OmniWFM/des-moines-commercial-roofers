import type { Metadata } from "next";
import Image from "next/image";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial Roofing",
  description:
    "Commercial roof installation in Des Moines, Iowa. TPO, EPDM, PVC and metal roofing systems for warehouses, retail, offices and industrial buildings."
};

const systems = [
  { name: "TPO Membrane", desc: "Energy-efficient single-ply roofing ideal for flat commercial roofs." },
  { name: "EPDM Rubber", desc: "Durable, weather-resistant membrane proven for decades in Iowa climates." },
  { name: "PVC Roofing", desc: "Chemical and fire-resistant systems for restaurants and manufacturing." },
  { name: "Metal Roofing", desc: "Long-life standing seam and metal panel systems with superior durability." },
  { name: "Modified Bitumen", desc: "Multi-layer protection built for high-traffic rooftops." },
  { name: "Roof Coatings", desc: "Restore and extend the life of an existing roof at a fraction of replacement cost." }
];

export default function CommercialRoofing() {
  return (
    <>
      <section className="relative pt-40 pb-20 bg-brand-dark">
        <Image src={site.images.install} alt="Commercial roof installation" fill className="object-cover opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Commercial Roofing</h1>
          <p className="text-white/80 max-w-2xl text-lg">
            Certified installation of every major commercial roof system, engineered for Des Moines weather and backed by manufacturer warranties.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systems.map((s) => (
            <div key={s.name} className="border border-gray-200 rounded-xl p-7 hover:border-brand-red hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-2 text-brand-dark">{s.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
            <Image src={site.images.building} alt="Completed commercial roof" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold mb-5">Built For Iowa Business</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              From warehouses and distribution centers to retail, offices and manufacturing facilities, we deliver roof systems designed for performance and longevity.
            </p>
            <ul className="space-y-3">
              {["Free roof evaluation & moisture survey", "Detailed scope and transparent pricing", "Minimal disruption to your operations", "Manufacturer-backed warranties"].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-brand-red font-bold">&#10003;</span>
                  <span className="text-gray-700">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
