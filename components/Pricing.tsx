import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '0',
      description: 'Perfect for getting started',
      features: [
        'Up to 10 payment streams',
        'Basic analytics',
        'Email support',
        'Community access',
      ],
    },
    {
      name: 'Pro',
      price: '49',
      description: 'For growing businesses',
      features: [
        'Unlimited payment streams',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Custom integrations',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Custom payment solutions',
        'Dedicated support team',
        'SLA guarantees',
        'Custom reporting',
        'White-label options',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that best fits your needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="relative">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-muted-foreground">/month</span>}
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}