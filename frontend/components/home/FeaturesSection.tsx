import { Card, CardBody, CardHeader, Chip, Divider } from "@heroui/react";
import {
  Wallet,
  Search,
  TrendingUp,
  Bell,
  Star,
  Headphones,
} from "lucide-react";

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Chip
              color="primary"
              variant="flat"
              className="bg-primary/10 text-primary font-medium"
            >
              Key Features
            </Chip>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">
              Everything you need to maximize your points
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              RewardTravel simplifies the confusing world of loyalty programs,
              transfer partners, redemption options, and sweet spots.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Wallet className="h-10 w-10 text-primary" />}
            title="Points Integration"
            subtitle="Connect all your loyalty accounts in one place"
            description="Enter balances manually or link accounts via APIs. Track total balances, transfer options, and expiration dates."
          />

          <FeatureCard
            icon={<Search className="h-10 w-10 text-primary" />}
            title="Smart Search"
            subtitle="Find the best award flights and hotels"
            description="Search award availability across loyalty programs. Sort by value, cabin class, alliance, and stopovers."
          />

          <FeatureCard
            icon={<TrendingUp className="h-10 w-10 text-primary" />}
            title="Best Value Engine"
            subtitle="Discover highest-value redemptions"
            description="Shows highest-value redemptions for your points in real time. Filter by transfer partners, taxes & fees, and destination."
          />

          <FeatureCard
            icon={<Bell className="h-10 w-10 text-primary" />}
            title="Transfer Bonus Alerts"
            subtitle="Never miss a valuable transfer opportunity"
            description="Tracks ongoing and upcoming transfer bonuses. Get notified when a bonus matches a destination goal."
          />

          <FeatureCard
            icon={<Star className="h-10 w-10 text-primary" />}
            title="Watchlists & Alerts"
            subtitle="Stay on top of your dream redemptions"
            description="Save routes, hotel stays, or destinations and get alerts when availability opens up or prices drop in points."
          />

          <FeatureCard
            icon={<Headphones className="h-10 w-10 text-primary" />}
            title="Booking Assistant"
            subtitle="Step-by-step guidance to book awards"
            description="For each result, shows detailed steps to book, including where to transfer, transfer times, and booking links."
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
}

function FeatureCard({ icon, title, subtitle, description }: FeatureCardProps) {
  return (
    <Card className="transition-all hover:shadow-lg bg-white border-gray-100">
      <CardHeader className="flex gap-3">
        {icon}
        <div className="flex flex-col">
          <p className="text-lg font-semibold text-gray-900">{title}</p>
          <p className="text-small text-gray-500">{subtitle}</p>
        </div>
      </CardHeader>
      <Divider className="bg-gray-100" />
      <CardBody>
        <p className="text-sm text-gray-600">{description}</p>
      </CardBody>
    </Card>
  );
}
