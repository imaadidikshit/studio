'use client';

import Link from 'next/link';
import { Bot, Github, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-1.5c-1.1 0-1.5.7-1.5 1.5V12h3l-.5 3h-2.5v6.95A10.02 10.02 0 0 0 22 12z"/>
    </svg>
);


export default function SignUpPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/signup/success');
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };
  
  const leftPanelVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen w-full lg:grid lg:grid-cols-2 bg-background">
      {/* Left Panel: Branding & Visual */}
      <motion.div 
        className="relative hidden lg:flex flex-col items-center justify-between bg-card/10 p-10"
        variants={leftPanelVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full">
            <Link href="/" className="flex items-center space-x-2 text-foreground">
                <Bot className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold font-headline">Nebula AI</span>
            </Link>
        </div>
        <div className="relative z-10 w-full max-w-md text-left my-auto">
            <h1 className="text-4xl font-bold text-white tracking-tight">Begin your journey into the future of data.</h1>
            <p className="mt-4 text-lg text-muted-foreground">Join thousands of innovators who are turning complex data into actionable intelligence.</p>
        </div>
        <div className="relative z-10 w-full max-w-md text-left bg-black/30 backdrop-blur-md p-6 rounded-xl border border-white/10">
            <blockquote className="text-lg text-foreground italic">
              "This platform has completely revolutionized our data workflows. The insights we've gained are invaluable, and the UI is simply beautiful."
            </blockquote>
            <p className="mt-4 font-semibold text-white">- CEO, Quantum Inc.</p>
        </div>
        <Image
            src="https://picsum.photos/seed/signup/1200/1800"
            alt="Abstract background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0 opacity-20"
            data-ai-hint="abstract tech"
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-transparent to-background/20"></div>
      </motion.div>

      {/* Right Panel: Sign-up Form */}
      <div className="flex items-center justify-center p-6 sm:p-12 relative overflow-hidden">
        <div className="absolute w-[30rem] h-[30rem] rounded-full bg-primary/20 blur-[120px] animate-pulse-slow-2 -top-1/4 -right-1/4" />
        <div className="absolute w-[25rem] h-[25rem] rounded-full bg-accent/10 blur-[100px] animate-pulse-slow-3 -bottom-1/4 -left-1/4" />

        <motion.div
            className="z-10 mx-auto max-w-sm w-full"
            variants={formVariants}
            initial="hidden"
            animate="visible"
        >
          <div className="text-center mb-8 lg:text-left">
            <CardTitle className="text-3xl font-headline tracking-tight">Create Your Account</CardTitle>
            <CardDescription className="mt-2">
              Join the future of data analysis. It's free to get started.
            </CardDescription>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Max" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Robinson" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full mt-2 rounded-full font-bold text-lg py-6">
              Create an account
            </Button>
          </form>
          <div className="my-6 flex items-center">
              <Separator className="flex-1" />
              <span className="mx-4 text-xs text-muted-foreground">OR CONTINUE WITH</span>
              <Separator className="flex-1" />
          </div>
           <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="rounded-full py-5">
                  <GoogleIcon className="mr-2 h-4 w-4" /> Google
              </Button>
              <Button variant="outline" className="rounded-full py-5">
                  <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            Already have an account? <Button asChild variant="link" className="px-1.5 text-accent"><Link href="#">Sign In</Link></Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
