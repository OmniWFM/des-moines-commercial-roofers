import type { Metadata } from "next";
import Image from "next/image";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Des Moines Commercial Roofing. A relationship-first commercial roofing contractor serving Des Moines, Iowa with decades of experience."
};

const values = [
  { t: "Safety First", d: "An industry-leading safety record protects our crews, your team and your property." },
  { t: "Craftsmanship", d: "Certified installers and rigorous quality control on every project, large or small." },
  { t: "Relationships", d: "We earn trust through honesty, clear communication and showing up when it matters." }
];

export default function About() {
  return (
    <>
      <section className="pt-40 pb-16 bg-brand-dark text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">About Us</h1>
        <p className="text-white/80 max-w-2xl mx-auto px-4 text-lg">{site.tagline}</p>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
          <Image src={site.images.crew} alt="Our roofing crew" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold mb-5">Built On Trust &amp; Craftsmanship</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            For decades we&apos;ve specialized in commercial roofing, guided by a culture of care for our employees and customers. From complex new construction to fast emergency repairs, no job is outside our wheelhouse.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We bring experience, precision and a commitment to delivering the best solution tailored to your building &mdash; right here in Des Moines, Iowa.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.t} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3 text-brand-red">{v.t}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
