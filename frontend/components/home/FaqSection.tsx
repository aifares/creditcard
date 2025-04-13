import { Card, CardBody, CardHeader, Chip, Divider } from "@heroui/react";

export function FaqSection() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Chip
              color="primary"
              variant="flat"
              className="bg-primary/10 text-primary font-medium"
            >
              FAQ
            </Chip>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">
              Frequently asked questions
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to know about RewardTravel
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
          <FaqCard
            question="How does RewardTravel find better redemptions?"
            answer="We search across dozens of loyalty programs, transfer partners, and booking options to find the highest value redemptions for your specific points balance. Our algorithms consider factors like transfer bonuses, sweet spots, and hidden availability."
          />

          <FaqCard
            question="Is my points information secure?"
            answer="Absolutely. We use bank-level encryption and never store your login credentials. You can also choose to enter your points balances manually if you prefer not to connect accounts."
          />

          <FaqCard
            question="Can I cancel my subscription anytime?"
            answer="Yes, you can cancel your subscription at any time with no questions asked. Your subscription will remain active until the end of your current billing period."
          />

          <FaqCard
            question="Which loyalty programs do you support?"
            answer="We support all major credit card points programs (Amex MR, Chase UR, Capital One, Citi TY), airline programs (United, Delta, American, and dozens more), and hotel programs (Marriott, Hilton, Hyatt, IHG, etc.)."
          />
        </div>
      </div>
    </section>
  );
}

interface FaqCardProps {
  question: string;
  answer: string;
}

function FaqCard({ question, answer }: FaqCardProps) {
  return (
    <Card className="transition-all hover:shadow-lg bg-white border-gray-100">
      <CardHeader>
        <p className="text-lg font-semibold text-gray-900">{question}</p>
      </CardHeader>
      <Divider className="bg-gray-100" />
      <CardBody>
        <p className="text-sm text-gray-600">{answer}</p>
      </CardBody>
    </Card>
  );
}
