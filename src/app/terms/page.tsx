'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(img => img.id === 'terms-hero');

export default function TermsOfServicePage() {
    const [date, setDate] = useState('');

    useEffect(() => {
        setDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
    }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
         <section className="relative py-20 md:py-32 bg-background/80">
            <div className="absolute inset-0 z-0">
                {heroImage && (
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        objectFit="cover"
                        className="opacity-20"
                        data-ai-hint={heroImage.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
            </div>
            <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter">Terms of Service</h1>
                <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
                    The rules of our collaboration.
                </p>
            </div>
        </section>
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 prose prose-invert max-w-4xl">
            <p className="text-muted-foreground">Last updated: {date}</p>

            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
            <p>
                By using our services, you agree to be bound by these Terms. If you don’t agree to be bound by these Terms, do not use the services.
            </p>

            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">2. Your Account</h2>
            <p>
                You may need to create an account to use some of our services. You are responsible for safeguarding your account, so use a strong password and limit its use to this account. We cannot and will not be liable for any loss or damage arising from your failure to comply with the above.
            </p>

            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">3. Content</h2>
            <p>
                You are responsible for your use of the services and for any content you provide, including compliance with applicable laws, rules, and regulations. You should only provide content that you are comfortable sharing with others.
            </p>

            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">4. Termination</h2>
            <p>
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            
            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">5. Limitation of Liability</h2>
            <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEBULA AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (i) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES; (ii) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES; (iii) ANY CONTENT OBTAINED FROM THE SERVICES; OR (iv) UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.
            </p>
            
            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p>
                If you have any questions about these Terms, please contact us at <a href="mailto:legal@nebula.ai" className="text-primary hover:underline">legal@nebula.ai</a>.
            </p>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
