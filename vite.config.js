import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr";

const svgoOptions = {
  multipass: true,
  plugins: [
    {
      // setting fill attribute to "currentColor"
      name: 'convertColors',
      params: {
        currentColor: true,
      }
    }
  ]
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: { // replaceAttrValues: {'#FF7010': 'currentColor',} is non-scalable approach 
        icon: true,
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'], // both plugins must be added!
        svgoConfig: svgoOptions
      },
    }),
  ],
})

