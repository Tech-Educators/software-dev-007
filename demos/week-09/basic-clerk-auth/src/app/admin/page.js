import { auth } from "@clerk/nextjs";

export default function AdminPage() {
  const { userId } = auth();

  // stop anyone that isn't Tim from viewing the page
  // here we might instead make a SQL query that gets all the admin ids
  // then return this if the userId doesn't appear in the results
  if (userId !== "user_2bdDMOEDDYc1r6APbMho52Hj386") {
    return <p>Uh uh uh! YOu didn&apos;t say the magic word.</p>;
  }

  return (
    <div>
      <p>This is a very important secret page that only Tim can view.</p>
    </div>
  );
}

// user_2bdDMOEDDYc1r6APbMho52Hj386
