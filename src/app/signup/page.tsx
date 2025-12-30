'use client';

import Link from 'next/link';
import { Bot } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import {
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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
        className="relative hidden lg:flex flex-col items-start justify-between bg-card/10 p-10"
        variants={leftPanelVariants}
        initial="hidden"
        animate="visible"
      >
        <Link href="/" className="flex items-center space-x-2 text-foreground z-10">
            <Bot className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold font-headline">Nebula AI</span>
        </Link>
        
        <div className="absolute inset-0 z-0">
            <Image
                src="https://picsum.photos/seed/nebula-signup/1200/1800"
                alt="Abstract background"
                layout="fill"
                objectFit="cover"
                className="opacity-20"
                data-ai-hint="abstract technology"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
             <div className="absolute w-[30rem] h-[30rem] rounded-full bg-primary/20 blur-[120px] animate-pulse-slow-2 top-1/4 right-1/4" />
        </div>

        <div className="z-10 mt-auto">
            <h1 className="text-4xl font-bold text-white tracking-tight">The Future of Data Awaits.</h1>
            <p className="mt-4 text-lg text-muted-foreground">Begin your journey.</p>
        </div>
      </motion.div>

      {/* Right Panel: Sign-up Form */}
      <div className="flex items-center justify-center p-6 sm:p-12 relative overflow-hidden">
         <Link href="/" className="absolute top-6 left-6 flex items-center space-x-2 text-foreground z-10 lg:hidden">
            <Bot className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold font-headline">Nebula AI</span>
        </Link>

        <div className="absolute w-[30rem] h-[30rem] rounded-full bg-primary/20 blur-[120px] animate-pulse-slow-2 -top-1/4 -right-1/4" />
        <div className="absolute w-[25rem] h-[25rem] rounded-full bg-accent/10 blur-[100px] animate-pulse-slow-3 -bottom-1/4 -left-1/4" />

        <motion.div
            className="z-10 mx-auto max-w-sm w-full"
            variants={formVariants}
            initial="hidden"
            animate="visible"
        >
          <div className="text-center mb-8">
            <CardTitle className="text-3xl font-headline tracking-tight">Create Your Account</CardTitle>
            <CardDescription className="mt-2">
              It's free and takes less than a minute.
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
        </motion.div>
      </div>
    </div>
  );
}
