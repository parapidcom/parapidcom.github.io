// next.config.base.ts
import { Config } from 'next'

const baseConfig: Config = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
}

export default baseConfig
