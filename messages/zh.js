const zh = {
  nav: {
    home: '首页',
    docs: '文档',
    example: '示例站点',
    github: 'GitHub'
  },
  common: {
    languageLabel: '语言',
    apiLabel: 'API',
    descriptionLabel: '说明'
  },
  home: {
    kicker: '官方 SDK、浏览器适配层与扩展',
    title: 'Page MCP',
    subtitle: '使用 SDK 构建 AI 可理解的网页能力，通过浏览器适配层桥接 WebMCP 场景，并借助浏览器扩展发现页面能力。',
    primaryCta: '查看 SDK 文档',
    secondaryCta: '查看 SDK 仓库',
    sourceLabel: '稳定版本',
    sourceCommit: 'SDK 3.1.0 · Plugin 1.2.3',
    installCommand: 'npm install @page-mcp/core @page-mcp/webmcp-adapter',
    terminalHead: 'root@page-mcp:~',
    terminalLine1: '注册 tools、resources、prompts 与 skill 扩展',
    terminalLine2: '连接本地 client 或浏览器扩展',
    terminalStatus: 'status: ready',
    cards: [
      {
        title: '页面运行时',
        body: '通过页面侧运行时原语，把 tools、resources、prompts 与 Page MCP skill 扩展暴露给 AI。'
      },
      {
        title: '浏览器扩展',
        body: 'Chrome 扩展会自动发现页面能力、读取资源、展示 prompts、调用工具，并在需要时注入聊天界面。'
      },
      {
        title: '适配层与 UI',
        body: '按需组合协议类型、WebMCP 适配辅助、可嵌入聊天组件，以及 React / Vue 集成层。'
      }
    ]
  },
  docs: {
    kicker: 'SDK 文档',
    title: 'SDK 文档',
    subtitle: '与当前已发布 SDK 及浏览器适配层保持一致的包级文档。',
    quickStart: '快速开始',
    api: 'API',
    faq: '常见问题',
    packageTitle: '包列表',
    packageCards: [
      { name: '@page-mcp/protocol', desc: '共享 MCP、WebMCP 与 Page MCP 类型和常量', size: 'types' },
      { name: '@page-mcp/core', desc: '运行时 host、client、EventBus 与能力注册中心', size: 'runtime' },
      { name: '@page-mcp/webmcp-adapter', desc: '浏览器适配层、原生能力探测与 polyfill 辅助', size: 'adapter' },
      { name: '@page-mcp/chat', desc: '支持 OpenAI 兼容接口或代理后端的可嵌入聊天组件', size: 'widget' },
      { name: '@page-mcp/react', desc: '面向 React 应用的 Provider 与 Hooks', size: 'React' },
      { name: '@page-mcp/vue3', desc: '面向 Vue 3 应用的插件与组合式接口', size: 'Vue 3' },
      { name: '@page-mcp/vue2', desc: '面向 Vue 2 应用的插件与 mixin 辅助', size: 'Vue 2' }
    ]
  },
  quickStartPage: {
    kicker: '快速开始',
    title: '快速开始',
    subtitle: '先安装运行时，按需添加浏览器适配层，然后连接本地 client。'
  },
  apiPage: {
    kicker: 'API 参考',
    title: 'API 参考',
    subtitle: '覆盖运行时、浏览器适配层、聊天组件与框架集成的公开接口。',
    coreTitle: '@page-mcp/core',
    coreMethods: [
      { name: 'new EventBus({ timeout? })', desc: '面向同页或共享上下文场景的内存 RPC 传输。' },
      { name: 'new PageMcpHost({ name, version, strictProtocol?, bus?, transport?, skills? })', desc: '在页面侧注册工具、资源、Prompt 与技能。' },
      { name: 'host.registerTool()/unregisterTool()', desc: '管理页面暴露的工具能力。' },
      { name: 'host.registerResource()/unregisterResource()', desc: '按 URI 管理可读页面资源。' },
      { name: 'host.registerPrompt()/unregisterPrompt()', desc: '管理可复用 Prompt 条目。' },
      { name: 'host.registerSkill()/unregisterSkill()', desc: '管理 Page MCP 扩展的多步骤技能。' },
      { name: 'host.start()/destroy()', desc: '启动或销毁 host 运行时。' },
      { name: 'new PageMcpClient({ bus?, transport?, connectTimeout? })', desc: '创建页面能力调用端。' },
      { name: 'client.connect()/disconnect()', desc: '建立或关闭 client 连接。' },
      { name: 'client.listTools()/callTool()', desc: '发现并调用工具。' },
      { name: 'client.listResources()/readResource()', desc: '列出并读取页面资源。' },
      { name: 'client.listPrompts()/getPrompt()', desc: '列出 Prompt 并解析 Prompt 内容。' },
      { name: 'Extensions.createSkillsClient(client)', desc: '创建用于 Page MCP skill 扩展的技能客户端。' }
    ],
    protocolTitle: '@page-mcp/protocol',
    protocolMethods: [
      {
        name: 'PageMcpToolDefinition / ResourceDefinition / PromptDefinition',
        desc: 'tools、resources 与 prompts 注册时使用的共享定义类型。'
      },
      {
        name: 'AnthropicMcpTool / Resource / Prompt',
        desc: '供适配层和工具链使用的 MCP 兼容协议结构。'
      },
      {
        name: 'MCP_METHODS',
        desc: 'MCP 请求 / 响应方法名常量。'
      }
    ],
    adapterTitle: '@page-mcp/webmcp-adapter',
    adapterMethods: [
      { name: 'installWebMcpPolyfill(host, opts?)', desc: '为 PageMcpHost 暴露浏览器侧 modelContext polyfill。' },
      { name: 'isWebMcpSupported()', desc: '检测浏览器是否已提供原生 WebMCP 接口。' },
      { name: 'toWebMcpTool()/fromWebMcpTool()', desc: '在 WebMCP 风格工具对象与 Page MCP 定义之间转换。' }
    ],
    chatTitle: '@page-mcp/chat',
    chatMethods: [
      { name: 'init(config)', desc: '挂载聊天组件并绑定到 Page MCP 运行时。' },
      { name: 'getInstance()/destroy()', desc: '读取或销毁当前单例 widget。' },
      { name: 'config.openai', desc: '直连 OpenAI 兼容接口时使用的 apiKey、model、baseURL 等配置。' },
      { name: 'config.endpoint', desc: '通过自有后端 endpoint 转发请求，替代浏览器直连模式。' },
      { name: 'config.bus/defaultAttachedResources', desc: '复用共享 bus，并为聊天组件预选资源。' },
      { name: 'config.theme/position/expandMode', desc: '配置外观与交互行为。' },
      { name: 'widget.open()/close()/destroy()', desc: '以编程方式控制组件生命周期。' }
    ],
    reactTitle: '适配层与集成',
    reactMethods: [
      { name: '@page-mcp/react PageMcpProvider/usePageMcp*', desc: '在 React 组件中提供并访问 host、client、bus。' },
      { name: '@page-mcp/react useRegisterTool/useRegisterResource/useRegisterPrompt/useRegisterSkill', desc: '通过 React 生命周期声明式注册能力。' },
      { name: '@page-mcp/react usePageMcpSkills()', desc: '在 React 中访问 Page MCP 的 skills 扩展客户端。' },
      { name: '@page-mcp/vue3 PageMcpPlugin/PageMcpProvider/composables', desc: '把 Page MCP 集成到 Vue 3 应用中。' },
      { name: '@page-mcp/vue2 PageMcpPlugin/pageMcpMixin', desc: '把 Page MCP 集成到 Vue 2 应用中。' }
    ]
  },
  faqPage: {
    kicker: '常见问题',
    title: '常见问题',
    subtitle: '基于当前 SDK、适配层、聊天组件与扩展行为整理的常见问题。'
  },
  footer: {
    text: 'Page MCP 官方网站。'
  }
};

module.exports = zh;
