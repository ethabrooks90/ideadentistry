import { pricing } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function PricingComparison() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Transparent Pricing"
          title={pricing.heading}
          align="center"
          className="mx-auto"
        />

        <Reveal delay={0.1} className="mt-12 overflow-hidden rounded-2xl border border-border shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="bg-background-subtle text-sm uppercase tracking-wide text-muted-foreground">
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Service
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold text-primary">
                    {pricing.columns.ours}
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    {pricing.columns.other}
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricing.rows.map((row, i) => (
                  <tr
                    key={row.service}
                    className={i % 2 === 0 ? "bg-white" : "bg-background-subtle/50"}
                  >
                    <th scope="row" className="px-6 py-4 text-[0.95rem] font-medium text-foreground">
                      {row.service}
                    </th>
                    <td className="px-6 py-4">
                      <span className="rounded-full bg-accent-soft px-3 py-1 text-[0.95rem] font-semibold text-primary">
                        {row.ours}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[0.95rem] text-muted-foreground line-through decoration-muted-foreground/40">
                      {row.other}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-8 flex flex-wrap justify-center gap-2">
          {pricing.categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground"
            >
              {category}
            </span>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
