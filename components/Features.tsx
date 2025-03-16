import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Shield, Globe, Clock } from 'lucide-react';

export function Features() {
  const features = [
    {
      title: 'Real-time Streaming',
      description: 'Stream payments in real-time with microsecond precision',
      icon: Clock,
    },
    {
      title: 'Global Payments',
      description: 'Send and receive payments from anywhere in the world',
      icon: Globe,
    },
    {
      title: 'Secure by Design',
      description: 'Enterprise-grade security with multi-layer protection',
      icon: Shield,
    },
    {
      title: 'Lightning Fast',
      description: 'Near-instant settlement with minimal fees',
      icon: Zap,
    },
  ];

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Powerful Features</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to manage streaming payments
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}