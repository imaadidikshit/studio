'use client';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Bot, Code } from 'lucide-react';

const textToType = `[SYSTEM] Initializing Nebula AI core...
[STATUS] Core systems nominal.
[SYSTEM] Loading data models...
[MODEL] Multimodal analysis engine loaded.
[AI] Analyzing user query: "How to optimize my enterprise workflow?"
[AI] Accessing real-time data streams...
[AI] Generating response...
[RESPONSE] To optimize your enterprise workflow, consider these AI-driven steps:
  1. Automate repetitive tasks using our 'Workflow' module.
  2. Prioritize high-impact activities with predictive analytics.
  3. Integrate your toolstack for seamless data flow via Nebula API.
[SYSTEM] Awaiting next command.`;

export default function AiSimulation() {
  const [text, setText] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < textToType.length) {
        setText(prev => prev + textToType.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [isClient]);

  return (
    <section id="simulation" className="container py-12 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter">See Nebula in Action</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          Experience our AI's thought process with this live simulation.
        </p>
      </div>
      <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-primary/20 shadow-lg shadow-primary/10">
        <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <Bot className="text-primary" />
            <span className="font-mono text-sm">Nebula AI Console</span>
          </div>
          <div className="flex items-center gap-2">
             <div className="w-3 h-3 rounded-full bg-red-500"></div>
             <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
             <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="bg-background/80 p-4 rounded-lg h-80 overflow-y-auto font-mono text-sm text-green-400">
            <pre className="whitespace-pre-wrap">
              {text}
              <span className="animate-pulse">_</span>
            </pre>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
