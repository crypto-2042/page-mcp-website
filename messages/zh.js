const zh = {
  nav: {
    home: '首页',
    docs: '文档',
    example: '示例站点',
    github: 'GitHub'
  },
  common: {
    languageLabel: '语言'
  },
  home: {
    kicker: 'WebMCP Polyfill 与增强',
    title: 'Page MCP SDK',
    subtitle: '让网页通过 MCP 对齐协议向 AI 主动暴露工具、资源与多步骤工作流。',
    primaryCta: '快速开始',
    secondaryCta: '查看 GitHub',
    sourceLabel: '同步 main',
    sourceCommit: 'dec39e3',
    installCommand: 'npm install @page-mcp/core @page-mcp/chat',
    cards: [
      {
        title: 'WebMCP 工具对齐',
        body: '实现与 registerTool 字段兼容，并支持原生/Polyfill 自动识别。'
      },
      {
        title: '资源与技能',
        body: '在 WebMCP 基础上扩展资源读取与多步骤技能编排能力。'
      },
      {
        title: '框架适配层',
        body: '提供 React、Vue3、Vue2 以及可嵌入聊天组件。'
      }
    ]
  },
  docs: {
    title: '文档中心',
    subtitle: '基于仓库 main 分支构建的首版可上线骨架与实质内容。',
    quickStart: '快速开始',
    api: 'API',
    faq: '常见问题',
    packageTitle: '包列表',
    packageCards: [
      { name: '@page-mcp/core', desc: 'Host、Client、EventBus、SkillRunner、Polyfill', size: '~13 KB' },
      { name: '@page-mcp/chat', desc: '兼容 OpenAI API 的可嵌入 AI 聊天组件', size: '~38 KB' },
      { name: '@page-mcp/react', desc: 'React Provider 与 Hooks 适配层', size: '~3 KB' },
      { name: '@page-mcp/vue3', desc: 'Vue3 插件与组合式 API 适配层', size: '~3 KB' },
      { name: '@page-mcp/vue2', desc: 'Vue2 插件与 mixin 适配层', size: '~2 KB' }
    ]
  },
  quickStartPage: {
    title: '快速开始',
    subtitle: '安装核心包、注册工具，并连接 AI 客户端。',
    installTitle: '安装',
    installCode: `npm install @page-mcp/core\n# 可选：聊天组件\nnpm install @page-mcp/chat\n# 可选：框架适配层\nnpm install @page-mcp/react @page-mcp/vue3 @page-mcp/vue2`,
    exampleTitle: '基础示例（Vanilla）',
    exampleCode: `import { PageMcpHost, PageMcpClient, EventBus, installWebMcpPolyfill } from '@page-mcp/core';\n\nconst bus = new EventBus();\nconst host = new PageMcpHost({ name: 'my-app', version: '1.0', bus });\n\nhost.registerTool({\n  name: 'searchProducts',\n  description: '按关键词搜索商品',\n  inputSchema: {\n    type: 'object',\n    properties: { keyword: { type: 'string' } },\n    required: ['keyword']\n  },\n  execute: async (input) => searchProducts(input.keyword)\n});\n\nhost.start();\ninstallWebMcpPolyfill(host);\n\nconst client = new PageMcpClient({ bus });\nawait client.connect();\nconst result = await client.callTool('searchProducts', { keyword: 'headphones' });`,
    tipsTitle: '实现建议',
    tips: [
      '同页场景下让 Host 与 Client 共享同一个 EventBus。',
      '先执行 host.start()，再 client.connect()，避免连接错误。',
      '使用 inputSchema 与 annotations.readOnlyHint 保持 WebMCP 语义一致。',
      '资源与技能用于扩展工具调用之外的页面能力。'
    ]
  },
  apiPage: {
    title: 'API 参考',
    subtitle: '来自 @page-mcp/core、@page-mcp/chat、@page-mcp/react 的公开接口。',
    coreTitle: '@page-mcp/core',
    coreMethods: [
      { name: 'new EventBus({ timeout? })', desc: 'Host 与 Client 之间的 RPC 通道。' },
      { name: 'new PageMcpHost({ name, version, bus? })', desc: '页面侧能力注册中心。' },
      { name: 'host.registerTool(def)', desc: '注册 MCP 对齐的工具动作。' },
      { name: 'host.registerResource(def)', desc: '按 URI 注册可读取资源。' },
      { name: 'host.registerSkill(def)', desc: '注册多步骤技能流程。' },
      { name: 'host.registerPrompt(def)', desc: '注册聊天组件可用的提示卡片。' },
      { name: 'host.start()', desc: '启动 RPC 监听并广播就绪状态。' },
      { name: 'new PageMcpClient({ bus?, connectTimeout? })', desc: 'AI 侧调用客户端。' },
      { name: 'client.connect()', desc: '连接并获取 HostInfo。' },
      { name: 'client.listTools()/callTool()', desc: '发现并调用工具。' },
      { name: 'client.listResources()/readResource()', desc: '读取页面资源。' },
      { name: 'client.listSkills()/executeSkill()', desc: '执行技能并返回 SkillResult。' },
      { name: 'installWebMcpPolyfill(host, opts?)', desc: '在非原生浏览器中注入 modelContext polyfill。' }
    ],
    chatTitle: '@page-mcp/chat',
    chatMethods: [
      { name: 'init(config)', desc: '挂载聊天组件并连接 OpenAI 兼容后端。' },
      { name: 'config.openai', desc: '直接 OpenAI 配置（apiKey/baseURL/model）。' },
      { name: 'config.endpoint', desc: '通过后端代理端点替代直连模式。' },
      { name: 'config.theme/position/expandMode', desc: '外观和交互行为配置。' },
      { name: 'widget.open()/close()/destroy()', desc: '编程式生命周期控制。' }
    ],
    reactTitle: '@page-mcp/react',
    reactMethods: [
      { name: '<PageMcpProvider name version>', desc: '通过 React Context 提供 host/client/bus。' },
      { name: 'usePageMcpHost/usePageMcpClient/usePageMcpBus', desc: '在组件中访问 MCP 实例。' },
      { name: 'useRegisterTool/useRegisterResource/useRegisterSkill/useRegisterPrompt', desc: '声明式注册能力。' }
    ]
  },
  faqPage: {
    title: '常见问题',
    subtitle: '基于当前仓库行为整理的接入问题。',
    items: [
      {
        q: '必须依赖浏览器原生 WebMCP 吗？',
        a: '不需要。SDK 提供 installWebMcpPolyfill，并支持原生能力自动识别。'
      },
      {
        q: '最小依赖是什么？',
        a: '仅 @page-mcp/core 是必需；聊天组件和框架适配层均为可选。'
      },
      {
        q: 'Host 与 Client 如何通信？',
        a: '通过 EventBus RPC。在同一页面内建议共享同一个 EventBus 实例。'
      },
      {
        q: 'Resources 与 Skills 属于 WebMCP 标准吗？',
        a: '不是。Tools 与 WebMCP 对齐；Resources/Skills 属于 SDK 扩展。'
      },
      {
        q: '聊天组件能接入非 OpenAI 官方后端吗？',
        a: '可以，支持通过 baseURL 或 endpoint 连接 OpenAI 兼容接口。'
      },
      {
        q: '如何核对精确 API？',
        a: '以 main@dec39e3 中 packages/core/src/index.ts 及各包 README 为准。'
      }
    ]
  },
  footer: {
    text: 'Page MCP SDK 官方站点。'
  }
};

module.exports = zh;
