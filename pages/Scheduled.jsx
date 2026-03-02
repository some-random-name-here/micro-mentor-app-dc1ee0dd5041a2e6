import { Button, Card, CardBody, CardHeader, DatePicker, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Pagination, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import React from "react";

export default function Scheduled() {
    const [query, setQuery] = React.useState("");
    const [status, setStatus] = React.useState("all");
    const [fromDate, setFromDate] = React.useState("");
    const [toDate, setToDate] = React.useState("");
    const handleApply = () => {};
    const [page, setPage] = React.useState(1);
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(null);
    const [rows, setRows] = React.useState([
      { id: 1, subject: "Review yearly goals", delivery: "Apr 12, 2026 9:00 AM", status: "Scheduled" },
      { id: 2, subject: "Read your note from March", delivery: "Apr 20, 2026 8:30 AM", status: "Paused" },
    ]);
    const onEdit = (id) => {};
    const confirmDelete = () => {
      if (selected) {
        setRows((prev) => prev.filter((r) => r.id !== selected.id));
        setOpen(false);
      }
    };
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section>
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-4 grid grid-cols-1 md:grid-cols-5 gap-4">
      <Input label="Search" labelPlacement="outside-top" value={query} onValueChange={setQuery} classNames={{ inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60", label: "text-[var(--color-text)]" }} />
      <Select label="Status" labelPlacement="outside-top" selectedKeys={status ? [status] : []} onSelectionChange={(keys) => setStatus(Array.from(keys)[0] || "")} classNames={{ trigger: "h-12 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", label: "text-[var(--color-text)]", popoverContent: "bg-[var(--color-surface)] text-[var(--color-text)]" }}>
      <SelectItem key="all">All</SelectItem>
      <SelectItem key="scheduled">Scheduled</SelectItem>
      <SelectItem key="paused">Paused</SelectItem>
      <SelectItem key="sent">Sent</SelectItem>
      </Select>
      <DatePicker label="From" labelPlacement="outside-top" value={fromDate} onChange={setFromDate} classNames={{ inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", label: "text-[var(--color-text)]", input: "text-[var(--color-text)]" }} />
      <DatePicker label="To" labelPlacement="outside-top" value={toDate} onChange={setToDate} classNames={{ inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", label: "text-[var(--color-text)]", input: "text-[var(--color-text)]" }} />
      <div className="flex items-end">
      <Button className="w-full rounded-full bg-[var(--color-primary)] text-[var(--color-text)]" onPress={handleApply}>Apply</Button>
      </div>
      </CardBody>
      </Card>
      </section>
  <section>
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-4 flex items-center justify-between">
      <h3 className="text-[var(--color-text)] font-semibold">Scheduled messages</h3>
      </CardHeader>
      <CardBody className="p-0">
      <Table aria-label="Scheduled messages table" className="bg-transparent">
      <TableHeader>
      <TableColumn className="text-[var(--color-text)]">SUBJECT</TableColumn>
      <TableColumn className="text-[var(--color-text)]">DELIVERY</TableColumn>
      <TableColumn className="text-[var(--color-text)]">STATUS</TableColumn>
      <TableColumn className="text-[var(--color-text)]">ACTIONS</TableColumn>
      </TableHeader>
      <TableBody>
      {rows.map((r) => (
      <TableRow key={r.id}>
      <TableCell className="text-[var(--color-text)] text-sm">{r.subject}</TableCell>
      <TableCell className="text-[var(--color-text)] text-sm">{r.delivery}</TableCell>
      <TableCell className="text-[var(--color-text)] text-sm">{r.status}</TableCell>
      <TableCell className="text-[var(--color-text)] text-sm">
      <div className="flex gap-2">
      <Button size="sm" variant="bordered" className="rounded-full border-[var(--color-border)] text-[var(--color-text)]" onPress={() => onEdit(r.id)}>Edit</Button>
      <Button size="sm" color="danger" className="rounded-full text-[var(--color-text)]" onPress={() => { setSelected(r); setOpen(true); }}>Delete</Button>
      </div>
      </TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      <div className="py-3 flex justify-end pr-4">
      <Pagination total={5} page={page} onChange={setPage} className="text-[var(--color-text)]" />
      </div>
      </CardBody>
      </Card>

      <Modal isOpen={open} onClose={() => setOpen(false)} classNames={{ base: "bg-[var(--color-background)] text-[var(--color-text)] rounded-2xl" }}>
      <ModalContent>
      <ModalHeader>Delete scheduled message</ModalHeader>
      <ModalBody>
      <p className="text-[var(--color-text)] text-sm">Are you sure you want to delete "{selected?.subject}"?</p>
      </ModalBody>
      <ModalFooter>
      <Button variant="bordered" className="rounded-full border-[var(--color-border)] text-[var(--color-text)]" onPress={() => setOpen(false)}>Cancel</Button>
      <Button color="danger" className="rounded-full text-[var(--color-text)]" onPress={confirmDelete}>Delete</Button>
      </ModalFooter>
      </ModalContent>
      </Modal>
      </section>
      </div>
    </div>
  );
}
