export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose a bundle",
      description: "Browse wholesale collections designed for resellers."
    },
    {
      number: "02",
      title: "Place your order",
      description: "Order online or continue through WhatsApp."
    },
    {
      number: "03",
      title: "Receive & resell",
      description: "Get your fashion bundles delivered and start selling."
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black mb-6">
            How It Works
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            Start your fashion business or restock your boutique in three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <span className="text-8xl font-black text-gray-200 tracking-tighter mb-4 leading-none">
                {step.number}
              </span>
              <h3 className="text-lg font-bold uppercase tracking-widest text-black mb-4">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm max-w-[250px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
