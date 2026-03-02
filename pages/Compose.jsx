import { Button, Card, CardBody, CardFooter, CardHeader, Checkbox, DatePicker, Input, Listbox, ListboxItem, Select, SelectItem, Switch, Textarea } from "@heroui/react";
import React from "react";

export default function Compose() {
    const [subject, setSubject] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [date, setDate] = React.useState("");
    const [time, setTime] = React.useState("");
    const [recurrence, setRecurrence] = React.useState("");
    const [isPrivate, setIsPrivate] = React.useState(true);
    const [emailCopy, setEmailCopy] = React.useState(false);
    const [allowReplies, setAllowReplies] = React.useState(false);
    const [notifyOnDelivery, setNotifyOnDelivery] = React.useState(true);
    const [trackOpens, setTrackOpens] = React.useState(false);
    const handleReset = () => {
      setSubject("");
      setMessage("");
      setDate("");
      setTime("");
      setRecurrence("");
      setIsPrivate(true);
      setEmailCopy(false);
      setAllowReplies(false);
      setNotifyOnDelivery(true);
      setTrackOpens(false);
    };
    const handleSubmit = () => {
      // Placeholder submit handler
      alert("Message scheduled!");
    };
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-4">
      <h2 className="text-[var(--color-text)] font-semibold">Compose your future message</h2>
      </CardHeader>
      <CardBody className="p-4 pt-0 space-y-4">
      <Input label="Subject" labelPlacement="outside-top" value={subject} onValueChange={setSubject} classNames={{ inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60", label: "text-[var(--color-text)]" }} />
      <Textarea label="Message" labelPlacement="outside-top" value={message} onValueChange={setMessage} minRows={8} classNames={{ inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60", label: "text-[var(--color-text)]" }} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <DatePicker label="Delivery date" labelPlacement="outside-top" value={date} onChange={setDate} classNames={{ base: "w-full", calendar: "bg-[var(--color-surface)]", inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", label: "text-[var(--color-text)]", input: "text-[var(--color-text)]" }} />
      <Input label="Delivery time" labelPlacement="outside-top" type="time" value={time} onValueChange={setTime} classNames={{ inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)]", label: "text-[var(--color-text)]" }} />
      <Select label="Recurrence" labelPlacement="outside-top" selectedKeys={recurrence ? [recurrence] : []} onSelectionChange={(keys) => setRecurrence(Array.from(keys)[0] || "")} classNames={{ trigger: "h-12 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", label: "text-[var(--color-text)]", popoverContent: "bg-[var(--color-surface)] text-[var(--color-text)]" }}>
      <SelectItem key="none">None</SelectItem>
      <SelectItem key="daily">Daily</SelectItem>
      <SelectItem key="weekly">Weekly</SelectItem>
      <SelectItem key="monthly">Monthly</SelectItem>
      </Select>
      </div>
      <div className="flex items-center gap-6 pt-2">
      <Switch isSelected={isPrivate} onValueChange={setIsPrivate} color="secondary"> <span className="text-[var(--color-text)] text-sm">Private</span> </Switch>
      <Checkbox isSelected={emailCopy} onValueChange={setEmailCopy} classNames={{ label: "text-[var(--color-text)] text-sm" }}>Email me a copy</Checkbox>
      </div>
      <div className="flex justify-end gap-3 pt-2">
      <Button variant="bordered" className="rounded-full border-[var(--color-border)] text-[var(--color-text)]" onPress={handleReset}>Reset</Button>
      <Button className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)]" onPress={handleSubmit}>Schedule</Button>
      </div>
      </CardBody>
      </Card>

      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-4">
      <h3 className="text-[var(--color-text)] font-semibold">Delivery options</h3>
      </CardHeader>
      <CardBody className="p-4 pt-0 space-y-4">
      <Checkbox isSelected={allowReplies} onValueChange={setAllowReplies} classNames={{ label: "text-[var(--color-text)] text-sm" }}>Allow email replies</Checkbox>
      <Checkbox isSelected={notifyOnDelivery} onValueChange={setNotifyOnDelivery} classNames={{ label: "text-[var(--color-text)] text-sm" }}>Notify me on delivery</Checkbox>
      <Switch isSelected={trackOpens} onValueChange={setTrackOpens} color="secondary"> <span className="text-[var(--color-text)] text-sm">Track opens</span> </Switch>
      </CardBody>
      </Card>
      </div>
      </section>
  <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-4">
      <h3 className="text-[var(--color-text)] font-semibold">Message preview</h3>
      </CardHeader>
      <CardBody className="p-4 pt-0">
      <div className="rounded-xl border border-[var(--color-border)] p-4">
      <p className="text-[var(--color-text)]/80 text-sm">Subject: <span className="text-[var(--color-text)] font-medium">Your future note</span></p>
      <p className="text-[var(--color-text)]/80 text-sm mt-2">Delivery: <span className="text-[var(--color-text)] font-medium">Apr 2, 2026 at 9:00 AM</span></p>
      <div className="mt-4">
      <p className="text-[var(--color-text)] text-sm leading-6">Hey future me — you're doing great. Remember to balance ambition with rest. Keep the momentum and celebrate small wins along the way.</p>
      </div>
      </div>
      </CardBody>
      <CardFooter className="p-4 pt-0 flex justify-end gap-3">
      <Button variant="bordered" className="rounded-full border-[var(--color-border)] text-[var(--color-text)]">Send test</Button>
      <Button className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)]">Schedule</Button>
      </CardFooter>
      </Card>

      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-4">
      <h3 className="text-[var(--color-text)] font-semibold">Writing tips</h3>
      </CardHeader>
      <CardBody className="p-0">
      <Listbox aria-label="Writing tips" className="p-2">
      <ListboxItem key="t1" className="text-[var(--color-text)] rounded-xl">Be specific about goals and timelines.</ListboxItem>
      <ListboxItem key="t2" className="text-[var(--color-text)] rounded-xl">Use a positive, encouraging tone.</ListboxItem>
      <ListboxItem key="t3" className="text-[var(--color-text)] rounded-xl">Include context you'll want to remember.</ListboxItem>
      </Listbox>
      </CardBody>
      </Card>
      </div>
      </section>

      </div>
    </div>
  );
}
