# Nebula AI - Next Gen SaaS & AI Startup Template

**Version 1.0.0**

Nebula AI is a premium, high-performance Next.js template designed for AI startups, SaaS platforms, and data analytics companies. Built with the latest technologies including Next.js 14, React 18, Tailwind CSS, and Framer Motion, it provides a stunning, professional, and easily customizable foundation for your next project.

---

## 🌟 Key Features

- **Modern Tech Stack**:
  - **Next.js 14**: Leveraging the App Router, Server Components, and Server Actions.
  - **React 18**: For building dynamic and performant user interfaces.
  - **TypeScript**: End-to-end type safety for robust and maintainable code.
- **Professional Design & UX**:
  - **Tailwind CSS**: A utility-first CSS framework for rapid, custom styling.
  - **Shadcn UI**: A collection of accessible and beautifully designed component primitives.
  - **Framer Motion**: For fluid, GPU-accelerated animations and interactions.
  - **Glassmorphism & Dark Mode**: A premium, futuristic aesthetic that makes an impact.
- **Engaging UI Components**:
  - **Bento Grid Feature Layout**: A modern way to showcase product features.
  - **Infinite Scrolling Partner Marquee**: Display social proof with a sleek, continuous logo scroll.
  - **AI Typing Simulation**: A dynamic console to visualize AI processing.
  - **Magnetic Buttons**: Subtle, engaging hover effects to improve user interaction.
- **Ease of Customization**:
  - **Centralized Configuration**: Easily change colors, fonts, and images from a single location.
  - **Comprehensive Documentation**: Clear instructions to get you started and customize the template.
- **Core Pages Included**:
  - Homepage, About Us, Careers, Contact, Integrations, Pricing, Privacy Policy, and Terms of Service.
  - Creative and functional Sign-Up and Sign-Up Success pages.

---

## 📂 Project Structure

The project is structured to be intuitive and easy to navigate.

```
/
├── public/                  # Static assets
├── src/
│   ├── app/                 # Next.js App Router pages and layouts
│   ├── components/
│   │   ├── layout/          # Global layout components (Header, Footer)
│   │   ├── sections/        # Homepage sections (Hero, Features, etc.)
│   │   ├── ui/              # Shadcn UI components
│   │   └── magnetic-button.tsx # Custom magnetic button component
│   ├── hooks/               # Custom React hooks
│   ├── lib/
│   │   ├── utils.ts         # Utility functions
│   │   └── placeholder-images.ts # Image configuration
│   └── styles/
│       └── globals.css      # Global styles and Tailwind directives
├── next.config.mjs          # Next.js configuration
├── package.json             # Project dependencies
└── tailwind.config.ts       # Tailwind CSS configuration
```

---

## 🎨 Customization Guide

Customizing this template is straightforward. Key configurations are centralized for your convenience.

### 1. Colors

Colors are managed using CSS variables in `src/app/globals.css`. You can change the entire theme by updating the HSL values in the `:root` block.

```css
/* In src/app/globals.css */
:root {
  --background: 0 0% 4%;       /* #0a0a0a */
  --primary: 250 100% 63%;   /* #6441FF */
  --accent: 184 100% 65%;    /* #4EECFF */
  /* ...and other colors */
}
```

### 2. Fonts

The headline and body fonts are configured in `src/app/layout.tsx` using `next/font/google`. Simply import your desired fonts and apply them. The font variables are then used in `tailwind.config.ts`.

```tsx
// In src/app/layout.tsx
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';

const fontHeading = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-heading',
});

const fontBody = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-body',
});
```

### 3. Images

All placeholder images used in the template are defined in `src/lib/placeholder-images.json`. To replace them with your own, simply update the URLs in this file. This allows you to manage all your primary visual assets from a single, convenient location.

```json
// In src/lib/placeholder-images.json
{
  "placeholderImages": [
    {
      "id": "team-alex",
      "description": "Portrait of Alex Rivera",
      "imageUrl": "https://picsum.photos/seed/1/100/100",
      "imageHint": "professional portrait"
    },
    // ... more images
  ]
}
```

### 4. Navigation Links

Header and footer navigation links can be easily modified in their respective components:
- `src/components/layout/header.tsx`
- `src/components/layout/footer.tsx`

---

## 🚀 Getting Started

1.  **Install Dependencies**
    Open your terminal in the project directory and run:
    ```bash
    npm install
    ```

2.  **Run the Development Server**
    ```bash
    npm run dev
    ```

3.  **Open Your Browser**
    Navigate to [http://localhost:3000](http://localhost:3000) to see your application.
