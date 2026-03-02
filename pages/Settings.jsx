import { Avatar, Button, Card, CardBody, CardHeader, Checkbox, Chip, Input, Select, SelectItem, Switch } from "@heroui/react";
import React from "react";

export default function Settings() {
    const [name, setName] = React.useState("Alex");
    const [email, setEmail] = React.useState("alex@example.com");
    const [tz, setTz] = React.useState("utc");
    const [emailNotifications, setEmailNotifications] = React.useState(true);
    const [weeklySummary, setWeeklySummary] = React.useState(false);
    const [dataSharing, setDataSharing] = React.useState(false);
    const [readReceipts, setReadReceipts] = React.useState(true);
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-4">
      <h3 className="text-[var(--color-text)] font-semibold">Profile</h3>
      </CardHeader>
      <CardBody className="p-4 pt-0 space-y-4">
      <div className="flex items-center gap-4">
      <Avatar name={name || 'U'} className="w-12 h-12" />
      <Button variant="bordered" className="rounded-full border-[var(--color-border)] text-[var(--color-text)]">Change</Button>
      </div>
      <Input label="Name" labelPlacement="outside-top" value={name} onValueChange={setName} classNames={{ inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)]", label: "text-[var(--color-text)]" }} />
      <Input label="Email" labelPlacement="outside-top" type="email" value={email} onValueChange={setEmail} classNames={{ inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)]", label: "text-[var(--color-text)]" }} />
      <div className="flex justify-end">
      <Button className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)]">Save changes</Button>
      </div>
      </CardBody>
      </Card>

      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-4">
      <h3 className="text-[var(--color-text)] font-semibold">Preferences</h3>
      </CardHeader>
      <CardBody className="p-4 pt-0 space-y-4">
      <Select label="Time zone" labelPlacement="outside-top" selectedKeys={tz ? [tz] : []} onSelectionChange={(keys) => setTz(Array.from(keys)[0] || "")} classNames={{ trigger: "h-12 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", label: "text-[var(--color-text)]", popoverContent: "bg-[var(--color-surface)] text-[var(--color-text)]" }}>
      <SelectItem key="utc">UTC</SelectItem>
      <SelectItem key="pst">Pacific (PST)</SelectItem>
      <SelectItem key="est">Eastern (EST)</SelectItem>
      </Select>
      <Switch isSelected={emailNotifications} onValueChange={setEmailNotifications} color="secondary"> <span className="text-[var(--color-text)] text-sm">Email notifications</span> </Switch>
      <Checkbox isSelected={weeklySummary} onValueChange={setWeeklySummary} classNames={{ label: "text-[var(--color-text)] text-sm" }}>Weekly summary</Checkbox>
      <div className="flex justify-end">
      <Button className="rounded-full bg-[var(--color-secondary)] text-[var(--color-text)]">Update</Button>
      </div>
      </CardBody>
      </Card>
      </div>
      </section>
  <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-4">
      <h3 className="text-[var(--color-text)] font-semibold">Privacy</h3>
      </CardHeader>
      <CardBody className="p-4 pt-0 space-y-4">
      <Switch isSelected={dataSharing} onValueChange={setDataSharing} color="secondary"> <span className="text-[var(--color-text)] text-sm">Allow anonymous usage data</span> </Switch>
      <Switch isSelected={readReceipts} onValueChange={setReadReceipts} color="secondary"> <span className="text-[var(--color-text)] text-sm">Enable read receipts</span> </Switch>
      <div className="flex justify-end">
      <Button className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)]">Save</Button>
      </div>
      </CardBody>
      </Card>

      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-4 flex items-center justify-between">
      <h3 className="text-[var(--color-text)] font-semibold">Subscription</h3>
      <Chip variant="flat" className="rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] text-xs">Free</Chip>
      </CardHeader>
      <CardBody className="p-4 pt-0 space-y-3">
      <p className="text-[var(--color-text)]/80 text-sm">Upgrade to unlock advanced scheduling and unlimited history.</p>
      <div className="flex justify-end">
      <Button className="rounded-full bg-[var(--color-secondary)] text-[var(--color-text)]">Upgrade</Button>
      </div>
      </CardBody>
      </Card>
      </div>
      </section>
      </div>
    </div>
  );
}
