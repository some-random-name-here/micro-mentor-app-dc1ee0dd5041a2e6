import { Accordion, AccordionItem, Button, Card, CardBody, CardHeader, Listbox, ListboxItem } from "@heroui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section>
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
      <CardHeader className="p-6">
      <h1 className="text-[var(--color-text)] text-2xl font-bold">About PingMeLater2</h1>
      </CardHeader>
      <CardBody className="p-6 pt-0 space-y-4">
      <p className="text-[var(--color-text)]/85 text-sm leading-7">PingMeLater2 helps you write notes, reminders, and messages to your future self. Capture your thoughts today and deliver them when you need encouragement, perspective, or a timely nudge.</p>
      <p className="text-[var(--color-text)]/85 text-sm leading-7">Built with a focus on simplicity and calm design, it blends delightful UI with powerful scheduling.</p>
      <div className="pt-2">
      <Link to="/compose">
      <Button className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)]">Get started</Button>
      </Link>
      </div>
      </CardBody>
      </Card>
      </section>
  <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-4">
      <h3 className="text-[var(--color-text)] font-semibold">Principles</h3>
      </CardHeader>
      <CardBody className="p-0">
      <Listbox aria-label="Principles" className="p-2">
      <ListboxItem key="p1" className="text-[var(--color-text)] rounded-xl">Simplicity over clutter</ListboxItem>
      <ListboxItem key="p2" className="text-[var(--color-text)] rounded-xl">Privacy by default</ListboxItem>
      <ListboxItem key="p3" className="text-[var(--color-text)] rounded-xl">Delightful, accessible UI</ListboxItem>
      </Listbox>
      </CardBody>
      </Card>

      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-4">
      <h3 className="text-[var(--color-text)] font-semibold">FAQ</h3>
      </CardHeader>
      <CardBody className="p-4 pt-0">
      <Accordion>
      <AccordionItem key="f1" aria-label="How are messages delivered?" title={<span className="text-[var(--color-text)]">How are messages delivered?</span>}>
      <p className="text-[var(--color-text)]/85 text-sm">Messages are delivered via email at your scheduled time.</p>
      </AccordionItem>
      <AccordionItem key="f2" aria-label="Can I edit a scheduled message?" title={<span className="text-[var(--color-text)]">Can I edit a scheduled message?</span>}>
      <p className="text-[var(--color-text)]/85 text-sm">Yes — you can edit or reschedule anytime before delivery.</p>
      </AccordionItem>
      <AccordionItem key="f3" aria-label="Is my data private?" title={<span className="text-[var(--color-text)]">Is my data private?</span>}>
      <p className="text-[var(--color-text)]/85 text-sm">Absolutely. Your messages are private and never shared.</p>
      </AccordionItem>
      </Accordion>
      </CardBody>
      </Card>
      </div>
      </section>

      </div>
    </div>
  );
}
