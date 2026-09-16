import Script from "next/script";
import { MessageCircleQuestion } from "lucide-react";
import { chat } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

// CustomGPT's embed script reads plain (non-`data-`) attributes off its own <script> tag,
// which falls outside next/script's typed props — hence the untyped attrs bag below.
const chatEmbedAttrs: Record<string, string> = {
  div_id: chat.embed.divId,
  p_id: chat.embed.projectId,
  p_key: chat.embed.projectKey,
  width: chat.embed.width,
};

export function ChatSection() {
  return (
    <section className="bg-background-subtle py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-16">
        <Reveal>
          <span className="flex size-12 items-center justify-center rounded-full bg-accent-soft text-primary">
            <MessageCircleQuestion className="size-6" aria-hidden="true" />
          </span>
          <h2 className="balance mt-5 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {chat.heading}
          </h2>
          <p className="mt-4 max-w-sm text-lg leading-relaxed text-muted-foreground">
            Get instant answers about our services, pricing, and scheduling — any time, day or night.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-lift">
            <div id={chat.embed.divId} />
          </div>
          <Script src={chat.embed.src} strategy="lazyOnload" {...chatEmbedAttrs} />
        </Reveal>
      </Container>
    </section>
  );
}
