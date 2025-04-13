import Link from "next/link";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Button,
} from "@heroui/react";
import { CheckCircle } from "lucide-react";

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Chip
              color="primary"
              variant="flat"
              className="bg-primary/10 text-primary font-medium"
            >
              Pricing
            </Chip>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">
              Simple, transparent pricing
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that's right for your travel needs
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
          <PricingCard
            title="Free"
            price="$0"
            description="Perfect for casual travelers"
            features={[
              "Basic points tracking",
              "Limited award searches",
              "Basic value calculator",
              "Public transfer bonus alerts",
            ]}
            buttonText="Get Started"
          />

          <PricingCard
            title="Premium"
            price="$9.99"
            period="/month"
            description="For frequent travelers"
            features={[
              "Everything in Free",
              "Unlimited award searches",
              "Advanced value calculator",
              "Real-time availability alerts",
              "Priority email support",
            ]}
            buttonText="Start 7-Day Free Trial"
            popular
          />

          <PricingCard
            title="Elite"
            price="$19.99"
            period="/month"
            description="For power users and families"
            features={[
              "Everything in Premium",
              "SMS alerts for rare awards",
              "Personalized redemption advice",
              "Family pooling tools",
              "Priority phone support",
            ]}
            buttonText="Start 7-Day Free Trial"
          />
        </div>
      </div>
    </section>
  );
}

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  popular = false,
}: PricingCardProps) {
  return (
    <Card
      className={`transition-all hover:shadow-lg ${
        popular
          ? "border-primary shadow-md bg-white"
          : "bg-white border-gray-100"
      }`}
    >
      <CardHeader className="flex flex-col gap-1">
        {popular && (
          <Chip
            color="primary"
            variant="flat"
            className="bg-primary/10 text-primary self-start mb-2"
          >
            Most Popular
          </Chip>
        )}
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <div className="text-3xl font-bold text-gray-900">
          {price}
          {period && (
            <span className="text-sm font-normal text-gray-500">{period}</span>
          )}
        </div>
        <p className="text-small text-gray-500">{description}</p>
      </CardHeader>
      <Divider className="bg-gray-100" />
      <CardBody className="space-y-4">
        <ul className="space-y-2 text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardBody>
      <CardFooter>
        <Button
          as={Link}
          href="/signup"
          color="primary"
          fullWidth
          className="font-medium"
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
