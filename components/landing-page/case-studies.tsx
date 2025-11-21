'use client'
import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { TrendingUp, Award, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const cases = [
  {
    title: 'Multi-Million Dollar M&A Deal',
    client: 'TechCorp Industries',
    result: '₹250 Lakhs acquisition successfully negotiated',
    category: 'Corporate Law',
    icon: TrendingUp,
    image: '/business-meeting-conference-room.jpg',
    details: 'Complex cross-border merger with regulatory compliance'
  },
  {
    title: 'Patent Infringement Victory',
    client: 'InnovateLabs',
    result: '₹15 Lakhs settlement secured',
    category: 'IP Protection',
    icon: Award,
    image: '/patent-technology-innovation.jpg',
    details: 'Successfully defended intellectual property rights in federal court'
  },
  {
    title: 'Complex Commercial Litigation',
    client: 'Global Enterprises LLC',
    result: 'Favorable judgment in high-stakes dispute',
    category: 'Litigation',
    icon: TrendingUp,
    image: '/courtroom-justice-law-scales.jpg',
    details: 'Strategic litigation approach saved client ₹8 Lakhs'
  },
  {
    title: 'Employment Law Settlement',
    client: 'MidCorp Solutions',
    result: 'Fair resolution protecting all parties',
    category: 'Employment Law',
    icon: Award,
    image: '/hr-workplace-collaboration-team.jpg',
    details: 'Successfully negotiated fair terms for both employer and employees'
  },
  {
    title: 'Real Estate Acquisition',
    client: 'Apex Property Group',
    result: '₹45 Lakhs commercial property deal closed',
    category: 'Real Estate Law',
    icon: CheckCircle,
    image: '/modern-building-architecture.jpg',
    details: 'Expedited closing with zero regulatory delays'
  },
  {
    title: 'Tax Dispute Resolution',
    client: 'Financial Holdings Inc.',
    result: 'Tax assessment reduced by 35%',
    category: 'Tax Law',
    icon: TrendingUp,
    image: '/financial-charts-analysis.jpg',
    details: 'Successfully challenged IRS determination through appeals'
  },
]

export default function CaseStudies() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="cases" className="py-20 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.7s'}}></div>

      <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Case Studies & Results
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Proven track record of successful outcomes and strategic victories for our clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((caseStudy, idx) => {
            const Icon = caseStudy.icon
            return (
              <Card
                key={idx}
                className={`overflow-hidden bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800 hover:shadow-2xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-2 ${
                  isLoaded ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${idx * 0.12}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <Image
                    fill
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/40 to-transparent" />
                  <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Icon size={14} />
                    {caseStudy.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-background flex-1 group-hover:text-amber-500 transition-colors">{caseStudy.title}</h3>
                  </div>
                  
                  <p className="text-sm text-background/60 mb-3 font-semibold">Client: {caseStudy.client}</p>
                  <p className="text-xs text-background/50 mb-4">{caseStudy.details}</p>
                  
                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20 group-hover:bg-accent/10 transition-colors">
                    <p className="text-xs font-semibold text-accent mb-1">Result</p>
                    <p className="text-sm font-bold text-background">{caseStudy.result}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
