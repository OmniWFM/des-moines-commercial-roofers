import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Des Moines Commercial Roofing for a free inspection or storm report. Call 833-JRCO-USA or request service online."
};

export default function Contact() {
  return (
    <>
      <section className="pt-40 pb-16 bg-brand-dark text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
        <p className="text-white/80 max-w-2xl mx-auto px-4 text-lg">
          Request a free inspection or storm report. We respond fast.
        </p>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-extrabold mb-6">Get In Touch</h2>
          <div className="space-y-5">
            <div>
              <div className="text-sm text-gray-500 font-semibold">Phone</div>
              <a href={`tel:${site.phoneRaw}`} className="text-lg font-bold text-brand-red">{site.phoneDisplay}</a>
            </div>
            <div>
              <div className="text-sm text-gray-500 font-semibold">Email</div>
              <a href={`mailto:${site.email}`} className="text-lg font-bold text-brand-dark">{site.email}</a>
            </div>
            <div>
              <div className="text-sm text-gray-500 font-semibold">Service Area</div>
              <div className="text-lg font-bold text-brand-dark">Des Moines, Iowa &amp; Metro</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 font-semibold">Hours</div>
              <div className="text-lg font-bold text-brand-dark">24/7 Emergency Service</div>
            </div>
          </div>
        </div>

        <form className="bg-gray-50 rounded-xl p-8 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="border border-gray-300 rounded-md px-4 py-3 w-full" placeholder="Name" />
            <input className="border border-gray-300 rounded-md px-4 py-3 w-full" placeholder="Company" />
          </div>
          <input className="border border-gray-300 rounded-md px-4 py-3 w-full" placeholder="Phone" />
          <input className="border border-gray-300 rounded-md px-4 py-3 w-full" placeholder="Email" />
          <textarea className="border border-gray-300 rounded-md px-4 py-3 w-full h-32" placeholder="How can we help with your roof?" />
          <button type="submit" className="w-full bg-brand-red text-white font-bold py-3.5 rounded-md hover:bg-red-700 transition-colors">
            Request Free Inspection
          </button>
        </form>
      </section>
    </>
  );
}
