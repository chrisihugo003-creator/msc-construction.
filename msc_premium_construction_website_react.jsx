export default function MSCWebsite() {
  const services = [
    {
      title: "General Construction",
      desc: "Quality residential and commercial construction with durable workmanship.",
      image: "/mnt/data/WhatsApp Image 2026-05-17 at 7.58.04 PM(1).jpeg",
    },
    {
      title: "Contracting",
      desc: "Reliable contracting services for apartments, offices, and homes.",
      image: "/mnt/data/WhatsApp Image 2026-05-17 at 7.58.02 PM(1).jpeg",
    },
    {
      title: "Renovations",
      desc: "Modern renovation and remodeling that transforms spaces beautifully.",
      image: "/mnt/data/WhatsApp Image (1).jpeg",
    },
    {
      title: "Architectural Design",
      desc: "Creative and functional architectural designs tailored to your vision.",
      image: "/mnt/data/WhatsApp Image 2026-05-19 at 12.28.32 AM(1).jpeg",
    },
    {
      title: "Project Management",
      desc: "Efficient planning, supervision, and delivery from start to finish.",
      image: "/mnt/data/WhatsApp Image 2026-05-17 at 7.58.04 PM(1).jpeg",
    },
    {
      title: "Finishing Works",
      desc: "Premium finishing, painting, tiling, ceilings, gypsum, and more.",
      image: "/mnt/data/WhatsApp Image 2026-05-19 at 12.28.31 AM(1).jpeg",
    },
  ];

  const gallery = [
    "/mnt/data/WhatsApp Image (1).jpeg",
    "/mnt/data/WhatsApp Image 2026-05-17 at 7.58.02 PM(1).jpeg",
    "/mnt/data/WhatsApp Image 2026-05-17 at 7.58.04 PM(1).jpeg",
    "/mnt/data/WhatsApp Image 2026-05-19 at 12.28.31 AM(1).jpeg",
    "/mnt/data/WhatsApp Image 2026-05-19 at 12.28.32 AM(1).jpeg",
    "/mnt/data/WhatsApp Image 2026-05-19 at 12.28.34 AM(1).jpeg",
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* TOP HEADER */}
      <div className="border-b border-yellow-500/30 bg-black sticky top-0 z-50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-gray-300 flex items-center justify-center shadow-2xl">
              <span className="text-black text-4xl font-black">MSC</span>
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-black text-yellow-500 leading-none">
                Muchai Signature
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-200 leading-none mt-1">
                Construction
              </h2>
              <p className="uppercase tracking-[3px] text-xs text-gray-400 mt-2">
                Where Quality Meets Signature Style
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 items-center text-sm">
            <div className="text-gray-300">
              📞 <span className="text-yellow-500 font-semibold">0792620100</span>
            </div>

            <div className="text-gray-300 text-center md:text-left">
              ✉️ muchaisignatureconstruction@gmail.com
            </div>

            <a
              href="https://wa.me/254792620100"
              className="border border-yellow-500 hover:bg-yellow-500 hover:text-black transition px-6 py-3 rounded-xl font-bold"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="border-t border-yellow-500/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-8 text-sm font-semibold text-gray-300 uppercase tracking-wide">
            <a href="#home" className="hover:text-yellow-500 transition">Home</a>
            <a href="#about" className="hover:text-yellow-500 transition">About</a>
            <a href="#services" className="hover:text-yellow-500 transition">Services</a>
            <a href="#projects" className="hover:text-yellow-500 transition">Projects</a>
            <a href="#contact" className="hover:text-yellow-500 transition">Contact</a>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative overflow-hidden min-h-[95vh] flex items-center"
      >
        <div className="absolute inset-0">
          <img
            src="/mnt/data/WhatsApp Image 2026-05-19 at 12.28.34 AM(1).jpeg"
            className="w-full h-full object-cover opacity-50"
            alt="Building"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center py-24">
          <div>
            <p className="text-yellow-500 uppercase tracking-[5px] font-semibold mb-5">
              Premium Construction Company
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-none mb-5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-gray-200 bg-clip-text text-transparent">
              MSC
            </h1>

            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
              Muchai Signature Construction
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl">
              We deliver exceptional construction, architectural design,
              renovations, project management, and finishing works with modern
              craftsmanship, professionalism, and attention to detail.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="tel:0792620100"
                className="bg-yellow-500 hover:bg-yellow-400 transition text-black font-black px-8 py-4 rounded-xl text-center shadow-2xl"
              >
                Call 0792620100
              </a>

              <a
                href="https://wa.me/254792620100"
                className="border border-yellow-500 hover:bg-yellow-500 hover:text-black transition px-8 py-4 rounded-xl font-bold text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-[40px] border border-yellow-500/30 shadow-2xl">
              <img
                src="/mnt/data/WhatsApp Image 2026-05-19 at 12.28.33 AM.jpeg"
                alt="Construction"
                className="w-full h-[700px] object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-10 bg-zinc-950 border-y border-yellow-500/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            ["✔ Quality Guaranteed", "Premium materials & expert workmanship"],
            ["👷 Experienced Team", "Skilled professionals you can trust"],
            ["🤝 Client Focused", "Your vision is our commitment"],
          ].map((item, i) => (
            <div
              key={i}
              className="bg-black border border-yellow-500/20 rounded-3xl p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-yellow-500 mb-3">
                {item[0]}
              </h3>
              <p className="text-gray-300">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-yellow-500 uppercase tracking-[4px] font-semibold mb-4">
              Our Services
            </p>

            <h2 className="text-5xl font-black">
              Complete Construction Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-zinc-950 border border-yellow-500/10 rounded-3xl overflow-hidden shadow-2xl hover:border-yellow-500 hover:-translate-y-2 transition duration-500"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-60 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-yellow-500 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT GALLERY */}
      <section
        id="projects"
        className="py-24 bg-zinc-950 border-t border-yellow-500/10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-yellow-500 uppercase tracking-[4px] font-semibold mb-4">
              Recent Projects
            </p>

            <h2 className="text-5xl font-black mb-6">
              Signature Work Gallery
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              A showcase of premium residential and commercial construction,
              finishing, and renovation projects completed by Muchai Signature
              Construction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl border border-yellow-500/10 hover:border-yellow-500 shadow-2xl group"
              >
                <img
                  src={image}
                  alt="Project"
                  className="h-[350px] w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 bg-black border-t border-yellow-500/10"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-yellow-500 uppercase tracking-[4px] font-semibold mb-4">
              About Us
            </p>

            <h2 className="text-5xl font-black mb-8 leading-tight">
              Building Modern Spaces With Signature Style
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              Muchai Signature Construction is committed to delivering modern,
              elegant, and durable construction projects across Kenya. Our
              mission is to combine quality workmanship, innovative design, and
              premium finishing to create outstanding spaces.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-zinc-950 border border-yellow-500/10 rounded-3xl p-8 text-center">
                <h3 className="text-5xl font-black text-yellow-500 mb-2">
                  100+
                </h3>
                <p className="text-gray-300">Projects Completed</p>
              </div>

              <div className="bg-zinc-950 border border-yellow-500/10 rounded-3xl p-8 text-center">
                <h3 className="text-5xl font-black text-yellow-500 mb-2">
                  100%
                </h3>
                <p className="text-gray-300">Client Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[40px] shadow-2xl border border-yellow-500/20">
            <img
              src="/mnt/data/WhatsApp Image 2026-05-19 at 12.28.32 AM(1).jpeg"
              alt="Construction"
              className="w-full h-[650px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 bg-zinc-950 border-t border-yellow-500/10"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-yellow-500 uppercase tracking-[4px] font-semibold mb-4">
            Contact Us
          </p>

          <h2 className="text-5xl font-black mb-6">
            Let’s Build Something Great Together
          </h2>

          <p className="text-gray-300 text-lg mb-10 max-w-3xl mx-auto">
            Call or WhatsApp us today for consultations, quotations, project
            discussions, and premium construction services.
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center mb-12">
            <a
              href="tel:0792620100"
              className="bg-yellow-500 hover:bg-yellow-400 transition text-black px-10 py-5 rounded-2xl font-black text-lg"
            >
              📞 0792620100
            </a>

            <a
              href="https://wa.me/254792620100"
              className="border border-yellow-500 hover:bg-yellow-500 hover:text-black transition px-10 py-5 rounded-2xl font-black text-lg"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="space-y-5 text-lg text-gray-300">
            <p>
              ✉️ muchaisignatureconstruction@gmail.com
            </p>

            <p>
              📍 Nairobi, Kenya
            </p>
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/254792620100"
        className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-400 transition text-black px-7 py-4 rounded-full font-black shadow-2xl z-50"
      >
        WhatsApp
      </a>

      {/* FOOTER */}
      <footer className="bg-black border-t border-yellow-500/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-center md:text-left">
            © 2026 Muchai Signature Construction. All Rights Reserved.
          </p>

          <p className="text-yellow-500 font-semibold text-center md:text-right">
            Built With Quality. Delivered With Pride.
          </p>
        </div>
      </footer>
    </div>
  );
}
