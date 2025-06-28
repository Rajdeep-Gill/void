import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col gap-4">
      <h1 className="text-blue-500 text-3xl font-bold">Hi world</h1>
      <Button>Hi</Button>
    </div>
  );
}
