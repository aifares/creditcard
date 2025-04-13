import Link from "next/link";
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import { Plane } from "lucide-react";

export function Navbar() {
  return (
    <HeroNavbar
      isBordered
      maxWidth="xl"
      className="bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-gray-100"
    >
      <NavbarBrand>
        <Plane className="h-6 w-6 text-primary" />
        <p className="font-bold text-inherit ml-2 text-gray-800">
          RewardTravel
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            href="#features"
            className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
          >
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#pricing"
            className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
          >
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
          >
            Testimonials
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#faq"
            className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
          >
            FAQ
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-600 hover:underline underline-offset-4"
          >
            Log in
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="/signup"
            color="primary"
            className="font-medium"
          >
            Sign up free
          </Button>
        </NavbarItem>
      </NavbarContent>
    </HeroNavbar>
  );
}
