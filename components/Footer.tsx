import { Wallet } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Wallet className="h-6 w-6" />
              <span className="text-xl font-bold">PayStream</span>
            </Link>
            <p className="text-slate-400">
              Revolutionizing payments for the digital age with real-time streaming capabilities.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-slate-400 hover:text-white">Features</Link></li>
              <li><Link href="#pricing" className="text-slate-400 hover:text-white">Pricing</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white">Documentation</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white">API Reference</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-slate-400 hover:text-white">About</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white">Blog</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white">Careers</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-slate-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white">Terms of Service</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>© {new Date().getFullYear()} PayStream. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}