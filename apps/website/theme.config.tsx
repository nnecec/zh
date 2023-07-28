import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

import type { DocsThemeConfig } from 'nextra-theme-docs'

import { Logo } from './components/logo'

const config: DocsThemeConfig = {
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            href="https://github.com/nnecec/zh"
            rel="noopener noreferrer"
            target="_blank"
            title="vercel.com homepage"
          >
            <span>© {new Date().getFullYear()} nnecec. </span>
          </a>
        </div>
        <p className="mt-6 text-xs">Released under the MIT License</p>
      </div>
    ),
  },
  head: function useHead() {
    const { title } = useConfig()
    return (
      <>
        <meta content="#fff" name="msapplication-TileColor" />
        <meta content="#fff" name="theme-color" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="en" httpEquiv="Content-Language" />
        <meta content="Format standard of Chinese." name="description" />
        <meta content="Format standard of Chinese." name="og:description" />
        <meta content={title ? title + ' – Zh' : 'Zh'} name="og:title" />
        <meta content="Zh" name="apple-mobile-web-app-title" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <link href="/favicon-dark.svg" media="(prefers-color-scheme: dark)" rel="icon" type="image/svg+xml" />
      </>
    )
  },
  logo: <Logo size={36} />,
  project: {
    link: 'https://github.com/nnecec/zh',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    toggleButton: true,
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Zh',
      }
    }
  },
}

export default config
