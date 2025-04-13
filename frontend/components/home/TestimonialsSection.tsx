import { Card, CardBody, CardHeader, Chip, Divider } from "@heroui/react";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
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
              Testimonials
            </Chip>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">
              Loved by travelers worldwide
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how RewardTravel has helped travelers maximize their points
              and enjoy dream vacations.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            initials="JD"
            name="James D."
            location="Chicago, IL"
            quote="I booked a business class flight to Tokyo that would have cost $6,000, but I only used 75,000 points thanks to RewardTravel's recommendations. Incredible value!"
          />

          <TestimonialCard
            initials="SM"
            name="Sarah M."
            location="Austin, TX"
            quote="The transfer bonus alerts alone have saved me thousands of points. I was able to book my honeymoon with 30% fewer points than I expected to spend."
          />

          <TestimonialCard
            initials="RK"
            name="Robert K."
            location="Seattle, WA"
            quote="I used to spend hours on forums trying to figure out the best way to use my points. RewardTravel does all that work for me now. It's a game-changer."
          />
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  initials: string;
  name: string;
  location: string;
  quote: string;
}

function TestimonialCard({
  initials,
  name,
  location,
  quote,
}: TestimonialCardProps) {
  return (
    <Card className="transition-all hover:shadow-lg bg-white border-gray-100">
      <CardHeader className="flex gap-3">
        <div className="rounded-full bg-primary/10 text-primary h-10 w-10 flex items-center justify-center">
          <span className="font-medium">{initials}</span>
        </div>
        <div className="flex flex-col">
          <p className="text-base font-semibold text-gray-900">{name}</p>
          <p className="text-small text-gray-500">{location}</p>
        </div>
      </CardHeader>
      <Divider className="bg-gray-100" />
      <CardBody>
        <p className="text-sm text-gray-600">{quote}</p>
      </CardBody>
    </Card>
  );
}
