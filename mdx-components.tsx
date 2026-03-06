import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => <h2 className="title section-title" {...props} />,
    h3: (props) => <h3 className="mdx-subtitle" {...props} />,
    p: (props) => <p className="mdx-p" {...props} />,
    ul: (props) => <ul className="bullet-list" {...props} />,
    code: (props) => <code className="mdx-inline-code" {...props} />,
    pre: (props) => <pre className="mdx-pre" {...props} />,
    ...components
  };
}
