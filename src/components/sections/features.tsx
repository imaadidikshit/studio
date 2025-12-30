import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BrainCircuit, Zap, BarChart, Settings, ShieldCheck, Share2 } from "lucide-react";

const features = [
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: "Advanced AI Models",
    description: "Leverage state-of-the-art AI to uncover deep insights from your data.",
    className: "md:col-span-2",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Real-time Processing",
    description: "Analyze data streams as they happen, enabling instant decision-making.",
    className: "md:col-span-1",
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: "Predictive Analytics",
    description: "Forecast future trends and outcomes with high accuracy.",
    className: "md:col-span-1",
  },
  {
    icon: <Settings className="w-8 h-8 text-primary" />,
    title: "Customizable Workflows",
    description: "Tailor AI processes to your specific business needs with our intuitive workflow builder.",
    className: "md:col-span-2",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Enterprise-Grade Security",
    description: "Your data is protected with end-to-end encryption and robust security protocols.",
    className: "md:col-span-2",
  },
  {
    icon: <Share2 className="w-8 h-8 text-primary" />,
    title: "Seamless Integration",
    description: "Connect Nebula AI with your existing tools and platforms through our powerful API.",
    className: "md:col-span-1",
  },
];

export default function Features() {
  return (
    <section id="features" className="container py-12 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter">Powerful Features, Unlocked</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          Everything you need to transform your data into a competitive advantage.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <Card
            key={index}
            className={`
              ${feature.className} 
              bg-card/50 backdrop-blur-sm border-primary/20
              transform-gpu transition-all duration-300 ease-out
              hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20
              hover:border-primary/40
            `}
          >
            <CardHeader>
              {feature.icon}
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2 font-bold text-lg">{feature.title}</CardTitle>
              <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
