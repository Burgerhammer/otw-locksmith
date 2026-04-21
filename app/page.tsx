import { LogoFull, LogoIcon } from "./components/Logo";
import { ContactForm } from "./components/ContactForm";

const services = [
  {
    icon: "🔓",
    title: "Emergency Lockouts",
    description:
      "Locked out of your home, car, or business? We're on the way — fast response, 24/7 availability.",
  },
  {
    icon: "🔑",
    title: "Lock Rekeying",
    description:
      "New home or lost a key? We'll rekey your locks so only your new keys work — no full replacement needed.",
  },
  {
    icon: "🚗",
    title: "Automotive Locksmith",
    description:
      "Car key replacement, transponder programming, and ignition repair for all makes and models.",
  },
  {
    icon: "🏠",
    title: "Residential Services",
    description:
      "Lock installation, deadbolts, smart locks, and complete home security upgrades.",
  },
  {
    icon: "🏢",
    title: "Commercial Services",
    description:
      "High-security locks, master key systems, access control, and panic bar installation for businesses.",
  },
  {
    icon: "🔧",
    title: "Lock Repair",
    description:
      "Broken or damaged locks? We repair and restore all types — from standard to high-security.",
  },
];

const brands = [
  "Schlage",
  "Medeco",
  "Yale",
  "Mul-T-Lock",
  "Baldwin",
  "Kwikset",
];

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-otw-navy/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <LogoFull />
          <div className="hidden sm:flex items-center gap-6 text-sm text-gray-300">
            <a href="#services" className="hover:text-otw-orange transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-otw-orange transition-colors">
              Contact
            </a>
            <a
              href="tel:+15551234567"
              className="bg-otw-orange text-white px-4 py-2 rounded-lg font-semibold hover:bg-otw-orange-dark transition-colors"
            >
              Call Now
            </a>
          </div>
          <a
            href="tel:+15551234567"
            className="sm:hidden bg-otw-orange text-white px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Call Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-otw-navy pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-otw-navy via-otw-navy-light to-otw-navy opacity-90" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-otw-orange/20 text-otw-orange text-sm font-semibold px-3 py-1 rounded-full">
                Licensed & Insured
              </span>
              <span className="bg-white/10 text-gray-300 text-sm px-3 py-1 rounded-full">
                South Florida
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Locked Out?{" "}
              <span className="text-otw-orange">We&apos;re On The Way.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl">
              Fast, reliable locksmith services for your home, business, and
              vehicle. Available 24/7 with no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center gap-2 bg-otw-orange text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-otw-orange-dark transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition-colors"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
        {/* Decorative diagonal stripes — inspired by the vehicle wrap */}
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 -skew-x-12 translate-x-1/4">
            <div className="absolute inset-y-0 w-16 bg-otw-orange left-0" />
            <div className="absolute inset-y-0 w-8 bg-otw-orange left-24" />
            <div className="absolute inset-y-0 w-4 bg-otw-orange left-40" />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-otw-gray border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <span className="text-otw-orange font-bold">&#10003;</span> 24/7 Emergency Service
            </span>
            <span className="flex items-center gap-2">
              <span className="text-otw-orange font-bold">&#10003;</span> Licensed & Insured
            </span>
            <span className="flex items-center gap-2">
              <span className="text-otw-orange font-bold">&#10003;</span> No Hidden Fees
            </span>
            <span className="flex items-center gap-2">
              <span className="text-otw-orange font-bold">&#10003;</span> Mobile Service — We Come to You
            </span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-otw-navy mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From emergency lockouts to high-security installations, we handle
              it all with the brands you trust.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-otw-orange/30 transition-all"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-otw-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="bg-otw-navy py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-lg font-semibold text-gray-400 mb-8 tracking-wide uppercase">
            Trusted Brands We Work With
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {brands.map((brand) => (
              <span
                key={brand}
                className="text-white/70 text-xl sm:text-2xl font-bold tracking-wide"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why OTW */}
      <section className="py-20 sm:py-24 bg-otw-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-otw-navy mb-4">
              Why Choose OTW Locksmith?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                stat: "24/7",
                label: "Availability",
                desc: "Day or night, weekends and holidays — we're always on call.",
              },
              {
                stat: "Fast",
                label: "Response Time",
                desc: "We're mobile and local. When you call, we're on the way.",
              },
              {
                stat: "Fair",
                label: "Pricing",
                desc: "Upfront quotes with no surprise fees. What we quote is what you pay.",
              },
              {
                stat: "Pro",
                label: "Quality",
                desc: "Licensed, insured, and trained on the top brands in the industry.",
              },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl font-black text-otw-orange mb-1">
                  {item.stat}
                </div>
                <div className="text-lg font-bold text-otw-navy mb-2">
                  {item.label}
                </div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-otw-navy mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Need a locksmith? Fill out the form or give us a call for a free
                quote. We respond fast.
              </p>
              <div className="space-y-5">
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-4 text-lg text-otw-navy hover:text-otw-orange transition-colors"
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-otw-orange/10 text-otw-orange text-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <span className="font-semibold">(555) 123-4567</span>
                </a>
                <div className="flex items-center gap-4 text-lg text-otw-navy">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-otw-orange/10 text-otw-orange text-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <span>South Florida</span>
                </div>
                <div className="flex items-center gap-4 text-lg text-otw-navy">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-otw-orange/10 text-otw-orange text-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span>Available 24/7</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-otw-navy py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <LogoIcon className="w-8 h-10" />
              <div>
                <span className="text-lg font-black text-otw-orange">OTW</span>{" "}
                <span className="text-sm font-semibold text-gray-400">
                  Locksmith
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} OTW Locksmith. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
