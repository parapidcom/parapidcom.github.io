// next.config.ts
import { Config } from 'next'
import devConfig from './next.config.dev'
import prodConfig from './next.config.prod'

const config: Config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig

export default config
