import type { Metadata } from "next";
import Image from "next/image";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Recent commercial roofing projects across Des Moines, Iowa. Warehouses, retail, offices and industrial roof installations and repairs."
};

const projects = [
  { img: site.images.building, title: "Distribution Center Re-Roof", tag: "TPO Membrane" },
  { img: site.images.install, title: "Manufacturing Facility", tag: "New Construction" },
  { img: site.images.crew, title: "Retail Center Restoration", tag: "Roof Coating" },
  { img: site.images.repair, title: "Office Park Storm Repair", tag: "Emergency Service" }
];

export default function Portfolio() {
  return (
    <>
      <section className="pt-40 pb-16 bg-brand-dark text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Portfolio</h1>
        <p className="text-white/80 max-w-2xl mx-auto px-4 text-lg">
          A look at commercial roofs we&apos;ve installed, restored and repaired across the Des Moines metro.
        </p>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div key={p.title} className="group relative rounded-xl overflow-hidden shadow-lg h-72">
              <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <span className="text-brand-red text-xs font-bold tracking-widest">{p.tag}</span>
                <h3 className="text-white text-xl font-bold">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
