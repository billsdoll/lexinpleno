
import Header from "@/components/landing-page/header"
import Footer from "@/components/landing-page/footer"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

const practiceAreaData = {
  "criminal-law": {
    name: "Criminal Law",
    description: "Expert defense and prosecution in criminal matters",
    content: `Dr. Umesh Manshore specializes in providing comprehensive criminal defense services. With decades of experience in the criminal justice system, we understand the complexities of criminal law and the severe consequences a conviction can have on your life.

Our criminal law services include:
- Felony and misdemeanor defense
- DUI/DWI representation
- Drug-related charges
- Violent crime defense
- White-collar crime
- Appeals and post-conviction relief
- Bail and bond hearings`,
    features: [
      "Experienced criminal defense attorneys",
      "Proven track record in difficult cases",
      "24/7 availability for emergencies",
      "Aggressive courtroom advocacy",
      "Comprehensive case investigation",
      "Expert witness coordination",
    ],
  },
  "business-law": {
    name: "Business Law",
    description: "Comprehensive legal services for business operations",
    content: `Our business law practice provides comprehensive legal services to businesses of all sizes. Whether you're starting a new venture or managing an established corporation, we provide the legal guidance you need.

Our business law services include:
- Business formation and structure planning
- Contract drafting and negotiation
- Mergers and acquisitions
- Corporate governance
- Intellectual property protection
- Employment law compliance
- Commercial disputes`,
    features: [
      "Business entity formation",
      "Contract negotiation and drafting",
      "M&A transactions",
      "Corporate compliance",
      "IP protection",
      "Commercial litigation",
    ],
  },
  "family-law": {
    name: "Family Law",
    description: "Compassionate representation in family matters",
    content: `Family law matters are deeply personal and emotionally challenging. Our compassionate attorneys provide strong legal representation while treating your family with respect and dignity.

Our family law services include:
- Divorce and separation
- Child custody and visitation
- Child support and alimony
- Property division
- Prenuptial and postnuptial agreements
- Adoption services
- Domestic violence protection`,
    features: [
      "Compassionate client service",
      "Skilled negotiation",
      "Custody expertise",
      "Child support calculations",
      "Property division strategies",
      "Mediation services",
    ],
  },
  "real-estate-law": {
    name: "Real Estate Law",
    description: "Property transactions and real estate disputes",
    content: `Real estate transactions and disputes require careful attention to detail and thorough legal knowledge. Our experienced real estate attorneys guide clients through every aspect of property law.

Our real estate law services include:
- Residential and commercial transactions
- Property disputes and litigation
- Title issues and clearance
- Zoning and land use
- Lease agreements
- Foreclosure defense
- Development and construction law`,
    features: [
      "Property transaction expertise",
      "Title and survey review",
      "Dispute resolution",
      "Zoning compliance",
      "Lease negotiations",
      "Foreclosure defense",
    ],
  },
  "personal-injury": {
    name: "Personal Injury",
    description: "Aggressive advocacy for injury victims",
    content: `If you've suffered a personal injury due to someone else's negligence, you deserve compensation. Our aggressive personal injury attorneys fight for the maximum recovery possible.

Our personal injury services include:
- Motor vehicle accidents
- Slip and fall injuries
- Product liability claims
- Workplace injuries
- Medical malpractice
- Wrongful death claims
- Insurance claim disputes`,
    features: [
      "No recovery, no fee",
      "Expert medical consultation",
      "Comprehensive investigations",
      "Aggressive negotiation",
      "Trial-ready litigation",
      "Maximum compensation focus",
    ],
  },
  "judicial-law": {
    name: "Judicial Law",
    description: "Constitutional and appellate legal services",
    content: `Our judicial law practice focuses on constitutional matters, appellate law, and complex litigation. We provide strategic legal counsel in cases that go beyond the trial court level.

Our judicial law services include:
- Appellate representation
- Constitutional law
- Federal litigation
- Judicial review proceedings
- Complex statutory interpretation
- Precedent-setting cases
- Constitutional rights protection`,
    features: [
      "Appellate expertise",
      "Constitutional knowledge",
      "Federal court experience",
      "Strategic litigation planning",
      "Precedent research",
      "Complex case management",
    ],
  },
}

export default async function PracticeAreaDetail({ params }: { params: Promise<{ slug: string }> }) {
  // The params prop is a promise, so we need to await it to get the actual value.
  const resolvedParams = await params;

  // console.log("Resolved params:", resolvedParams);
  const slug = resolvedParams.slug;
  const data = practiceAreaData[slug as keyof typeof practiceAreaData];

  if (!data) {
    return (
      <main className="min-h-screen inset-0 bg-cover bg-center bg-fixed" style={{
            backgroundImage: "url('/blind_law_lady.jpg')",
          }}>
        <Header />
        <section className="pt-40 backdrop-blur-md pb-20 px-4 text-center">
          <h1 className="text-4xl font-bold text-white">Practice area not found</h1>
          <Link href="/services" className="text-amber-500 bg-black rounded-lg p-2 hover:text-amber-400 mt-4 inline-block">
            Back to Services
          </Link>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen inset-0 bg-cover bg-center bg-fixed" style={{
            backgroundImage: "url('/blind_law_lady.jpg')",
          }}>
      <Header />

      <section className="pt-40 backdrop-blur-md pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/services" className="text-amber-500  bg-black rounded-lg p-2 hover:text-amber-400 mb-4 inline-block">
            ← Back to Services
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{data.name}</h1>
          <p className="text-xl text-slate-300 mb-12">{data.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {data.features.map((feature, index) => (
              <div key={index} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <CheckCircle className="w-6 h-6 text-amber-500 mb-3" />
                <p className="text-white font-semibold">{feature}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">About This Practice Area</h2>
            <div className="text-slate-300 whitespace-pre-line leading-relaxed">{data.content}</div>
          </div>

          {/* <div className="bg-slate-900/90 border border-amber-500/20 rounded-2xl p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Need Legal Help?</h3>
            <p className="text-slate-300 mb-6">Contact us for a free consultation</p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all"
            >
              Get Free Consultation
            </Link>
          </div> */}
        </div>
      </section>

      <Footer />
    </main>
  )
}
