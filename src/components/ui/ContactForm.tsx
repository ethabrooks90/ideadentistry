"use client";

import { useState, type FormEvent } from "react";
import { Loader2, Send } from "lucide-react";
import { contactForm } from "@/data/content";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-2xl border border-border bg-white p-8 text-center"
      >
        <p className="font-display text-xl font-semibold text-foreground">Message sent</p>
        <p className="mt-2 max-w-xs text-muted-foreground">
          Thank you for reaching out — our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-white p-6 sm:p-8" noValidate>
      <h3 className="font-display text-xl font-semibold text-foreground">Send Us a Message</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{contactForm.disclaimer}</p>

      <div className="mt-6 grid gap-4">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full rounded-xl border border-border bg-background-subtle/40 px-4 py-3 text-[0.95rem] text-foreground outline-none transition-colors focus:border-primary focus:bg-white"
          />
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 text-sm text-secondary">
          Something went wrong — please call us at the number above, or try again.
        </p>
      )}

      <Button type="submit" className="mt-6 w-full" disabled={status === "loading"}>
        {status === "loading" ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="size-4" aria-hidden="true" />
        )}
        {status === "loading" ? "Sending…" : "Submit"}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-secondary">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-border bg-background-subtle/40 px-4 py-3 text-[0.95rem] text-foreground outline-none transition-colors focus:border-primary focus:bg-white"
      />
    </div>
  );
}
