import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { NavLink } from "react-router-dom";
import { HomeIcon, PencilIcon, CalendarIcon, ClockIcon, Cog6ToothIcon, StarIcon } from "@heroicons/react/24/outline";

export default function SidebarNav() {
  const linkBase = "rounded-xl";
  const getLinkClass = ({ isActive }) =>
    `${linkBase} ${isActive ? "!bg-[var(--color-primary)]/15 !text-[var(--color-primary)]" : ""}`;

  return (
    <aside className="w-full">
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-primary">
        <CardBody className="p-4">
          <nav className="flex flex-col gap-2">
            <NavLink to="/" className={getLinkClass}>
              <Button
                fullWidth
                className="justify-start rounded-xl bg-transparent text-[var(--color-text)] hover:bg-[var(--color-primary)]/10 transition-colors"
                startContent={<HomeIcon className="w-5 h-5 text-[var(--color-text)]" />}
              >
                Home
              </Button>
            </NavLink>
            <NavLink to="/compose" className={getLinkClass}>
              <Button
                fullWidth
                className="justify-start rounded-xl bg-transparent text-[var(--color-text)] hover:bg-[var(--color-primary)]/10 transition-colors"
                startContent={<PencilIcon className="w-5 h-5 text-[var(--color-text)]" />}
              >
                Compose
              </Button>
            </NavLink>
            <NavLink to="/scheduled" className={getLinkClass}>
              <Button
                fullWidth
                className="justify-start rounded-xl bg-transparent text-[var(--color-text)] hover:bg-[var(--color-primary)]/10 transition-colors"
                startContent={<CalendarIcon className="w-5 h-5 text-[var(--color-text)]" />}
              >
                Scheduled
              </Button>
            </NavLink>
            <NavLink to="/history" className={getLinkClass}>
              <Button
                fullWidth
                className="justify-start rounded-xl bg-transparent text-[var(--color-text)] hover:bg-[var(--color-primary)]/10 transition-colors"
                startContent={<ClockIcon className="w-5 h-5 text-[var(--color-text)]" />}
              >
                History
              </Button>
            </NavLink>
            <NavLink to="/settings" className={getLinkClass}>
              <Button
                fullWidth
                className="justify-start rounded-xl bg-transparent text-[var(--color-text)] hover:bg-[var(--color-primary)]/10 transition-colors"
                startContent={<Cog6ToothIcon className="w-5 h-5 text-[var(--color-text)]" />}
              >
                Settings
              </Button>
            </NavLink>
            <NavLink to="/about" className={getLinkClass}>
              <Button
                fullWidth
                className="justify-start rounded-xl bg-transparent text-[var(--color-text)] hover:bg-[var(--color-primary)]/10 transition-colors"
                startContent={<StarIcon className="w-5 h-5 text-[var(--color-text)]" />}
              >
                About
              </Button>
            </NavLink>
          </nav>
        </CardBody>
      </Card>
    </aside>
  );
}
