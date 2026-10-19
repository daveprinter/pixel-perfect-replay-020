import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PageHero } from "@/components/site/Layout";
import { ServiceCard } from "@/components/site/ServiceCard";
import { activeServices } from "@/lib/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "HR Services Directory | Recruitment, Consultancy & More" },
      { name: "description", content: "Browse our HR services: recruitment, staffing, consultancy, payroll, training, performance and career support." },
      { property: "og:title", content: "HR Services Directory" },
      { property: "og:description", content: "Find the HR service that fits your organization or career." },
    ],
  }),
  component: ServicesPage,
});

const cats = ["All", "Talent", "Advisory", "Administration", "Careers"] as const;

function ServicesPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const list = activeServices.filter(
    (s) => (cat === "All" || s.category === cat) &&
      (s.name + s.short + s.deliverables.join(" ")).toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <>
      <PageHero eyebrow="Services" title="HR services for organizations and individuals" intro="Prices are shared after we understand your scope. Every service starts with a free inquiry." />
      <section className="container-page py-14">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2" role="tablist">
            {cats.map((c) => (
              <button key={c} onClick={() => setCat(c)} role="tab" aria-selected={cat === c}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-primary"}`}>{c}</button>
            ))}
          </div>
          <div className="relative md:w-72">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search services" className="pl-9" aria-label="Search services" />
          </div>
        </div>
        {list.length ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map((s) => <ServiceCard key={s.slug} s={s} />)}</div>
        ) : (
          <p className="mt-16 text-center text-muted-foreground">No services match your search. Try another keyword or contact us.</p>
        )}
      </section>
    </>
  );
}
