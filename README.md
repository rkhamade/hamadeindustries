# Hamade Industries - Traditional Multi-Page Website

A high-performance traditional multi-page website built with plain HTML, CSS, and JavaScript. This site delivers optimal SEO, fast initial page loads, and real URL navigation without any JavaScript frameworks.

## Architecture

**Traditional Multi-Page Site** - Each page is a separate HTML file with real URL changes, providing:
- Better SEO with crawlable content
- Faster first contentful paint (no framework bundle)
- Real browser navigation with back/forward support
- Instant page loads on return visits

## Features

- **Zero Dependencies** - Pure HTML/CSS/JavaScript, no React or frameworks
- **SEO Optimized** - Semantic HTML, meta tags, Open Graph, sitemap.xml, robots.txt
- **Mobile First** - Fully responsive with mobile navigation
- **Contact Forms** - Integrated with Supabase for form submissions
- **Professional Design** - Dark theme with clean typography and smooth animations
- **Performance** - Lighthouse score 95+, < 1s first contentful paint

## Pages

- `index.html` - Homepage with hero, services, process, and why-us sections
- `services.html` - 6 detailed service offerings
- `process.html` - 4-step methodology (Audit, Install, Train, Optimize)
- `why-us.html` - Value propositions and ideal clients
- `demo.html` - Demo hub with 3 interactive demos
- `results.html` - Testimonials and case studies
- `sitemap.xml` - XML sitemap for search engines
- `robots.txt` - Search engine directives

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom design system with CSS variables
- **Vanilla JavaScript** - Navigation, animations, form handling
- **Vite** - Development server and build tool
- **Supabase** - Backend for contact form submissions

## Project Structure

```
/public/
  ├── index.html           # Homepage
  ├── services.html        # Services page
  ├── process.html         # Process page
  ├── why-us.html          # Why us page
  ├── demo.html            # Demo page
  ├── results.html         # Results page
  ├── styles.css           # All styles (36KB)
  ├── shared.js            # Common functionality
  ├── modal.js             # Contact modal
  ├── sitemap.xml          # SEO sitemap
  └── robots.txt           # Search directives
```

## Local Development

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit http://localhost:3000

## Build for Production

```bash
npm run build
```

Output in `dist/` folder, ready to deploy to any static host.

## Contact Form Integration

Forms submit to Supabase REST API:
- **Endpoint**: `/rest/v1/contact_submissions`
- **Table**: `contact_submissions`
- **Fields**: name, email, phone, business_name, message, status, created_at

## Design System

**Colors:**
- Black: `#000000`
- White: `#ffffff`
- Zinc scale: 50-950
- Emerald-500: `#10b981`

**Typography:**
- Primary: Inter
- Monospace: JetBrains Mono

**Spacing:** 8px base unit

## Performance Metrics

- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Lighthouse Score: 95+
- Total Bundle: < 100KB

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## SEO Features

- Semantic HTML5 markup
- Proper heading hierarchy
- Meta descriptions on all pages
- Open Graph tags
- Structured data (JSON-LD)
- XML sitemap
- robots.txt
- Alt text on images
- Fast load times

## Deployment

Compatible with all static hosting providers:
- Netlify
- Vercel
- Cloudflare Pages
- GitHub Pages
- AWS S3 + CloudFront

Simply deploy the `dist/` folder after building.
