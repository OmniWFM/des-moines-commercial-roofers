import { site } from "@/lib/site";

export default function CTA() {
  return (
    <section className="bg-brand-red text-white py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Get Your Free Storm Report &amp; Inspection
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">
          Join the businesses across Des Moines who trust us to protect their buildings. New build or existing roof, our team is ready.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${site.phoneRaw}`}
            className="bg-white text-brand-red px-8 py-3.5 rounded-md font-bold hover:bg-gray-100 transition-colors"
          >
            Call {site.phoneDisplay}
          </a>
          <a
            href="/contact"
            className="border-2 border-white text-white px-8 py-3.5 rounded-md font-bold hover:bg-white hover:text-brand-red transition-colors"
          >
            Schedule Free Inspection
          </a>
        </div>
      </div>
    </section>
  );
}
