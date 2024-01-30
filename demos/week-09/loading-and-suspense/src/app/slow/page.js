import SlowComponent from "@/components/SlowComponent";

export default function SlowPage() {
  return (
    <div>
      <h2>This page used `loading.js` while it wasn&apos;t ready</h2>
      <p>
        This is the slow page. This is static and very fast content that does
        not come from the database. I am just a p tag.
      </p>
      <p>BUT because the page contains `SlowComponent` it takes ages to load</p>
      <SlowComponent />
    </div>
  );
}
