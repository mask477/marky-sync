import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [
        tsconfigPaths(),
        laravel({
            input: ['resources/js/app.tsx', 'resources/css/global.css'],
            refresh: true,
        }),
        react(),
    ],
});
