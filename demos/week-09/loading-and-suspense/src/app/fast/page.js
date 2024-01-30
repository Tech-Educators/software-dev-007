import FlashingThing from "@/components/FlashingThing";
import SlowComponent from "@/components/SlowComponent";
import { Suspense } from "react";

export default function FastPage() {
  return (
    <div>
      <h2>This page uses `Suspense`</h2>
      <p>
        This is the fast page! This is static very fast content that does not
        come from the database. I am just a p tag.
      </p>
      <p>
        These p tags show straight away, and the suspense below will show the
        fallback, until the SlowComponent is ready
      </p>
      <Suspense fallback={<FlashingThing />}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}
