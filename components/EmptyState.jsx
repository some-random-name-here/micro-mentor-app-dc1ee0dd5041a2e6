import React from "react";
import { Card, CardBody, Button } from "@heroui/react";

export default function EmptyState({
  title = "Nothing here yet",
  description = "Get started by creating your first scheduled message.",
  actionLabel,
  onAction
}) {
  return (
    <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardBody className="flex flex-col items-center justify-center gap-3 p-8 text-center">
        <h3 className="text-[var(--color-text)] text-lg font-semibold">{title}</h3>
        <p className="text-[var(--color-text)]/80 text-sm max-w-md">{description}</p>
        {actionLabel && (
          <Button
            onPress={onAction}
            className="mt-2 rounded-full bg-[var(--color-primary)] text-[var(--color-text)] px-6"
          >
            {actionLabel}
          </Button>
        )}
      </CardBody>
    </Card>
  );
}
