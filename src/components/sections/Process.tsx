const steps = [
  {
    number: "1",
    title: "Free Consultation",
    description: "Call 07897 024466 or fill out our form. We'll discuss your project and provide a free, no-obligation quote.",
    borderColor: "border-orange-500",
  },
  {
    number: "2",
    title: "Surface Preparation",
    description: "We meticulously clean, degrease, and mask the area to ensure a perfect, long-lasting factory finish.",
    borderColor: "border-navy-900",
  },
  {
    number: "3",
    title: "Professional Spray",
    description: "We apply our specialist coatings using advanced spray technology, leaving your surfaces looking brand new.",
    borderColor: "border-navy-900",
  },
]

export const Process = () => {
  return (
    <section className="bg-grey-light py-8 md:py-12 overflow-hidden" id="process">
      <div className="container mx-auto px-4">
        <h2 className="font-header text-2xl md:text-3xl font-bold text-navy-900 text-center mb-10">Our 3-Step Transformation Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-200 -z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="bg-grey-light text-center relative z-10">
              <div className={`w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border-4 ${step.borderColor}`}>
                <span className="font-header text-4xl font-bold text-navy-900">{step.number}</span>
              </div>
              <h3 className="font-header text-xl font-bold text-navy-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 px-4" dangerouslySetInnerHTML={{ __html: step.description }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}





