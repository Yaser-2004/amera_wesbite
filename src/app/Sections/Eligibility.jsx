import { IndianRupee, ShieldCheck, FileText, BarChart, ClipboardList, Building, Presentation } from "lucide-react";
import Image from "next/image";

const eligibilityCriteria = [
  { icon: IndianRupee, sub_heading: "Minimum Ticket Size:", text: "Debt funding starts at ₹20 crore or above." },
  { icon: ShieldCheck, sub_heading: "Collateral Security:", text: "Required for debt funding applications." },
  { icon: FileText, sub_heading: "Financial Records:", text: "Submit audited balance sheets for the last two years." },
  { icon: BarChart, sub_heading: "Cash Flow Statement:", text: "Essential for assessing financial health." },
  { icon: ClipboardList, sub_heading: "Project Details:", text: "Provide a comprehensive overview of the project requiring funding." },
  { icon: Building, sub_heading: "Company Profile:", text: "Submit a complete company background and credentials." },
  { icon: Presentation, sub_heading: "Pitch Deck:", text: "A well-structured presentation showcasing your business vision and growth potential." },
];

export default function EligibilitySection() {
  return (
    <section className="container p-6 mx-auto flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-center mb-6 text-mybrown">Eligibility Criteria & Requirements</h2>
        <ul className="space-y-4">
          {eligibilityCriteria.map(({ icon: Icon, sub_heading, text }, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-700">
              <Icon className="w-6 h-6 text-mybrown" />
              <span className="font-medium">{sub_heading} <span className="text-gray-600">{text}</span></span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 flex justify-center">
        <Image 
          src={"/Assets/Checklist3.png"} 
          width={1000} 
          height={500} 
          alt="eligibility" 
          className="object-contain max-w-full h-auto" 
        />
      </div>
    </section>
  );
}
