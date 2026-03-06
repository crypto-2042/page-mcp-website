import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { SITE_NAME, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | WebMCP Polyfill & AI MCP Skills`,
    template: `%s | ${SITE_NAME}`
  },
  description:
    'Official Page MCP SDK site for WebMCP polyfill, AI MCP tools, resources, and skills across modern web frameworks.',
  keywords: [
    'webmcp',
    'ai mcp',
    'mcp skills',
    'page mcp sdk',
    'mcp tools',
    'mcp resources',
    'webmcp polyfill',
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
    title: `${SITE_NAME} | WebMCP Polyfill & AI MCP Skills`,
    description:
      'Build AI-ready web pages with MCP tools, resources, and skills using Page MCP SDK.'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | WebMCP Polyfill & AI MCP Skills`,
    description:
      'Official Page MCP SDK docs and examples for WebMCP-compatible AI page capabilities.'
  },
  robots: {
    index: true,
    follow: true
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
