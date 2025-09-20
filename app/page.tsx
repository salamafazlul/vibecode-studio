import { Button } from "@/components/ui/button"
import UserButton from "@/features/auth/components/user-buttom";
import { User } from "lucide-react";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-rose-500">Home</h1>
      <UserButton/>
    </div>
  );
}
