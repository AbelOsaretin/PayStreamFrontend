import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?auto=format&fit=crop&q=80"
              alt="About PayStream"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">About PayStream</h2>
            <p className="text-lg text-muted-foreground mb-6">
              PayStream is revolutionizing the way payments work in the digital age. Our mission is to make continuous, real-time payments accessible to everyone.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">$500M+</div>
                  <p className="text-sm text-muted-foreground">Processed Monthly</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <p className="text-sm text-muted-foreground">Uptime</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-sm text-muted-foreground">Support</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}