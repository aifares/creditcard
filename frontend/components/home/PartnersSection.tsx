import { CreditCard, Plane, Building2 } from "lucide-react";

export function PartnersSection() {
  return (
    <section className="w-full py-12 border-y bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-xl font-medium tracking-tight text-gray-900">
              Optimize points from all major programs
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex h-12 w-auto items-center justify-center p-0">
              <CreditCard className="h-8 w-8 text-primary" />
              <span className="ml-2 text-gray-700">Amex MR</span>
            </div>
            <div className="flex h-12 w-auto items-center justify-center p-0">
              <CreditCard className="h-8 w-8 text-primary" />
              <span className="ml-2 text-gray-700">Chase UR</span>
            </div>
            <div className="flex h-12 w-auto items-center justify-center p-0">
              <CreditCard className="h-8 w-8 text-primary" />
              <span className="ml-2 text-gray-700">Capital One</span>
            </div>
            <div className="flex h-12 w-auto items-center justify-center p-0">
              <Plane className="h-8 w-8 text-primary" />
              <span className="ml-2 text-gray-700">Aeroplan</span>
            </div>
            <div className="flex h-12 w-auto items-center justify-center p-0">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="ml-2 text-gray-700">Marriott</span>
            </div>
            <div className="flex h-12 w-auto items-center justify-center p-0">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="ml-2 text-gray-700">Hyatt</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
