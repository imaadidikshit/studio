import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const integrations = [
    { name: 'Synapse', description: 'Real-time data sync' },
    { name: 'Momentum', description: 'Workflow automation' },
    { name: 'Apex', description: 'CRM integration' },
    { name: 'Quantum', description: 'Data warehousing' },
    { name: 'Stellar', description: 'Business intelligence' },
    { name: 'Pulsar', description: 'Cloud storage connect' },
    { name: 'Nexus', description: 'API management' },
    { name: 'Orion', description: 'Team collaboration' },
];

const Logo = ({ name }: { name: string }) => (
    <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center border border-border">
      <svg 
          className="w-12 h-12 text-muted-foreground" 
          viewBox="0 0 128 128" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
      >
          <text 
              x="50%" 
              y="50%" 
              dominantBaseline="middle" 
              textAnchor="middle" 
              fontFamily="monospace"
              fontSize="24"
              fill="currentColor"
          >
              {name.substring(0, 2)}
          </text>
      </svg>
    </div>
);

export default function IntegrationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-20 md:py-32 bg-card/20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter">Seamless Integrations</h1>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
              Connect Nebula AI with the tools you already use and love.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {integrations.map((integration) => (
                <Card key={integration.name} className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors duration-300">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Logo name={integration.name} />
                    <div>
                      <CardTitle className="text-xl">{integration.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{integration.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
