import { Button, Card, CardBody, CardHeader, Chip, DatePicker, Input, Pagination, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import React from "react";

export default function History() {
    const [query, setQuery] = React.useState("");
    const [type, setType] = React.useState("all");
    const [fromDate, setFromDate] = React.useState("");
    const [toDate, setToDate] = React.useState("");
    const handleApply = () => {};
    const [page, setPage] = React.useState(1);
    const [rows] = React.useState([
      { id: 1, subject: "Start Q2 planning", delivered: "Mar 1, 2026 9:00 AM", outcome: "Delivered" },
      { id: 2, subject: "Celebrate this milestone", delivered: "Feb 20, 2026 8:15 AM", outcome: "Delivered" },
    ]);
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-4">
      <h3 className="text-[var(--color-text)] font-semibold">Filters</h3>
      </CardHeader>
      <CardBody className="p-4 pt-0 grid grid-cols-1 md:grid-cols-5 gap-4">
      <Input label="Search" labelPlacement="outside-top" value={query} onValueChange={setQuery} classNames={{ inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60", label: "text-[var(--color-text)]" }} />
      <Select label="Type" labelPlacement="outside-top" selectedKeys={type ? [type] : []} onSelectionChange={(keys) => setType(Array.from(keys)[0] || "")} classNames={{ trigger: "h-12 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", label: "text-[var(--color-text)]", popoverContent: "bg-[var(--color-surface)] text-[var(--color-text)]" }}>
      <SelectItem key="all">All</SelectItem>
      <SelectItem key="delivered">Delivered</SelectItem>
      <SelectItem key="failed">Failed</SelectItem>
      </Select>
      <DatePicker label="From" labelPlacement="outside-top" value={fromDate} onChange={setFromDate} classNames={{ inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", label: "text-[var(--color-text)]", input: "text-[var(--color-text)]" }} />
      <DatePicker label="To" labelPlacement="outside-top" value={toDate} onChange={setToDate} classNames={{ inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", label: "text-[var(--color-text)]", input: "text-[var(--color-text)]" }} />
      <div className="flex items-end">
      <Button className="w-full rounded-full bg-[var(--color-primary)] text-[var(--color-text)]" onPress={handleApply}>Apply</Button>
      </div>
      </CardBody>
      </Card>

      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-4">
      <h3 className="text-[var(--color-text)] font-semibold">Stats</h3>
      </CardHeader>
      <CardBody className="p-4 pt-0 grid grid-cols-2 gap-3">
      <div className="rounded-xl border border-[var(--color-border)] p-3">
      <p className="text-[var(--color-text)]/70 text-xs">Delivered</p>
      <p className="text-[var(--color-text)] text-lg font-semibold">128</p>
      </div>
      <div className="rounded-xl border border-[var(--color-border)] p-3">
      <p className="text-[var(--color-text)]/70 text-xs">Failed</p>
      <p className="text-[var(--color-text)] text-lg font-semibold">3</p>
      </div>
      <div className="rounded-xl border border-[var(--color-border)] p-3 col-span-2">
      <p className="text-[var(--color-text)]/70 text-xs">Streak</p>
      <Chip variant="flat" className="rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] text-xs">7 days on track</Chip>
      </div>
      </CardBody>
      </Card>
      </div>
      </section>
  <section>
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-4">
      <h3 className="text-[var(--color-text)] font-semibold">Message archive</h3>
      </CardHeader>
      <CardBody className="p-0">
      <Table aria-label="History table" className="bg-transparent">
      <TableHeader>
      <TableColumn className="text-[var(--color-text)]">SUBJECT</TableColumn>
      <TableColumn className="text-[var(--color-text)]">DELIVERED</TableColumn>
      <TableColumn className="text-[var(--color-text)]">OUTCOME</TableColumn>
      </TableHeader>
      <TableBody>
      {rows.map((r) => (
      <TableRow key={r.id}>
      <TableCell className="text-[var(--color-text)] text-sm">{r.subject}</TableCell>
      <TableCell className="text-[var(--color-text)] text-sm">{r.delivered}</TableCell>
      <TableCell className="text-[var(--color-text)] text-sm">{r.outcome}</TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      <div className="py-3 flex justify-end pr-4">
      <Pagination total={10} page={page} onChange={setPage} className="text-[var(--color-text)]" />
      </div>
      </CardBody>
      </Card>
      </section>
      </div>
    </div>
  );
}
