import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { SITE_NAME, SITE_URL } from '@/lib/site';

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
const bingVerification = process.env.BING_SITE_VERIFICATION;
const verification = {
  ...(googleVerification ? { google: googleVerification } : {}),
  ...(bingVerification
    ? {
        other: {
          'msvalidate.01': bingVerification
        }
      }
    : {})
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | SDK and browser extension for AI-ready web pages`,
    template: `%s | ${SITE_NAME}`
  },
  description:
    'Official Page MCP website for the SDK, browser extension, WebMCP adapter, chat widget, and framework integrations.',
  keywords: [
    'page mcp',
    'page mcp sdk',
    'page mcp extension',
    'webmcp',
    'mcp tools',
    'mcp resources',
    'mcp prompts',
    'browser extension',
    'ai agents',
    'react mcp',
    'vue mcp'
  ],
  alternates: {
    canonical: SITE_URL
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | SDK and browser extension for AI-ready web pages`,
    description:
      'Build MCP-capable pages with the SDK and discover tools, resources, prompts, and skills with the browser extension.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} SDK and browser extension`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | SDK and browser extension for AI-ready web pages`,
    description:
      'Official Page MCP docs and examples for the SDK, browser extension, and WebMCP adapter.',
    images: ['/twitter-image']
  },
  verification,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
