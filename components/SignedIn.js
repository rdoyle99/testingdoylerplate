import { signOut } from "next-auth/react";
import Paying from "@/components/Paying";

export default function SignedIn() {
  return (
    <div>
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => signOut()}
      >
        Sign out
      </button>
      <Paying />
    </div>
  );
}
