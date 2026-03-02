import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@heroui/react";

export default function ConfirmDialog({
  title = "Confirm action",
  message = "Are you sure?",
  onConfirm,
  triggerLabel = "Open"
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button
        onPress={() => setOpen(true)}
        className="rounded-xl bg-[var(--color-accent)] text-[var(--color-text)] px-4 py-2 hover:opacity-90 transition"
      >
        {triggerLabel}
      </Button>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        classNames={{
          base: "bg-[var(--color-background)] text-[var(--color-text)] rounded-2xl",
          backdrop: "bg-[var(--color-background)]/50"
        }}
      >
        <ModalContent>
          <ModalHeader className="text-[var(--color-text)] text-lg font-semibold">
            {title}
          </ModalHeader>
          <ModalBody>
            <p className="text-[var(--color-text)] text-sm">{message}</p>
          </ModalBody>
          <ModalFooter>
            <Button
              onPress={() => setOpen(false)}
              variant="bordered"
              className="rounded-xl border-[var(--color-border)] text-[var(--color-text)]"
            >
              Cancel
            </Button>
            <Button
              onPress={() => {
                onConfirm && onConfirm();
                setOpen(false);
              }}
              className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]"
            >
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
