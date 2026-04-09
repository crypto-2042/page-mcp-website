const en = {
  nav: {
    home: 'Home',
    docs: 'Docs',
    example: 'Example',
    github: 'GitHub'
  },
  common: {
    languageLabel: 'Language',
    apiLabel: 'API',
    descriptionLabel: 'Description'
  },
  home: {
    kicker: 'Official SDK, browser adapter, and extension',
    title: 'Page MCP',
    subtitle:
      'Build AI-ready web pages with the SDK, bridge browser-facing WebMCP flows with the adapter, and use the browser extension to discover page capabilities.',
    primaryCta: 'Read SDK Docs',
    secondaryCta: 'View SDK on GitHub',
    sourceLabel: 'Stable versions',
    sourceCommit: 'SDK 3.1.0 · Plugin 1.2.3',
    installCommand: 'npm install @page-mcp/core @page-mcp/webmcp-adapter',
    terminalHead: 'root@page-mcp:~',
    terminalLine1: 'register tools, resources, prompts, and skill extensions',
    terminalLine2: 'connect local clients or the browser extension',
    terminalStatus: 'status: ready',
    cards: [
      {
        title: 'Page Runtime',
        body: 'Expose tools, resources, prompts, and Page MCP skill extensions from your page with host/client runtime primitives.'
      },
      {
        title: 'Browser Extension',
        body: 'The Chrome extension auto-discovers page capabilities, reads resources, surfaces prompts, calls tools, and can inject chat when needed.'
      },
      {
        title: 'Adapters & UI',
        body: 'Add protocol types, WebMCP adapter helpers, embeddable chat, and React/Vue integrations only where your app needs them.'
      }
    ]
  },
  docs: {
    kicker: 'SDK DOCS',
    title: 'SDK Documentation',
    subtitle: 'Current package docs aligned with the shipped SDK and browser adapter layers.',
    quickStart: 'Quick Start',
    api: 'API',
    faq: 'FAQ',
    packageTitle: 'Packages',
    packageCards: [
      { name: '@page-mcp/protocol', desc: 'Shared MCP, WebMCP, and Page MCP types/constants', size: 'types' },
      { name: '@page-mcp/core', desc: 'Runtime host, client, EventBus, and capability registry', size: 'runtime' },
      { name: '@page-mcp/webmcp-adapter', desc: 'Browser adapter, native detection, and polyfill helpers', size: 'adapter' },
      { name: '@page-mcp/chat', desc: 'Embeddable chat widget for OpenAI-compatible or proxy backends', size: 'widget' },
      { name: '@page-mcp/react', desc: 'Provider and hooks for React apps', size: 'React' },
      { name: '@page-mcp/vue3', desc: 'Plugin and composables for Vue 3 apps', size: 'Vue 3' },
      { name: '@page-mcp/vue2', desc: 'Plugin and mixin helpers for Vue 2 apps', size: 'Vue 2' }
    ]
  },
  quickStartPage: {
    kicker: 'QUICK START',
    title: 'Quick Start',
    subtitle: 'Install the runtime, optionally add the browser adapter, and connect a local client.'
  },
  apiPage: {
    kicker: 'API REFERENCE',
    title: 'API Reference',
    subtitle: 'Public surfaces across the runtime, browser adapter, chat widget, and framework integrations.',
    coreTitle: '@page-mcp/core',
    coreMethods: [
      { name: 'new EventBus({ timeout? })', desc: 'In-memory RPC transport for same-page or shared-context setups.' },
      { name: 'new PageMcpHost({ name, version, strictProtocol?, bus?, transport?, skills? })', desc: 'Register tools, resources, prompts, and skills on the page side.' },
      { name: 'host.registerTool()/unregisterTool()', desc: 'Manage page-exposed tools.' },
      { name: 'host.registerResource()/unregisterResource()', desc: 'Manage readable page resources by URI.' },
      { name: 'host.registerPrompt()/unregisterPrompt()', desc: 'Manage reusable prompt entries.' },
      { name: 'host.registerSkill()/unregisterSkill()', desc: 'Manage Page MCP extension workflows.' },
      { name: 'host.start()/destroy()', desc: 'Start or tear down the host runtime.' },
      { name: 'new PageMcpClient({ bus?, transport?, connectTimeout? })', desc: 'Create a caller for the page-side host.' },
      { name: 'client.connect()/disconnect()', desc: 'Open or close the client connection.' },
      { name: 'client.listTools()/callTool()', desc: 'Discover and invoke tools.' },
      { name: 'client.listResources()/readResource()', desc: 'List and read page resources.' },
      { name: 'client.listPrompts()/getPrompt()', desc: 'List prompts and resolve prompt payloads.' },
      { name: 'Extensions.createSkillsClient(client)', desc: 'Create a skills client for Page MCP skill extensions.' }
    ],
    protocolTitle: '@page-mcp/protocol',
    protocolMethods: [
      {
        name: 'PageMcpToolDefinition / ResourceDefinition / PromptDefinition',
        desc: 'Shared registration types for tools, resources, and prompts.'
      },
      {
        name: 'AnthropicMcpTool / Resource / Prompt',
        desc: 'MCP-compatible protocol shapes exported for adapters and tooling.'
      },
      {
        name: 'MCP_METHODS',
        desc: 'Constants for MCP request / response method names.'
      }
    ],
    adapterTitle: '@page-mcp/webmcp-adapter',
    adapterMethods: [
      { name: 'installWebMcpPolyfill(host, opts?)', desc: 'Expose a browser-facing modelContext polyfill for a PageMcpHost.' },
      { name: 'isWebMcpSupported()', desc: 'Detect whether the browser already provides a native WebMCP surface.' },
      { name: 'toWebMcpTool()/fromWebMcpTool()', desc: 'Convert between WebMCP-style tool objects and Page MCP definitions.' }
    ],
    chatTitle: '@page-mcp/chat',
    chatMethods: [
      { name: 'init(config)', desc: 'Mount the chat widget and bind it to your Page MCP runtime.' },
      { name: 'getInstance()/destroy()', desc: 'Access or tear down the singleton widget instance.' },
      { name: 'config.openai', desc: 'Direct OpenAI-compatible settings such as apiKey, model, and baseURL.' },
      { name: 'config.endpoint', desc: 'Send chat traffic through your own backend endpoint instead of direct API mode.' },
      { name: 'config.bus/defaultAttachedResources', desc: 'Reuse a shared bus and preselect resources for the widget.' },
      { name: 'config.theme/position/expandMode', desc: 'Configure visual presentation and widget behavior.' },
      { name: 'widget.open()/close()/destroy()', desc: 'Programmatically control the widget lifecycle.' }
    ],
    reactTitle: 'Adapters & Integrations',
    reactMethods: [
      { name: '@page-mcp/react PageMcpProvider/usePageMcp*', desc: 'Provide and access host, client, and bus from React components.' },
      { name: '@page-mcp/react useRegisterTool/useRegisterResource/useRegisterPrompt/useRegisterSkill', desc: 'Register capabilities declaratively with React lifecycle hooks.' },
      { name: '@page-mcp/react usePageMcpSkills()', desc: 'Access the Page MCP skills extension client from React.' },
      { name: '@page-mcp/vue3 PageMcpPlugin/PageMcpProvider/composables', desc: 'Integrate Page MCP with Vue 3 apps.' },
      { name: '@page-mcp/vue2 PageMcpPlugin/pageMcpMixin', desc: 'Integrate Page MCP with Vue 2 apps.' }
    ]
  },
  faqPage: {
    kicker: 'FAQ',
    title: 'FAQ',
    subtitle: 'Common questions based on the current SDK, adapter, chat, and extension behavior.'
  },
  footer: {
    text: 'Official website for Page MCP.'
  }
};

module.exports = en;
