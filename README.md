# OnaWhim - Fashion Accessories E-Catalog

A modern, responsive e-catalog website for OnaWhim, showcasing a curated collection of fashion accessories that blend thoughtful design with spontaneous creativity.

## About OnaWhim

OnaWhim represents the perfect fusion of thoughtful design and spontaneous creativity. Our carefully curated collection of accessories embodies the spirit of living in the moment while maintaining an eye for timeless elegance.

### Brand Values
- **Quality Craftsmanship**: Attention to detail in every piece
- **Creative Inspiration**: Designs that inspire confidence and creativity
- **Sustainable Practices**: Ethical sourcing and responsible production

### The Story Behind the Craft

Every piece is more than just an accessory—it's a narrative woven with care, tradition, and creativity. Inspired by cultural motifs and handmade using time-honored techniques, each item tells a unique story while maintaining our signature aesthetic of modern elegance.

## Features

- **Interactive Product Showcase**: Tilted card animations with hover effects
- **Product Modal System**: Detailed product views with navigation
- **Instagram Integration**: Live Instagram feed display
- **Responsive Design**: Optimized for all devices
- **Dark/Light Mode**: Automatic theme switching based on user preference
- **WhatsApp Integration**: Direct customer communication


## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component system (New York style)
- **TypeScript**: Full TypeScript support
- **Fonts**: Geist Sans and Geist Mono font families

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/andiahyaul/-OnaWhim.git
cd -OnaWhim
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
├── app/                    # Next.js App Router pages and layouts
│   ├── globals.css        # Global styles with CSS custom properties
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Homepage component
├── components/            # Reusable React components
│   └── ui/               # UI components (shadcn/ui)
├── lib/                  # Utility functions and shared logic
│   └── utils.ts          # Contains cn() utility for conditional class merging
├── public/               # Static assets
└── components.json       # shadcn/ui configuration
```

## Collections

The website features four main collections:
- **Collection #1**: Curated accessories with modern elegance
- **Collection #2**: Style and spontaneity blend
- **Collection #3**: Cultural motifs with contemporary design
- **Collection #4**: Handcrafted pieces with traditional techniques

## Social Media

Follow OnaWhim on Instagram: [@onawhim._](https://www.instagram.com/onawhim._/)

## Contact

For inquiries and orders, use the integrated WhatsApp button on the website for direct communication.

## License

© 2024 OnaWhim. All rights reserved.
