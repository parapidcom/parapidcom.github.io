// next.config.dev.ts
import baseConfig from './next.config.base'
import { Config } from 'next'

const devConfig: Config = {
  ...baseConfig,
  // Development-specific settings
  output: 'standalone',
  basePath: '',
}

export default devConfig
