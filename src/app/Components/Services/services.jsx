
const Services = () => {
  return (
    <section className="py-20 container mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-mybrown">Industries We Serve</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
            {["Healthcare", "Hospitality", "Energy", "Agriculture", "Real Estate", "Manufacturing"].map((industry) => (
              <div
                key={industry}
                className="rounded-lg border border-primary/20 bg-background p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold mb-2">{industry}</h3>
                <p className="text-sm text-muted">
                  Tailored financial solutions for {industry.toLowerCase()} sector projects and expansion.
                </p>
              </div>
            ))}
          </div>
          
        </section>
  )
}

export default Services