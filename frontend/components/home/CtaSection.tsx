import Link from "next/link";
import { Button } from "@heroui/react";

export function CtaSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5 border-t border-b border-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">
              Ready to maximize your travel points?
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of travelers who are getting more value from their
              points with RewardTravel.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
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
              className="text-gray-700 border-gray-300 hover:bg-gray-50 font-medium"
            >
              See How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
