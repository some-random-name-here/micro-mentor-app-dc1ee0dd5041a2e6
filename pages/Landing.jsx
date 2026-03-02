import { CalendarIcon, ClockIcon, PaperAirplaneIcon, PencilIcon } from "@heroicons/react/24/outline";
import { Button, Card, CardBody, CardHeader, Listbox, ListboxItem } from "@heroui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="rounded-2xl overflow-hidden">
      <div className="relative rounded-2xl p-10 md:p-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]">
      <div className="absolute inset-0 bg-[var(--color-background)]/10" />
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text)]">Send a message to your future self</h1>
      <p className="text-[var(--color-text)]/90 text-base md:text-lg max-w-2xl mx-auto">Capture thoughts, goals, and reminders — deliver them when it matters most.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
      <Link to="/compose">
      <Button size="md" className="rounded-full bg-[var(--color-background)] text-[var(--color-primary)] font-semibold px-8 hover:bg-[var(--color-surface)] transition-all">Compose now</Button>
      </Link>
      <Link to="/about">
      <Button size="md" variant="bordered" className="rounded-full border-[var(--color-text)] text-[var(--color-text)] font-semibold px-8 hover:bg-[var(--color-background)]/10 transition-all">Learn more</Button>
      </Link>
      </div>
      </div>
      </div>
      </section>

  <section>
      <h2 className="text-[var(--color-text)] text-xl font-semibold mb-3">Quick actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
      <PencilIcon className="w-6 h-6 text-[var(--color-primary)]" />
      <div>
      <p className="text-[var(--color-text)] font-medium">Compose</p>
      <p className="text-[var(--color-text)]/70 text-sm">Write a new message</p>
      </div>
      </div>
      <Link to="/compose">
      <Button size="sm" className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)]">Open</Button>
      </Link>
      </CardBody>
      </Card>

      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
      <CalendarIcon className="w-6 h-6 text-[var(--color-secondary)]" />
      <div>
      <p className="text-[var(--color-text)] font-medium">Scheduled</p>
      <p className="text-[var(--color-text)]/70 text-sm">View upcoming deliveries</p>
      </div>
      </div>
      <Link to="/scheduled">
      <Button size="sm" className="rounded-full bg-[var(--color-secondary)] text-[var(--color-text)]">Open</Button>
      </Link>
      </CardBody>
      </Card>

      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
      <ClockIcon className="w-6 h-6 text-[var(--color-accent)]" />
      <div>
      <p className="text-[var(--color-text)] font-medium">History</p>
      <p className="text-[var(--color-text)]/70 text-sm">Browse past messages</p>
      </div>
      </div>
      <Link to="/history">
      <Button size="sm" className="rounded-full bg-[var(--color-accent)] text-[var(--color-text)]">Open</Button>
      </Link>
      </CardBody>
      </Card>
      </div>
      </section>
  <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="flex items-center justify-between p-4">
      <h3 className="text-[var(--color-text)] font-semibold">Next deliveries</h3>
      <Link to="/scheduled"><Button size="sm" variant="bordered" className="rounded-full border-[var(--color-border)] text-[var(--color-text)]">View all</Button></Link>
      </CardHeader>
      <CardBody className="p-0">
      <Listbox aria-label="Upcoming messages" className="p-2">
      <ListboxItem key="1" className="rounded-xl text-[var(--color-text)]">
      <div className="flex items-center gap-3">
      <CalendarIcon className="w-5 h-5 text-[var(--color-primary)]" />
      <div>
      <p className="text-[var(--color-text)] text-sm">Send "Keep going — you're closer than you think"</p>
      <p className="text-[var(--color-text)]/70 text-xs">Mar 28, 2026 at 9:00 AM</p>
      </div>
      </div>
      </ListboxItem>
      <ListboxItem key="2" className="rounded-xl text-[var(--color-text)]">
      <div className="flex items-center gap-3">
      <ClockIcon className="w-5 h-5 text-[var(--color-secondary)]" />
      <div>
      <p className="text-[var(--color-text)] text-sm">Reminder: "Review Q2 goals"</p>
      <p className="text-[var(--color-text)]/70 text-xs">Apr 2, 2026 at 8:30 AM</p>
      </div>
      </div>
      </ListboxItem>
      </Listbox>
      </CardBody>
      </Card>

      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="flex items-center justify-between p-4">
      <h3 className="text-[var(--color-text)] font-semibold">Recent activity</h3>
      <Link to="/history"><Button size="sm" variant="bordered" className="rounded-full border-[var(--color-border)] text-[var(--color-text)]">Open history</Button></Link>
      </CardHeader>
      <CardBody className="p-0">
      <Listbox aria-label="Recent activity" className="p-2">
      <ListboxItem key="a" className="rounded-xl text-[var(--color-text)]">
      <div className="flex items-center gap-3">
      <ClockIcon className="w-5 h-5 text-[var(--color-accent)]" />
      <div>
      <p className="text-[var(--color-text)] text-sm">Delivered: "Note to self — celebrate small wins"</p>
      <p className="text-[var(--color-text)]/70 text-xs">Just now</p>
      </div>
      </div>
      </ListboxItem>
      <ListboxItem key="b" className="rounded-xl text-[var(--color-text)]">
      <div className="flex items-center gap-3">
      <CalendarIcon className="w-5 h-5 text-[var(--color-primary)]" />
      <div>
      <p className="text-[var(--color-text)] text-sm">Scheduled a message for next month</p>
      <p className="text-[var(--color-text)]/70 text-xs">1 hour ago</p>
      </div>
      </div>
      </ListboxItem>
      </Listbox>
      </CardBody>
      </Card>
      </div>
      </section>

  <section>
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-4">
      <h3 className="text-[var(--color-text)] font-semibold">Recent activity</h3>
      </CardHeader>
      <CardBody className="p-0">
      <Listbox aria-label="Recent activity" className="p-2">
      <ListboxItem key="ra1" className="rounded-xl text-[var(--color-text)]">
      <div className="flex items-center gap-3">
      <ClockIcon className="w-5 h-5 text-[var(--color-accent)]" />
      <div>
      <p className="text-[var(--color-text)] text-sm">Delivered: "Remember to breathe and reset"</p>
      <p className="text-[var(--color-text)]/70 text-xs">5m ago</p>
      </div>
      </div>
      </ListboxItem>
      <ListboxItem key="ra2" className="rounded-xl text-[var(--color-text)]">
      <div className="flex items-center gap-3">
      <CalendarIcon className="w-5 h-5 text-[var(--color-primary)]" />
      <div>
      <p className="text-[var(--color-text)] text-sm">Rescheduled: "Rewrite meeting notes"</p>
      <p className="text-[var(--color-text)]/70 text-xs">1h ago</p>
      </div>
      </div>
      </ListboxItem>
      </Listbox>
      </CardBody>
      </Card>
      </section>
  <section>
      <h2 className="text-[var(--color-text)] text-xl font-semibold mb-3">How it works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-4 flex items-center gap-3">
      <PencilIcon className="w-6 h-6 text-[var(--color-primary)]" />
      <h3 className="text-[var(--color-text)] font-semibold">Write</h3>
      </CardHeader>
      <CardBody className="p-4 pt-0">
      <p className="text-[var(--color-text)]/80 text-sm">Draft a note to your future self — reflect, plan, or motivate.</p>
      </CardBody>
      </Card>

      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-4 flex items-center gap-3">
      <CalendarIcon className="w-6 h-6 text-[var(--color-secondary)]" />
      <h3 className="text-[var(--color-text)] font-semibold">Schedule</h3>
      </CardHeader>
      <CardBody className="p-4 pt-0">
      <p className="text-[var(--color-text)]/80 text-sm">Choose any date and time for delivery — days or years ahead.</p>
      </CardBody>
      </Card>

      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-4 flex items-center gap-3">
      <PaperAirplaneIcon className="w-6 h-6 text-[var(--color-accent)]" />
      <h3 className="text-[var(--color-text)] font-semibold">Receive</h3>
      </CardHeader>
      <CardBody className="p-4 pt-0">
      <p className="text-[var(--color-text)]/80 text-sm">Your message arrives right when you need it most.</p>
      </CardBody>
      </Card>
      </div>
      </section>

      </div>
    </div>
  );
}
