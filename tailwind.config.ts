import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        osvaldo: '#333'
      }
    },
  },
  plugins: [],
}
export default config
