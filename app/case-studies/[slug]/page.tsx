

import Header from "@/components/landing-page/header"
import Footer from "@/components/landing-page/footer"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

const caseStudiesData = {
  "case-1-criminal-defense": {
    title: "Successful Criminal Defense Verdict",
    category: "Criminal Law",
    result: "Not Guilty Verdict",
    year: "2023",
    challenge:
      "Our client faced serious felony charges that carried potential prison time. The prosecution built what appeared to be a strong case with multiple witnesses.",
    solution:
      "We conducted a thorough investigation, discovering critical inconsistencies in witness testimonies and challenging the reliability of the evidence. Our team prepared an aggressive courtroom defense strategy.",
    outcome:
      "The jury voted unanimously to acquit our client of all charges. This victory not only saved our client from prison but also preserved their reputation and freedom.",
    highlights: [
      "Complete acquittal on all counts",
      "Thorough investigation uncovered key evidence",
      "Effective witness cross-examination",
      "Jury convinced of client innocence",
    ],
  },
  "case-2-business-acquisition": {
    title: "Multi-Million Dollar Business Acquisition",
    category: "Business Law",
    result: "$5M+ Deal Completed",
    year: "2023",
    challenge:
      "Our client sought to acquire a competitor company. The negotiations were complex with multiple parties involved and significant valuation disputes.",
    solution:
      "We structured the deal carefully, negotiating favorable terms while conducting thorough due diligence. Our legal team identified and resolved potential liabilities.",
    outcome:
      "The acquisition completed successfully with favorable valuation and terms. Our client gained a strategic advantage in the market.",
    highlights: [
      "Successfully negotiated $5M+ acquisition",
      "Favorable deal structure for client",
      "Comprehensive due diligence completed",
      "All regulatory requirements satisfied",
    ],
  },
  "case-3-custody-rights": {
    title: "Custody Rights Restored",
    category: "Family Law",
    result: "Full Custody Awarded",
    year: "2022",
    challenge:
      "Our client faced a contested custody battle with the opposing parent attempting to limit access to their children.",
    solution:
      "We gathered substantial evidence of the client's parenting abilities and the children's best interests. Expert witnesses supported our position.",
    outcome:
      "The court awarded full custody to our client, recognizing their superior ability to provide for the children's welfare.",
    highlights: [
      "Full custody awarded to client",
      "Children's best interests established",
      "Strong evidence presentation",
      "Opposing claims thoroughly refuted",
    ],
  },
  "case-4-property-dispute": {
    title: "Property Title Dispute Resolution",
    category: "Real Estate Law",
    result: "Favorable Settlement",
    year: "2022",
    challenge:
      "A boundary dispute between our client and neighbors threatened the property value and created significant legal uncertainty.",
    solution:
      "We conducted a comprehensive title search, reviewed historical documents, and presented expert survey evidence to support our client's position.",
    outcome:
      "The dispute was resolved through negotiation with a settlement favorable to our client, clarifying the property boundaries.",
    highlights: [
      "Property boundaries clarified",
      "Favorable settlement achieved",
      "Title issues resolved",
      "Property value protected",
    ],
  },
  "case-5-injury-settlement": {
    title: "Personal Injury Settlement Victory",
    category: "Personal Injury",
    result: "$2M+ Settlement",
    year: "2022",
    challenge:
      "Our client suffered serious injuries from a defective product manufactured by a large corporation with strong legal resources.",
    solution:
      "We compiled medical evidence, expert testimony, and documentation of damages. Our aggressive negotiation strategy applied appropriate pressure.",
    outcome:
      "The corporation settled for over $2 million, providing substantial compensation for our client's injuries and lost earnings.",
    highlights: [
      "Settlement exceeded expectations",
      "Comprehensive damage documentation",
      "Expert medical evidence presented",
      "Corporate liability established",
    ],
  },
  "case-6-appellate-reversal": {
    title: "Appellate Reversal Success",
    category: "Judicial Law",
    result: "Case Reversed",
    year: "2021",
    challenge:
      "Our client was wrongly convicted at trial due to questionable jury instructions and evidentiary issues.",
    solution:
      "We filed a comprehensive appeal highlighting constitutional violations and procedural errors. We presented compelling oral arguments before the appellate panel.",
    outcome:
      "The appellate court reversed the conviction, finding that the trial court committed reversible error. The case was remanded for new trial.",
    highlights: [
      "Conviction successfully reversed",
      "Constitutional violations identified",
      "Procedural errors corrected",
      "Justice ultimately served",
    ],
  },
}

export default async function CaseStudyDetail({ params }: { params: { slug: string } }) {
    // The params prop is a promise, so we need to await it to get the actual value.
  const resolvedParams = await params;

  // console.log("Resolved params:", resolvedParams);
  const slug = resolvedParams.slug;
  const caseData = caseStudiesData[slug as keyof typeof caseStudiesData];
  // const caseData = caseStudiesData[params.slug as keyof typeof caseStudiesData]

  if (!caseData) {
    return (
      <main className="min-h-screen inset-0 bg-cover bg-center bg-fixed" style={{
            backgroundImage: "url('/blind_law_lady.jpg')",
          }}>
        <Header />
        <section className="pt-40 backdrop-blur-md pb-20 px-4 text-center">
          <h1 className="text-4xl font-bold text-white">Case study not found</h1>
          <Link href="/case-studies" className="text-amber-500 bg-black rounded-lg p-2 hover:text-amber-400 mt-4 inline-block">
            Back to Case Studies
          </Link>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen backdrop-blur-md inset-0 bg-cover bg-center bg-fixed" style={{
            backgroundImage: "url('/blind_law_lady.jpg')",
          }}>
      <Header />

      <section className="pt-40 pb-20 backdrop-blur-md px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/case-studies" className="text-amber-500 bg-black rounded-lg p-2 hover:text-amber-400 mb-4 inline-block">
            ← Back to Case Studies
          </Link>

          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <span className="text-sm text-amber-500 font-semibold">{caseData.category}</span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mt-2">{caseData.title}</h1>
            </div>
            <span className="text-sm bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full whitespace-nowrap">
              {caseData.result}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
              <p className="text-slate-400 text-sm mb-2">Year Resolved</p>
              <p className="text-2xl font-bold text-white">{caseData.year}</p>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
              <p className="text-slate-400 text-sm mb-2">Category</p>
              <p className="text-xl font-bold text-amber-500">{caseData.category}</p>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
              <p className="text-slate-400 text-sm mb-2">Outcome</p>
              <p className="text-xl font-bold text-green-400">{caseData.result}</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
              <p className="text-slate-300 leading-relaxed">{caseData.challenge}</p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Approach</h2>
              <p className="text-slate-300 leading-relaxed">{caseData.solution}</p>
            </div>

            <div className="bg-slate-900/90 border border-amber-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">The Outcome</h2>
              <p className="text-slate-300 leading-relaxed mb-6">{caseData.outcome}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseData.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                    <p className="text-slate-300">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="mt-16 bg-slate-900/50 border border-slate-800 rounded-2xl p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Need Similar Results?</h3>
            <p className="text-slate-300 mb-6">We're ready to fight for your case</p>
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
