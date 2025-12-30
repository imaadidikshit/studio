import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { useEffect, useState } from 'react';

export default function PrivacyPolicyPage() {
    const [date, setDate] = useState('');

    useEffect(() => {
        setDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
    }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 prose prose-invert max-w-4xl">
          <h1 className="font-headline text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {date}</p>

          <p>
            Welcome to Nebula AI. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>

          <h2 className="font-headline text-2xl font-bold mt-8 mb-4">Collection of Your Information</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <ul>
            <li>
              <strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
            </li>
          </ul>

          <h2 className="font-headline text-2xl font-bold mt-8 mb-4">Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul>
            <li>Create and manage your account.</li>
            <li>Email you regarding your account or order.</li>
            <li>Enable user-to-user communications.</li>
            <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
            <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
          </ul>

          <h2 className="font-headline text-2xl font-bold mt-8 mb-4">Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2 className="font-headline text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <p className="text-muted-foreground">
            Nebula AI Inc.<br />
            123 Innovation Drive<br />
            San Francisco, CA 94105<br />
            Email: <a href="mailto:privacy@nebula.ai" className="text-primary hover:underline">privacy@nebula.ai</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
