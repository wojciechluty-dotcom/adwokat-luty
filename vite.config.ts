import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // Plugin to handle figma:asset imports - MUST be BEFORE react plugin
    {
      name: 'resolve-figma-assets',
      enforce: 'pre', // Run before other plugins
      resolveId(id) {
        if (id.startsWith('figma:asset')) {
          // Return a virtual module that exports an empty string
          return '\0figma-asset:' + id;
        }
        return null;
      },
      load(id) {
        if (id.startsWith('\0figma-asset:')) {
          // Return an empty export for figma assets
          return 'export default ""';
        }
        return null;
      },
    },
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})
