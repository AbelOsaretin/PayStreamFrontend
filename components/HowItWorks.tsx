import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Connect Your Wallet',
      description: 'Link your digital wallet to start streaming payments securely.',
    },
    {
      number: '02',
      title: 'Set Up Stream',
      description: 'Define payment parameters including recipient, amount, and duration.',
    },
    {
      number: '03',
      title: 'Start Streaming',
      description: 'Begin streaming payments automatically with real-time tracking.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get started with PayStream in three simple steps
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-5xl font-bold text-slate-200 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button size="lg" className="gap-2">
            Start Now <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}