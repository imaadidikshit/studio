import { Bot, MapPin, Briefcase, BrainCircuit } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const jobOpenings = [
  {
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'Remote',
    icon: <Briefcase className="w-6 h-6 text-primary" />,
  },
  {
    title: 'AI Research Scientist',
    department: 'Research & Development',
    location: 'San Francisco, CA',
    icon: <BrainCircuit className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Product Marketing Manager',
    department: 'Marketing',
    location: 'New York, NY',
    icon: <Briefcase className="w-6 h-6 text-primary" />,
  },
    {
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Remote',
    icon: <Briefcase className="w-6 h-6 text-primary" />,
  },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-card/20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter">Join Our Mission</h1>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
              We're looking for passionate individuals to help us build the future of data. Explore our open positions and find where you fit in.
            </p>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline tracking-tighter">Current Openings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {jobOpenings.map((job) => (
                <Card key={job.title} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <CardDescription className="flex items-center gap-4 mt-2">
                          <span className='flex items-center gap-1.5'><Briefcase size={14}/> {job.department}</span>
                          <span className='flex items-center gap-1.5'><MapPin size={14}/> {job.location}</span>
                        </CardDescription>
                      </div>
                      {job.icon}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline">
                      <Link href="/contact">Apply Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
             <div className="text-center mt-16">
                <p className="text-muted-foreground">Don't see a role that fits? We're always looking for talent.</p>
                <Button asChild variant="link" className="text-primary">
                    <Link href="/contact">Get in touch</Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
