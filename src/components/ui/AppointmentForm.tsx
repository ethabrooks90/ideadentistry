"use client";

import { useState, type FormEvent } from "react";
import { CalendarCheck, Loader2 } from "lucide-react";
import { appointmentForm } from "@/data/content";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "loading" | "success" | "error";

export function AppointmentForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      preferredDate: formData.get("preferredDate"),
      preferredTime: formData.get("preferredTime"),
      reason: formData.get("reason"),
    };

    try {
      const res = await fetch("/api/appointments", {
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
        className="flex min-h-[360px] flex-col items-center justify-center rounded-2xl border border-border bg-white p-8 text-center"
      >
        <span className="flex size-14 items-center justify-center rounded-full bg-accent-soft text-primary">
          <CalendarCheck className="size-7" aria-hidden="true" />
        </span>
        <p className="mt-4 font-display text-xl font-semibold text-foreground">Request received</p>
        <p className="mt-2 max-w-sm text-muted-foreground">
          Thank you! Your appointment will be confirmed by phone by a member of our staff.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-white p-6 sm:p-8" noValidate>
      <p className="text-sm leading-relaxed text-muted-foreground">{appointmentForm.intro}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className="w-full rounded-xl border border-border bg-background-subtle/40 px-4 py-3 text-[0.95rem] text-foreground outline-none transition-colors focus:border-primary focus:bg-white"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
            Phone<span className="text-secondary">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="w-full rounded-xl border border-border bg-background-subtle/40 px-4 py-3 text-[0.95rem] text-foreground outline-none transition-colors focus:border-primary focus:bg-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            Email<span className="text-secondary">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-border bg-background-subtle/40 px-4 py-3 text-[0.95rem] text-foreground outline-none transition-colors focus:border-primary focus:bg-white"
          />
        </div>

        <div>
          <label htmlFor="preferredDate" className="mb-1.5 block text-sm font-medium text-foreground">
            Preferred Date<span className="text-secondary">*</span>
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            required
            className="w-full rounded-xl border border-border bg-background-subtle/40 px-4 py-3 text-[0.95rem] text-foreground outline-none transition-colors focus:border-primary focus:bg-white"
          />
        </div>

        <div>
          <label htmlFor="preferredTime" className="mb-1.5 block text-sm font-medium text-foreground">
            Preferred Time
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            defaultValue=""
            className="w-full rounded-xl border border-border bg-background-subtle/40 px-4 py-3 text-[0.95rem] text-foreground outline-none transition-colors focus:border-primary focus:bg-white"
          >
            <option value="" disabled>
              Select a time
            </option>
            {appointmentForm.preferredTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="reason" className="mb-1.5 block text-sm font-medium text-foreground">
            Nature of Visit
          </label>
          <textarea
            id="reason"
            name="reason"
            rows={4}
            className="w-full rounded-xl border border-border bg-background-subtle/40 px-4 py-3 text-[0.95rem] text-foreground outline-none transition-colors focus:border-primary focus:bg-white"
          />
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 text-sm text-secondary">
          Something went wrong — please call us to book directly, or try again.
        </p>
      )}

      <Button type="submit" className="mt-6 w-full" disabled={status === "loading"}>
        {status === "loading" && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
        {status === "loading" ? "Submitting…" : "Submit"}
      </Button>
    </form>
  );
}
