# LIMEPAK

> **Building Apps, Websites, SaaS & AI Systems for the Next Generation**

LIMEPAK is an online technology company focused on building innovative digital products, intelligent systems, and AI-powered teams.

## 🚀 Quick Start

### Development

```bash
# Clone the repository
git clone <repository-url>
cd limepak

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Production Build

```bash
# Build for production
npm run build

# Serve the static export locally
npx serve out
```

### Android APK

```bash
# Build the web app
npm run build

# Initialize Capacitor (if not done)
npx cap init

# Add Android platform
npm run android:init

# Sync web assets to Android
npm run android:sync

# Open in Android Studio
npm run android:open
```

See [ANDROID_BUILD.md](ANDROID_BUILD.md) for detailed instructions.

## 📁 Project Structure

```
limepak/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/
│   │   ├── company/
│   │   ├── download/
│   │   ├── founder/
│   │   ├── how-it-works/
│   │   ├── how-to-use/
│   │   ├── layer/
│   │   ├── products/
│   │   ├── team/
│   │   └── thanks/
│   ├── components/             # Reusable UI components
│   │   ├── common/            # Common components (Button, Card, etc.)
│   │   └── layout/            # Layout components (Navbar, Footer)
│   ├── config/                # Configuration files
│   │   └── company.ts        # Company data and configuration
│   ├── lib/                   # Utility functions and libraries
│   ├── styles/                # Global styles
│   └── types/                 # TypeScript type definitions
├── android/                  # Android project (Capacitor)
├── public/                   # Static assets
├── capacitor.config.ts        # Capacitor configuration
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── package.json              # Project dependencies and scripts
```

## 🎯 Features

- **Multi-page Application**: All navigation routes are implemented as static pages
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Secret Reveal System**: Hidden interaction to reveal classified team members
- **Modern UI**: Minimal, aesthetic, and colorful design with smooth animations
- **Android Support**: Capacitor integration for APK generation
- **SEO Optimized**: Proper metadata, Open Graph, and Twitter cards
- **Accessibility**: Keyboard navigation, ARIA labels, reduced motion support
- **Performance**: Optimized for fast loading on all devices

## 🎨 Design System

### Colors

- **Primary**: Lime Green (`#a3e635`)
- **Secondary**: Dark Gray (`#1f2937`)
- **Background**: Light Gray (`#f9fafb`)
- **Accent**: Various complementary colors

### Typography

- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Components

- **Navbar**: Fixed navigation with mobile menu
- **Footer**: Premium footer with links and information
- **Cards**: Glassmorphism and gradient variants
- **Buttons**: Multiple variants (primary, secondary, outline, ghost, glass)
- **Animations**: Smooth transitions and micro-interactions

## 🔐 Secret Switch

The application includes a hidden interaction system to reveal classified leadership positions:

- **Mechanism**: Hold the LIMEPAK logo for 3 seconds
- **Effect**: Beautiful transition revealing hidden team members
- **Persistence**: State is stored in localStorage for the session

## 📱 Android Configuration

The Android APK is configured using Capacitor with:

- **Package Name**: `com.limepak.app`
- **Minimum SDK**: 24 (Android 7.0+)
- **Target SDK**: 34 (Android 14)
- **Build Tools**: Gradle 8.1.0
- **Kotlin**: 1.9.0

## 🌐 Deployment

### Vercel

```bash
# Deploy to Vercel
vercel
```

The application is fully compatible with Vercel's Next.js deployment.

### GitHub Pages

```bash
# Build static export
npm run build

# Deploy to GitHub Pages
gh-pages -d out
```

## 📄 Configuration

### Company Data

Edit `src/config/company.ts` to update:

- Company information
- Leadership team
- Product categories
- Process steps
- Founder information
- Special thanks

### Environment Variables

Create `.env.local` based on `.env.example`:

```bash
cp .env.example .env.local
```

## 🛠️ Development

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Update navigation in `src/config/company.ts`
4. Add to the navbar if needed

### Adding New Components

1. Create a new file in `src/components/`
2. Export the component
3. Import and use in pages

### Updating Styles

1. Edit `src/app/globals.css` for global styles
2. Use Tailwind CSS classes for component styling

## 📊 Analytics

To enable analytics, add your tracking ID to `.env.local`:

```
NEXT_PUBLIC_ANALYTICS_ID=YOUR_ID
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run lint` and `npm run build`
5. Submit a pull request

## 📜 License

Private - All rights reserved.

## 📞 Contact

- **Website**: [https://limepak.vercel.app](https://limepak.vercel.app)
- **Email**: contact@limepak.com

---

**© 2026 LIMEPAK**

*Building the future, one system at a time.*
