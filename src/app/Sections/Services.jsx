import * as motion from "motion/react-client"



const Services = () => {
  return (
    <motion.div initial={{translateY:100}} whileInView={{translateY:0}} viewport={{amount:"some",once:true}} transition={{duration:1}}>
    <section className="py-20 max-w-[1300px] mx-auto">
          <h1 className="text-6xl font-bold tracking-tighter text-center mb-12 text-[#DBC2FF] ">Industries We Serve</h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
            {["Healthcare", "Hospitality", "Energy", "Agriculture", "Real Estate", "Manufacturing"].map((industry) => (
              <div
                key={industry}
                className="rounded-lg border border-primary/20 bg-purple-300 p-10 shadow-sm hover:shadow-md hover:shadow-gray-400 hover:scale-105 transition-all"
              >
                <h3 className="font-semibold mb-4 text-2xl">{industry}</h3>
                <p className="text-sm text-muted">
                  Tailored financial solutions for {industry.toLowerCase()} sector projects and expansion.
                </p>
              </div>
            ))}
          </div>
          
        </section>
        </motion.div>
  )
}

export default Services