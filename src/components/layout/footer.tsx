import { Bot, Twitter, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40">
      <div className="container max-w-screen-2xl mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">Nebula AI</span>
            </Link>
            <p className="text-sm text-muted-foreground">The future of data is here.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 col-span-1 md:col-span-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="/#features" className="text-sm text-muted-foreground hover:text-primary">Features</Link></li>
                <li><Link href="/#pricing" className="text-sm text-muted-foreground hover:text-primary">Pricing</Link></li>
                <li><Link href="/integrations" className="text-sm text-muted-foreground hover:text-primary">Integrations</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-primary">Careers</Link></li>
                <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Nebula AI. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary"><Github size={20} /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
