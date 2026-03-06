const en = {
  nav: {
    home: 'Home',
    docs: 'Docs',
    github: 'GitHub'
  },
  common: {
    languageLabel: 'Language'
  },
  home: {
    kicker: 'WebMCP Polyfill & Enhancement',
    title: 'Page MCP SDK',
    subtitle:
      'Let web pages explain tools, resources, and workflows to AI agents through an MCP-aligned protocol.',
    primaryCta: 'Get Started',
    secondaryCta: 'View on GitHub',
    sourceLabel: 'Synced to main',
    sourceCommit: 'dec39e3',
    installCommand: 'npm install @page-mcp/core @page-mcp/chat',
    cards: [
      {
        title: 'WebMCP Tool Alignment',
        body: 'Implements registerTool-compatible fields with native/polyfill auto-detection.'
      },
      {
        title: 'Resources + Skills',
        body: 'Adds page resources and multi-step skills beyond baseline WebMCP capability.'
      },
      {
        title: 'Framework Adapters',
        body: 'Ready packages for React, Vue 3, and Vue 2 plus embeddable chat widget.'
      }
    ]
  },
  docs: {
    title: 'Documentation',
    subtitle: 'Production skeleton with source-backed content from repository main.',
    quickStart: 'Quick Start',
    api: 'API',
    faq: 'FAQ',
    packageTitle: 'Packages',
    packageCards: [
      { name: '@page-mcp/core', desc: 'Host, client, event bus, skill runner, polyfill', size: '~13 KB' },
      { name: '@page-mcp/chat', desc: 'Embeddable AI widget with OpenAI-compatible API', size: '~38 KB' },
      { name: '@page-mcp/react', desc: 'Provider + hooks adapter for React', size: '~3 KB' },
      { name: '@page-mcp/vue3', desc: 'Plugin + composables adapter for Vue 3', size: '~3 KB' },
      { name: '@page-mcp/vue2', desc: 'Plugin + mixin adapter for Vue 2', size: '~2 KB' }
    ]
  },
  quickStartPage: {
    title: 'Quick Start',
    subtitle: 'Install core packages, register tools, and connect an AI client.',
    installTitle: 'Install',
    installCode: `npm install @page-mcp/core\n# optional chat widget\nnpm install @page-mcp/chat\n# optional framework adapters\nnpm install @page-mcp/react @page-mcp/vue3 @page-mcp/vue2`,
    exampleTitle: 'Basic Example (Vanilla)',
    exampleCode: `import { PageMcpHost, PageMcpClient, EventBus, installWebMcpPolyfill } from '@page-mcp/core';\n\nconst bus = new EventBus();\nconst host = new PageMcpHost({ name: 'my-app', version: '1.0', bus });\n\nhost.registerTool({\n  name: 'searchProducts',\n  description: 'Search products by keyword',\n  inputSchema: {\n    type: 'object',\n    properties: { keyword: { type: 'string' } },\n    required: ['keyword']\n  },\n  execute: async (input) => searchProducts(input.keyword)\n});\n\nhost.start();\ninstallWebMcpPolyfill(host);\n\nconst client = new PageMcpClient({ bus });\nawait client.connect();\nconst result = await client.callTool('searchProducts', { keyword: 'headphones' });`,
    tipsTitle: 'Implementation Notes',
    tips: [
      'Share one EventBus instance between host and client in the same page context.',
      'Call host.start() before client.connect() to avoid connection errors.',
      'Use inputSchema + annotations.readOnlyHint to match WebMCP expectations.',
      'Use registerResource and registerSkill for richer capabilities beyond tool calls.'
    ]
  },
  apiPage: {
    title: 'API Reference',
    subtitle: 'Public APIs exported from @page-mcp/core, @page-mcp/chat, and @page-mcp/react.',
    coreTitle: '@page-mcp/core',
    coreMethods: [
      { name: 'new EventBus({ timeout? })', desc: 'RPC transport between host and client.' },
      { name: 'new PageMcpHost({ name, version, bus? })', desc: 'Page-side capability registry.' },
      { name: 'host.registerTool(def)', desc: 'Register MCP-aligned tool action.' },
      { name: 'host.registerResource(def)', desc: 'Register readable resource by URI.' },
      { name: 'host.registerSkill(def)', desc: 'Register multi-step workflow.' },
      { name: 'host.registerPrompt(def)', desc: 'Register prompt cards for AI widget.' },
      { name: 'host.start()', desc: 'Start RPC listener and publish readiness.' },
      { name: 'new PageMcpClient({ bus?, connectTimeout? })', desc: 'AI-side invocation client.' },
      { name: 'client.connect()', desc: 'Connect and get HostInfo.' },
      { name: 'client.listTools()/callTool()', desc: 'Discover and invoke tools.' },
      { name: 'client.listResources()/readResource()', desc: 'Read exposed page resources.' },
      { name: 'client.listSkills()/executeSkill()', desc: 'Run skills and receive SkillResult.' },
      { name: 'installWebMcpPolyfill(host, opts?)', desc: 'Polyfill navigator.modelContext in non-native browsers.' }
    ],
    chatTitle: '@page-mcp/chat',
    chatMethods: [
      { name: 'init(config)', desc: 'Mount chat widget and connect OpenAI-compatible backend.' },
      { name: 'config.openai', desc: 'Direct OpenAI config (apiKey/baseURL/model).' },
      { name: 'config.endpoint', desc: 'Proxy endpoint alternative to direct OpenAI mode.' },
      { name: 'config.theme/position/expandMode', desc: 'Visual and behavior controls.' },
      { name: 'widget.open()/close()/destroy()', desc: 'Programmatic lifecycle control.' }
    ],
    reactTitle: '@page-mcp/react',
    reactMethods: [
      { name: '<PageMcpProvider name version>', desc: 'Provides host/client/bus through React context.' },
      { name: 'usePageMcpHost/usePageMcpClient/usePageMcpBus', desc: 'Access MCP instances in components.' },
      { name: 'useRegisterTool/useRegisterResource/useRegisterSkill/useRegisterPrompt', desc: 'Declarative registration hooks.' }
    ]
  },
  faqPage: {
    title: 'FAQ',
    subtitle: 'Common integration questions from the current repository behavior.',
    items: [
      {
        q: 'Do I need browser native WebMCP support to use this SDK?',
        a: 'No. The SDK provides installWebMcpPolyfill and auto-detection, so core flows still work in regular browsers.'
      },
      {
        q: 'What is required at minimum?',
        a: 'Only @page-mcp/core is required. Chat widget and framework adapters are optional extensions.'
      },
      {
        q: 'How do host and client communicate?',
        a: 'Through EventBus RPC. In one page, share the same EventBus instance between PageMcpHost and PageMcpClient.'
      },
      {
        q: 'Are resources and skills part of WebMCP standard?',
        a: 'No. Tools are WebMCP-aligned; resources and skills are SDK enhancements.'
      },
      {
        q: 'Can the chat widget use non-OpenAI backends?',
        a: 'Yes. It supports OpenAI-compatible endpoints through baseURL or endpoint proxy configuration.'
      },
      {
        q: 'How can I confirm exact API details?',
        a: 'Check packages/core/src/index.ts and related package READMEs in main@dec39e3 for authoritative exports.'
      }
    ]
  },
  footer: {
    text: 'Page MCP SDK official site.'
  }
};

module.exports = en;
