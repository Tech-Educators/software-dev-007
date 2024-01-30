"use client";
import * as Popover from "@radix-ui/react-popover";
import "./popover.css";

export default function PopOverDemo() {
  return (
    <Popover.Root>
      <Popover.Trigger className="PopoverTrigger">Show info</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent">
          Some content
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
