import Link from "next/link";
import Image from "next/image";
import { Button, Chip } from "@heroui/react";
import { CheckCircle } from "lucide-react";

export function ValueSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="relative h-[350px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="RewardTravel value engine preview"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <Chip
              color="primary"
              variant="flat"
              className="bg-primary/10 text-primary font-medium"
            >
              Why RewardTravel
            </Chip>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
              Stop wasting your hard-earned points
            </h2>
            <p className="text-gray-600 md:text-xl">
              Most travelers redeem points for less than half their potential
              value. RewardTravel helps you:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>
                  Save hours of searching forums, Reddit, and airline websites
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Discover sweet spots you didn't know existed</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>
                  Prevent points from going to waste or being poorly spent
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>
                  Stay aware of valuable but time-sensitive transfer bonuses
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>
                  Become a points power user, even as a casual traveler
                </span>
              </li>
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button
                as={Link}
                href="/signup"
                color="primary"
                size="lg"
                className="font-medium"
              >
                Start Optimizing Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
