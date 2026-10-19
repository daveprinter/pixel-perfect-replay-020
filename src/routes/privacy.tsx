import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy" },
      { name: "description", content: "How we handle personal information shared through this website." },
      { property: "og:title", content: "Privacy Policy" },
      { property: "og:description", content: "How we handle your personal information." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" intro="Draft notice — to be reviewed by the firm before publishing." />
      <section className="container-page max-w-3xl space-y-4 py-14 text-foreground">
        <p>Information you enter in our forms is used only to respond to your inquiry or service request.</p>
        <p>Forms on this site open WhatsApp with your message so you can review it before sending; nothing is sent automatically.</p>
        <p>We do not collect payment card details on this website. To request access to or deletion of your information, contact us.</p>
      </section>
    </>
  ),
});
