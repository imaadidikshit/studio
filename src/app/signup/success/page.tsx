import Link from 'next/link';
import { Bot, CheckCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function SignUpSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="absolute top-4 left-4">
        <Link href="/" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
          <Bot className="h-6 w-6" />
          <span className="font-bold font-headline">Nebula AI</span>
        </Link>
      </div>
      <Card className="mx-auto max-w-sm w-full bg-card/50 backdrop-blur-sm border-primary/20 text-center">
        <CardHeader>
          <div className="mx-auto bg-primary/20 rounded-full p-3 w-fit">
            <CheckCircle className="h-12 w-12 text-primary" />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <CardTitle className="text-2xl">Congratulations!</CardTitle>
          <CardDescription>
            Your account has been successfully created. Welcome to the future of data simulation.
          </CardDescription>
          <Button asChild className="w-full">
            <Link href="/">Back to Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
