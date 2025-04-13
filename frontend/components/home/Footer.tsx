import Link from "next/link";
import { Plane } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 py-6 md:py-0 bg-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <Plane className="h-5 w-5 text-primary" />
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} RewardTravel. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/terms"
            className="text-sm text-gray-500 hover:text-gray-900 hover:underline"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-gray-500 hover:text-gray-900 hover:underline"
          >
            Privacy
          </Link>
          <Link
            href="/contact"
            className="text-sm text-gray-500 hover:text-gray-900 hover:underline"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
