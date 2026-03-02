import React from "react";
import SidebarNav from "./SidebarNav";
import HeaderBar from "./HeaderBar";
import { Card } from "@heroui/react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden lg:flex lg:w-64 xl:w-72 flex-col gap-4 p-4 border-r border-[var(--color-border)] sticky top-0 h-screen">
          <Link to="/" className="block">
            <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center">
                  <span className="text-[var(--color-primary)] font-bold">P</span>
                </div>
                <span className="text-[var(--color-text)] font-semibold">PingMeLater2</span>
              </div>
            </Card>
          </Link>
          <SidebarNav />
          <Card className="mt-auto bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-4">
            <p className="text-[var(--color-text)] text-sm font-semibold">Tip</p>
            <p className="text-[var(--color-text)]/80 text-xs mt-1">
              Use Compose to schedule a note for your future self in seconds.
            </p>
          </Card>
        </aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col min-w-0">
          <HeaderBar />
          <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
