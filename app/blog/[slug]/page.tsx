import Header from "@/components/landing-page/header"
import Footer from "@/components/landing-page/footer"
import Link from "next/link"
import { Calendar, ArrowLeft } from "lucide-react"

const blogData = {
  "criminal-rights": {
    title: "Understanding Your Rights in Criminal Cases",
    date: "Dec 15, 2024",
    category: "Criminal Law",
    content: `When facing criminal charges, understanding your legal rights is critical. Your rights protect you throughout the criminal justice process and can significantly impact the outcome of your case.

## Your Constitutional Rights

The Fifth Amendment provides you with the right to remain silent. You are not obligated to answer police questions or provide statements that could incriminate you. This protection is fundamental to criminal defense.

The Sixth Amendment guarantees you the right to legal representation. If you cannot afford an attorney, one will be appointed to you. This right applies from the moment you are arrested through trial.

## The Right to Bail

You have the right to reasonable bail unless you're charged with capital offenses. Bail ensures you can remain free while your case proceeds. An experienced attorney can help negotiate bail amounts.

## Search and Seizure Rights

The Fourth Amendment protects you from unreasonable searches and seizures. Police must generally have a warrant based on probable cause before searching your home, vehicle, or person.

## Right to a Fair Trial

You have the right to a public trial, to confront witnesses against you, and to present your own witnesses. These protections ensure a fair judicial process.

## Professional Legal Help

If you're facing criminal charges, immediately contact a criminal defense attorney to protect your rights and discuss your options.`,
  },
  "contract-negotiation": {
    title: "Essential Steps in Business Contract Negotiation",
    date: "Dec 10, 2024",
    category: "Business Law",
    content: `Successful business contracts are the foundation of strong business relationships. Proper negotiation protects your interests and establishes clear expectations.

## Preparation is Key

Before entering negotiations, clearly define your objectives, priorities, and the terms you're willing to accept. Research the other party and industry standards to strengthen your negotiating position.

## Understand the Terms

Every provision in a contract matters. Ensure you understand payment terms, delivery schedules, liability limitations, and dispute resolution procedures.

## Key Contract Elements

- Consideration: What each party is providing
- Scope of work: Clear definition of deliverables
- Timeline: When obligations must be fulfilled
- Payment terms: When and how payment occurs
- Dispute resolution: How disagreements will be handled
- Termination clauses: How the contract can be ended

## Negotiation Strategy

Approach negotiations cooperatively while remaining firm on critical issues. Be prepared to compromise on less important points while protecting your essential interests.

## Legal Review

Always have a business attorney review contracts before signing. They can identify potential issues and ensure your interests are protected.`,
  },
  "child-support-guide": {
    title: "Child Support: What You Need to Know",
    date: "Dec 5, 2024",
    category: "Family Law",
    content: `Child support ensures that both parents contribute financially to their children's upbringing. Understanding the legal framework helps protect everyone's interests.

## How Child Support is Calculated

Most jurisdictions use an income-based formula considering:
- Both parents' income
- Number of children
- Custody arrangement
- Healthcare and education costs
- Special needs of children

## Parent's Obligations

Both parents have a legal obligation to support their children. This obligation typically continues until the child reaches age 18, or 19-20 if still in high school.

## Modification of Support

Child support orders can be modified if circumstances significantly change, such as job loss, income increase, or changes in custody arrangements.

## Enforcement

Courts have multiple tools to enforce child support orders, including wage garnishment, tax refund interception, and contempt of court proceedings.

## Your Rights

You have the right to fair calculation of support, notice of any modification requests, and court review of orders if circumstances change significantly.

## Seeking Legal Assistance

Child support matters involve complex calculations and significant financial implications. Professional legal guidance ensures fair outcomes for all parties.`,
  },
  "title-issues": {
    title: "Real Estate: Common Title Issues and Solutions",
    date: "Nov 28, 2024",
    category: "Real Estate Law",
    content: `Property title issues can significantly complicate real estate transactions. Understanding common problems helps you protect your investment.

## What is a Property Title?

A property title is the legal document proving ownership. Clear title means the property is free from claims, liens, or disputes.

## Common Title Issues

**Liens**: Unpaid debts (taxes, mortgages) create liens against the property. These must be resolved before purchase.

**Boundary Disputes**: Disagreements about property lines between neighbors. Survey evidence helps resolve these issues.

**Previous Liens**: Claims from previous owners or contractors working on the property that weren't properly released.

**Missing Documents**: Lost deeds or improperly recorded documents creating ownership uncertainty.

## Title Insurance

Title insurance protects you against financial loss from undiscovered title defects. It's a one-time premium that covers most issues.

## Resolution Steps

- Conduct a thorough title search
- Review the abstract and survey
- Obtain title insurance
- Resolve identified issues before closing
- Work with an attorney to clear title

## Protecting Your Investment

Professional real estate legal services ensure clean title transfer and protect your property rights for years to come.`,
  },
  "injury-claims": {
    title: "Personal Injury Claims: Maximizing Your Recovery",
    date: "Nov 20, 2024",
    category: "Personal Injury",
    content: `After suffering a personal injury, pursuing a claim for damages requires careful documentation and strategic action.

## Immediate Steps

Document everything from the moment of injury:
- Photograph the accident scene and your injuries
- Obtain witness information
- Preserve physical evidence
- Seek medical treatment immediately
- Keep all medical records and receipts

## Types of Damages

**Economic Damages**: Medical bills, lost wages, rehabilitation costs, property damage

**Non-Economic Damages**: Pain and suffering, emotional distress, loss of enjoyment of life

**Punitive Damages**: In cases of gross negligence or intentional conduct

## Building Your Case

Gather medical evidence demonstrating the extent of your injuries. Expert testimony strengthens your claim. Document how the injury affects your daily life and earning capacity.

## Settlement Negotiations

Insurance companies often undervalue claims. An experienced attorney ensures fair compensation through aggressive negotiation.

## When to Sue

If fair settlement negotiations fail, proceeding to trial may be necessary. Most cases settle, but being trial-ready strengthens your position.

## Professional Representation

Personal injury claims involve complex damage calculations and negotiation. Professional legal representation maximizes your recovery.`,
  },
  "appellate-process": {
    title: "Appellate Law: When to Appeal Your Case",
    date: "Nov 15, 2024",
    category: "Judicial Law",
    content: `If you disagree with a court decision, appellate law provides a path to challenge that ruling.

## Understanding the Appellate Process

Appeals review whether the trial court properly applied the law, not whether the judge believed the evidence. Appellate courts don't retry cases but focus on legal errors.

## Grounds for Appeal

Valid appeal grounds include:
- Improper jury instructions
- Admission of inadmissible evidence
- Ineffective assistance of counsel
- Procedural errors
- Constitutional violations
- Misapplication of law

## Appeal Timeline

Appeals must typically be filed within specific timeframes:
- Notice of appeal: Usually 30 days after judgment
- Appellate brief: Usually 40 days after case assigned to court
- Oral arguments: Typically scheduled months later

## Appellate Brief

The written brief is critical. It must concisely identify legal errors and explain why they require reversal.

## Oral Arguments

Attorneys present their arguments to a panel of judges. Judges ask questions testing the strength of legal positions.

## Outcomes

Appellate courts may:
- Affirm the lower court decision
- Reverse and remand for new trial
- Reverse and decide the case themselves
- Reverse in part, affirm in part

## Success Rate

Appeals are challenging. Only a small percentage succeed. Experienced appellate attorneys understand what courts look for.`,
  },
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    // The params prop is a promise, so we need to await it to get the actual value.
  const resolvedParams = await params;

  // console.log("Resolved params:", resolvedParams);
  const slug = resolvedParams.slug;
  const post = blogData[slug as keyof typeof blogData];
  // const post = blogData[params.slug as keyof typeof blogData]

  if (!post) {
    return (
      <main className="min-h-screen backdrop-blur-md inset-0 bg-cover bg-center bg-fixed" style={{
            backgroundImage: "url('/blind_law_lady.jpg')",
          }}>
        <Header />
        <section className="pt-40 backdrop-blur-md pb-20 px-4 text-center">
          <h1 className="text-4xl font-bold text-white">Blog post not found</h1>
          <Link href="/blog" className="text-amber-500 bg-black rounded-lg p-2 hover:text-amber-400 mt-4 inline-block">
            Back to Blog
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
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-amber-500 bg-black rounded-lg p-2 hover:text-amber-400 mb-4 inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <article>
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4 text-slate-400">
                <span className="text-xs text-amber-500 font-semibold bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800  px-2 py-1 rounded">
                  {post.category}
                </span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white">{post.title}</h1>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="text-white leading-relaxed space-y-4 whitespace-pre-line">{post.content}</div>
            </div>

            {/* <div className="mt-16 bg-slate-900/90 border border-amber-500/20 rounded-2xl p-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Legal Assistance?</h3>
              <p className="text-slate-300 mb-6">Contact us for professional legal guidance</p>
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all"
              >
                Schedule Consultation
              </Link>
            </div> */}
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}
