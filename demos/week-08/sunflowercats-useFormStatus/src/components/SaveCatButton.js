"use client";
import { useFormStatus } from "react-dom";

export default function SaveCatButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className={pending ? "disabled" : ""}>
      {pending ? "Adding your cat" : "Save Sunflowercat"}
    </button>
  );
}
