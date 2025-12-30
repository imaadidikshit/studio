'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import MagneticButton from '@/components/magnetic-button';

const pricingTiers = [
  {
    name: 'Starter',
    priceMonthly: '$49',
    priceYearly: '$490',
    description: 'For individuals and small teams starting out.',
    features: [
      '1 AI model included',
      '10,000 simulations/month',
      'Basic analytics',
      'Community support',
    ],
    isPopular: false,
  },
  {
    name: 'Pro',
    priceMonthly: '$99',
    priceYearly: '$990',
    description: 'For growing businesses that need more power.',
    features: [
      '5 AI models included',
      '100,000 simulations/month',
      'Advanced analytics',
      'Priority email support',
      'API access',
    ],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    priceMonthly: 'Custom',
    priceYearly: 'Custom',
    description: 'For large organizations with custom needs.',
    features: [
      'Unlimited AI models',
      'Unlimited simulations',
      'Predictive analytics',
      'Dedicated account manager',
      'On-premise deployment',
    ],
    isPopular: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="container py-12 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter">Flexible Pricing for Teams of All Sizes</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          Choose the perfect plan to supercharge your data analysis.
        </p>
      </div>

      <div className="flex justify-center items-center space-x-4 mb-8">
        <span className={cn("text-muted-foreground", !isYearly && "text-foreground")}>Monthly</span>
        <Switch checked={isYearly} onCheckedChange={setIsYearly} aria-label="Toggle billing cycle" />
        <span className={cn("text-muted-foreground", isYearly && "text-foreground")}>
          Yearly <span className="text-accent text-sm">(Save 15%)</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingTiers.map((tier) => (
          <Card 
            key={tier.name}
            className={cn(
                'flex flex-col bg-card/50 backdrop-blur-sm border-primary/20 transform-gpu transition-all duration-300',
                tier.isPopular ? 'border-primary shadow-2xl shadow-primary/20 animate-glow' : 'hover:-translate-y-2 hover:shadow-lg'
            )}
          >
            <CardHeader className="relative">
              {tier.isPopular && (
                <div className="absolute top-0 right-6 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  {isYearly ? tier.priceYearly : tier.priceMonthly}
                </span>
                {tier.name !== "Enterprise" && (
                    <span className="text-muted-foreground">/{isYearly ? 'year' : 'month'}</span>
                )}
              </div>
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <MagneticButton>
                <Button 
                  className={cn("w-full rounded-full", tier.isPopular && "shadow-lg shadow-primary/30")}
                  variant={tier.isPopular ? 'default' : 'outline'}
                >
                  {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </MagneticButton>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
