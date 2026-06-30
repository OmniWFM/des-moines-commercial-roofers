import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

const services = [
  {
    title: "Commercial Roofing",
    desc: "TPO, EPDM, PVC and metal roof systems installed by certified crews built for Iowa weather.",
    img: site.images.install,
    href: "/commercial-roofing"
  },
  {
    title: "Repair & 24/7 Service",
    desc: "Leak detection, storm damage repair and rapid emergency response that keeps your business open.",
    img: site.images.repair,
    href: "/repair-service"
  },
  {
    title: "Roof Replacement",
    desc: "Full tear-off and re-roof with warranty-backed materials and minimal disruption to operations.",
    img: site.images.building,
    href: "/commercial-roofing"
  }
];

const stats = [
  { value: "40+", label: "Years of Roofing Experience" },
  { value: "1,200+", label: "Commercial Roofs Completed" },
  { value: "0.71", label: "Safety Rating (EMR)" },
  { value: "24/7", label: "Emergency Service" }
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[88vh] min-h-[560px] flex items-center">
        <Image
          src={site.hero}
          alt="Commercial roofing crew installing a new flat roof in Des Moines"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl fade-up">
            <span className="inline-block bg-brand-red text-white text-xs font-bold tracking-widest px-3 py-1.5 rounded mb-5">
              DES MOINES, IOWA
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Relentless In Our Pursuit To Build The <span className="gradient-text">Best Tomorrow</span>.
            </h1>
            <p className="text-lg text-white/85 mb-8">
              Commercial roofing installation, repair and 24/7 service for businesses across the Des Moines metro. Precision, professionalism and unmatched expertise on every roof.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${site.phoneRaw}`}
                className="bg-brand-red text-white px-8 py-3.5 rounded-md font-bold hover:bg-red-700 transition-colors text-center"
              >
                Call {site.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="glass border border-white/30 text-white px-8 py-3.5 rounded-md font-bold hover:bg-white hover:text-brand-dark transition-colors text-center"
              >
                Free Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-dark py-14">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label} className="fade-up">
              <div className="text-4xl md:text-5xl font-extrabold text-brand-red mb-2">{s.value}</div>
              <div className="text-sm text-white/70 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Building Envelope <span className="text-brand-red">Solutions</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We&apos;re a commercial-focused roofing contractor serving Des Moines and the surrounding metro. From complex new construction to fast emergency repairs, no job is outside our wheelhouse. We don&apos;t just build roofs &mdash; we build lasting relationships through trust, craftsmanship and exceptional service.
        </p>
      </section>

      {/* Services */}
      <section className="pb-20 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <div className="relative h-56">
                <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
