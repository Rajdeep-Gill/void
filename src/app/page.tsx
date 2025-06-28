import { caller } from "@/trpc/server";
export default async function Home() {
  const data = await caller.hello({ text: "from server" });

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col gap-4">
      <h1 className="text-blue-500 text-3xl font-bold">Hi world</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
