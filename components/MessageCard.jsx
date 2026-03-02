import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Chip, Button } from "@heroui/react";
import { ClockIcon } from "@heroicons/react/24/outline";

export default function MessageCard({
  title,
  excerpt,
  status,
  scheduledFor,
  onEdit,
  onDelete
}) {
  return (
    <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl hover:shadow-[var(--color-primary)]/20 transition-shadow">
      <CardHeader className="flex items-center justify-between p-4">
        <h4 className="text-[var(--color-text)] font-semibold text-base">{title}</h4>
        <div className="flex items-center gap-2">
          {status && (
            <Chip
              variant="flat"
              className="rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] text-xs"
            >
              {status}
            </Chip>
          )}
          {scheduledFor && (
            <div className="flex items-center gap-1">
              <ClockIcon className="w-4 h-4 text-[var(--color-text)]" />
              <span className="text-[var(--color-text)] text-xs">{scheduledFor}</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardBody className="p-4 pt-0">
        <p className="text-[var(--color-text)]/90 text-sm line-clamp-3">{excerpt}</p>
      </CardBody>
      <CardFooter className="p-4 pt-0 flex items-center justify-end gap-2">
        {onEdit && (
          <Button
            size="sm"
            variant="bordered"
            className="rounded-full border-[var(--color-border)] text-[var(--color-text)]"
            onPress={onEdit}
          >
            Edit
          </Button>
        )}
        {onDelete && (
          <Button
            size="sm"
            color="danger"
            className="rounded-full text-[var(--color-text)]"
            onPress={onDelete}
          >
            Delete
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
