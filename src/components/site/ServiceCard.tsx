import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Service } from "@/lib/services";

export function ServiceCard({ s }: { s: Service }) {
  const Icon = s.icon;
  return (
    <article className="group flex flex-col rounded-lg border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-1">
      <span className="grid size-11 place-items-center rounded-md bg-secondary text-primary"><Icon className="size-5" /></span>
      <h3 className="mt-5 text-xl font-semibold text-primary">{s.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        <Button asChild size="sm"><Link to="/order" search={{ service: s.slug }}>Order Service Now</Link></Button>
        <Button asChild size="sm" variant="ghost">
          <Link to="/services/$slug" params={{ slug: s.slug }}>Learn More <ArrowRight /></Link>
        </Button>
      </div>
    </article>
  );
}
