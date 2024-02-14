import ClientSideForm from "@/components/ClientSideForm";
import ServerSideForm from "@/components/ServerSideForm";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <h3>Server Side Form</h3>
      <ServerSideForm />
      <h3>Client Side Form</h3>
      <ClientSideForm />
    </div>
  );
}
