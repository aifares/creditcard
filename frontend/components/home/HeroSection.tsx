import Link from "next/link";
import Image from "next/image";
import { Button, Chip } from "@heroui/react";

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <Chip
              color="primary"
              variant="flat"
              className="bg-primary/10 text-primary font-medium"
            >
              Maximize Your Travel Points
            </Chip>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
              Turn Your Points Into Dream Vacations
            </h1>
            <p className="max-w-[600px] text-gray-600 md:text-xl">
              RewardTravel helps you find the highest value redemptions for your
              credit card points and airline miles. Stop wasting points on
              low-value bookings.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                as={Link}
                href="/signup"
                color="primary"
                size="lg"
                className="font-medium"
              >
                Get Started Free
              </Button>
              <Button
                as={Link}
                href="#features"
                variant="bordered"
                size="lg"
                className="text-gray-700 border-gray-300 bg-white hover:bg-gray-50 font-medium"
              >
                See How It Works
              </Button>
            </div>
          </div>
          <div className="relative h-[350px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="RewardTravel dashboard preview"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
