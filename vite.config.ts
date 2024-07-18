import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/oishi-portfolio',
	plugins: [react()],
	// serverオプションを追加
	server: {
		// port番号を指定
		port: 3000,
	},
});
