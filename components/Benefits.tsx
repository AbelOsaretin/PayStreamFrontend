import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export function Benefits() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose PayStream?</h2>
            <div className="space-y-6">
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Cost Effective</h3>
                  <p className="text-muted-foreground">
                    Save up to 80% on transaction fees compared to traditional payment methods.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Fully Automated</h3>
                  <p className="text-muted-foreground">
                    Set up once and let the system handle all your recurring payments.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Complete Control</h3>
                  <p className="text-muted-foreground">
                    Manage and monitor your payment streams in real-time with detailed analytics.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              alt="Payment Dashboard"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}