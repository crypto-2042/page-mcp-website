import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Page MCP SDK — WebMCP Polyfill & AI MCP Skills';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0a0c16 0%, #12182a 45%, #0b0f1f 100%)',
          color: '#f4f7ff',
          padding: '52px',
          border: '2px solid rgba(255, 54, 94, 0.35)'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontSize: 24, letterSpacing: 4, textTransform: 'uppercase', color: '#47f5ff' }}>
            WebMCP Polyfill & Enhancement
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: 2 }}>Page MCP SDK</div>
          <div style={{ fontSize: 36, color: '#b9c3de' }}>AI MCP Tools, Resources, and Skills</div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 26, color: '#ff365e' }}>www.page-mcp.org</div>
          <div
            style={{
              fontSize: 20,
              border: '1px solid rgba(71, 245, 255, 0.4)',
              color: '#47f5ff',
              padding: '10px 16px'
            }}
          >
            webmcp • ai mcp • mcp skills
          </div>
        </div>
      </div>
    ),
    size
  );
}
