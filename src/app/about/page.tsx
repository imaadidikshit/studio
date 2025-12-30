import { Bot } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamMembers = [
  {
    name: 'Alex Rivera',
    role: 'CEO & Founder',
    avatarUrl: PlaceHolderImages.find(img => img.id === 'team-alex')?.imageUrl ?? '',
    avatarHint: PlaceHolderImages.find(img => img.id === 'team-alex')?.imageHint ?? '',
    bio: 'Visionary leader with a passion for leveraging AI to solve complex problems.',
  },
  {
    name: 'Samantha Chen',
    role: 'Chief Technology Officer',
    avatarUrl: PlaceHolderImages.find(img => img.id === 'team-samantha')?.imageUrl ?? '',
    avatarHint: PlaceHolderImages.find(img => img.id === 'team-samantha')?.imageHint ?? '',
    bio: 'Expert in machine learning and distributed systems, driving our technical innovation.',
  },
  {
    name: 'David Ortiz',
    role: 'Head of Product',
    avatarUrl: PlaceHolderImages.find(img => img.id === 'team-david')?.imageUrl ?? '',
    avatarHint: PlaceHolderImages.find(img => img.id === 'team-david')?.imageHint ?? '',
    bio: 'Dedicated to creating intuitive and powerful user experiences.',
  },
  {
    name: 'Maria Garcia',
    role: 'Lead Data Scientist',
    avatarUrl: PlaceHolderImages.find(img => img.id === 'team-maria')?.imageUrl ?? '',
    avatarHint: PlaceHolderImages.find(img => img.id === 'team-maria')?.imageHint ?? '',
    bio: 'Transforms complex datasets into actionable insights with advanced analytics.',
  },
];

const missionImage = PlaceHolderImages.find(img => img.id === 'mission-collaborators');
const storyImage = PlaceHolderImages.find(img => img.id === 'story-whiteboard');


export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-background">
          <div className="absolute inset-0 z-0">
             <div className="absolute w-[30rem] h-[30rem] rounded-full bg-primary/20 blur-[120px] animate-pulse-slow-2 top-1/4 right-1/4" />
          </div>
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter">About Nebula AI</h1>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
              We are a team of innovators, thinkers, and builders dedicated to revolutionizing the world of data simulation.
            </p>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold font-headline tracking-tighter">Our Mission</h2>
              <p className="mt-4 text-muted-foreground">
                At Nebula AI, our mission is to empower organizations to unlock the full potential of their data. We believe that by providing powerful, intuitive, and accessible AI-driven simulation tools, we can help businesses of all sizes make smarter decisions, foster innovation, and navigate the complexities of the modern world with confidence.
              </p>
              <p className="mt-4 text-muted-foreground">
                We are committed to pushing the boundaries of what's possible in data science, creating a future where predictive analytics and data simulation are seamlessly integrated into every workflow.
              </p>
            </div>
            <div className="order-1 md:order-2">
              {missionImage && (
                <Image
                  src={missionImage.imageUrl}
                  alt="Our Mission"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl shadow-primary/20"
                  data-ai-hint={missionImage.imageHint}
                />
              )}
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 md:py-24 bg-card/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline tracking-tighter">Meet the Innovators</h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
                The brilliant minds behind Nebula AI's success.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-primary">
                    <AvatarImage src={member.avatarUrl} alt={member.name} data-ai-hint={member.avatarHint} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
         <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              {storyImage && (
                <Image
                  src={storyImage.imageUrl}
                  alt="Our Story"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl shadow-accent/20"
                  data-ai-hint={storyImage.imageHint}
                />
              )}
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-headline tracking-tighter">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                Founded in a small garage by a group of passionate data scientists and engineers, Nebula AI was born from a shared vision: to make the power of advanced data simulation accessible to everyone. Frustrated by the limitations of existing tools, we set out to build a platform that was not only powerful but also beautiful and a joy to use.
              </p>
              <p className="mt-4 text-muted-foreground">
                From those humble beginnings, we've grown into a global team, but our core values of innovation, user-centricity, and a relentless pursuit of excellence remain unchanged.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
