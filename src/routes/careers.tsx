import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, WaButton } from "@/components/site/Layout";
import { waMessages } from "@/lib/site";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers & Job Vacancies" },
      { name: "description", content: "Browse current vacancies and get career support from our HR team." },
      { property: "og:title", content: "Careers & Job Vacancies" },
      { property: "og:description", content: "Open roles and career support for job seekers." },
    ],
  }),
  component: Careers,
});

// Vacancies will be managed by the firm once listings are provided.
const jobs: { title: string; location: string; type: string }[] = [];

function Careers() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Find your next opportunity" intro="Current vacancies posted on behalf of our clients appear here." />
      <section className="container-page py-16">
        {jobs.length === 0 ? (
          <div className="rounded-lg border border-dashed border-border bg-card p-12 text-center">
            <Briefcase className="mx-auto size-8 text-accent" />
            <h2 className="mt-4 text-2xl font-semibold text-primary">No open vacancies right now</h2>
            <p className="mx-auto mt-2 max-w-md text-muted-foreground">New roles are posted regularly. Ask us about upcoming opportunities, or get your CV ready in the meantime.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <WaButton message={waMessages.careers} label="Ask About Vacancies" />
              <Button asChild variant="outline" size="lg"><Link to="/services/$slug" params={{ slug: "cv-writing" }}>CV & Career Support</Link></Button>
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
}
