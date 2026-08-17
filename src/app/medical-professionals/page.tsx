import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, HeartPulse } from "lucide-react";

import { MarketingLayout } from "@/components/MarketingShell";
import { serviceAreas, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Healthcare Software for Doctors in Johannesburg & South Africa",
  description: "Sylvexa helps doctors and healthcare professionals turn ideas into patient portals, clinician dashboards, practice workflows, remote-care tools and custom healthcare software in Johannesburg, Gauteng and across South Africa.",
  alternates: { canonical: "/medical-professionals" },
  keywords: ["healthcare software South Africa","medical software Johannesburg","healthcare software Gauteng","patient portal development South Africa","clinician dashboard development","custom medical software","healthcare web app development Johannesburg"],
  openGraph: {
    title: "Doctors, we want YOU | Healthcare Software by Sylvexa",
    description: "Bring the clinical insight. Sylvexa helps turn healthcare ideas into thoughtful digital products for Johannesburg, Gauteng and South Africa.",
    url: "/medical-professionals",
    locale: "en_ZA",
  },
};

const healthcareServiceSchema = {
  "@context":"https://schema.org",
  "@type":"Service",
  "@id":`${siteConfig.url}/medical-professionals#service`,
  name:"Healthcare software and digital product development",
  serviceType:"Healthcare software development",
  provider:{"@id":`${siteConfig.url}/#organization`},
  url:`${siteConfig.url}/medical-professionals`,
  areaServed:serviceAreas.map((name)=>({"@type":"AdministrativeArea",name})),
  description:"Custom digital product development for doctors and healthcare professionals, including patient portals, clinician dashboards, workflow tools, remote-care concepts and healthcare web applications.",
};

const capabilities = [
  ["01","Patient platforms","Patient portals, digital journeys, forms, follow-up experiences and service access designed around real healthcare workflows."],
  ["02","Clinician dashboards","Operational views, workflow tools, task queues, summaries and dashboards that make clinical work easier to navigate."],
  ["03","Practice software","Custom systems for administration, referrals, internal processes, reporting and coordination where generic software falls short."],
  ["04","Remote care concepts","Digital pathways for follow-up, monitoring, patient-reported information and structured escalation workflows."],
  ["05","Healthcare portals","Secure-by-design portals and web applications shaped around the users, permissions and information flows your service needs."],
  ["06","Product discovery","Turn an early idea into requirements, user journeys, prototypes, architecture and a realistic build plan before expensive decisions are locked in."],
] as const;

export default function MedicalProfessionalsPage() {
  return (
    <MarketingLayout>
      <Script id="healthcare-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(healthcareServiceSchema).replace(/</g,"\\u003c")}} />
      <section className="medicalHero">
        <div className="medicalHeroInner">
          <div>
            <span className="localEyebrow"><HeartPulse size={15}/> Healthcare innovation · South Africa</span>
            <h1>Doctors,<span>we want YOU.</span></h1>
            <p>You see the friction that outsiders miss: the repeated admin, the broken patient journey, the awkward handover, the dashboard nobody has built yet. Bring the clinical problem or product idea. Sylvexa can help turn it into a thoughtful digital system.</p>
            <div className="localButtonRow">
              <Link href="/contact?audience=medical-professional&intent=product-idea" className="localPrimary">Bring us your idea <ArrowRight size={16}/></Link>
              <Link href="/services/software-web-apps" className="localSecondary">Explore custom software</Link>
            </div>
          </div>
          <aside className="medicalSignalPanel" aria-label="Healthcare product opportunities">
            <strong>Ideas worth exploring</strong>
            <div>Patient portal or digital patient journey</div>
            <div>Clinician dashboard or workflow tool</div>
            <div>Practice operations and internal software</div>
            <div>Remote monitoring or post-care concept</div>
            <div>Something healthcare still makes people do manually</div>
          </aside>
        </div>
      </section>

      <section className="medicalSection">
        <div className="medicalSectionInner">
          <span className="localEyebrow">What we can build</span>
          <h2>Clinical insight first. Technology second.</h2>
          <p className="medicalSectionLead">The strongest healthcare products usually begin with someone who understands the problem deeply. Sylvexa works with medical professionals to translate that understanding into user journeys, requirements, interfaces, software architecture and production-ready web applications.</p>
          <div className="medicalCapabilityGrid">
            {capabilities.map(([number,title,copy])=><article className="medicalCapability" key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="medicalSection alt">
        <div className="medicalSectionInner">
          <span className="localEyebrow">How we work together</span>
          <h2>You bring the healthcare reality. We shape the digital product.</h2>
          <p className="medicalSectionLead">You do not need a technical specification before speaking to us. A problem, rough concept, sketch, spreadsheet or workflow is enough to begin a structured discovery process.</p>
          <div className="medicalProcess">
            <article><span>01 · Understand</span><h3>Map the real problem</h3><p>Who is affected, what happens today, where the friction sits and what a better outcome should look like.</p></article>
            <article><span>02 · Shape</span><h3>Define the product</h3><p>Users, permissions, workflows, information, integrations, risks and an achievable first version.</p></article>
            <article><span>03 · Build</span><h3>Engineer the system</h3><p>Design and development with maintainability, security, auditability and usability treated as product requirements.</p></article>
            <article><span>04 · Improve</span><h3>Learn from real use</h3><p>Measure what works, collect feedback and improve the product without losing control of the underlying system.</p></article>
          </div>
          <div className="medicalLocalNote"><strong>Serving healthcare innovators in Johannesburg, Gauteng and across South Africa.</strong> Sylvexa is a technology partner, not a medical provider. Regulatory, clinical-safety, privacy and compliance requirements are defined and validated with the appropriate healthcare, legal and security expertise for each project.</div>
        </div>
      </section>

      <section className="localServiceArea" aria-labelledby="healthcare-local-title">
        <div className="localServiceInner">
          <span className="localEyebrow">Johannesburg · Gauteng · South Africa</span>
          <h2 id="healthcare-local-title">Healthcare software development for medical professionals who know there is a better way.</h2>
          <p>Whether the idea starts in a Johannesburg practice, a Gauteng healthcare organisation or a distributed South African clinical team, the goal is the same: build software around the actual workflow instead of forcing the workflow around generic software.</p>
          <div className="localAreaLinks"><Link href="/contact?audience=medical-professional&intent=product-idea">Discuss a healthcare idea</Link><Link href="/services/software-web-apps">Custom software development</Link><Link href="/process">See our build process</Link><Link href="/about">About Sylvexa</Link></div>
        </div>
      </section>

      <section className="medicalCta">
        <div className="medicalCtaInner">
          <div><h2>The useful healthcare product might be the one you keep wishing existed.</h2><p>Bring the problem, the sketch, the workflow or the idea. We can work out the technical shape together.</p></div>
          <div className="localButtonRow"><Link href="/contact?audience=medical-professional&intent=product-idea" className="localPrimary">I have an idea <ArrowRight size={16}/></Link><Link href="/services" className="localSecondary">Explore Sylvexa</Link></div>
        </div>
      </section>
    </MarketingLayout>
  );
}
