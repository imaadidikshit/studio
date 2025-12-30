import React from 'react';

const Logo = ({ name }: { name: string }) => (
    <svg 
        className="w-32 h-12 text-muted-foreground" 
        viewBox="0 0 128 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <text 
            x="50%" 
            y="50%" 
            dominantBaseline="middle" 
            textAnchor="middle" 
            fontFamily="monospace"
            fontSize="16"
            fill="currentColor"
        >
            {name}
        </text>
    </svg>
);


const partners = [
    { name: 'Quantum Inc' },
    { name: 'Stellar Corp' },
    { name: 'Pulsar LLC' },
    { name: 'Nexus Solutions' },
    { name: 'Nova Enterprises' },
    { name: 'Orion Systems' },
    { name: 'Galaxy Tech' },
];

export default function Partners() {
  const extendedPartners = [...partners, ...partners];

  return (
    <section id="partners" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto text-center">
        <p className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-8">
          Trusted by the world's most innovative companies
        </p>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee">
            {extendedPartners.map((partner, index) => (
              <div key={index} className="flex-shrink-0 w-48 mx-6 flex items-center justify-center">
                <div className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
                  <Logo name={partner.name} />
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-r from-background via-transparent to-background" />
        </div>
      </div>
    </section>
  );
}
