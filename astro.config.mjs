import { defineConfig } from 'astro/config';

// 部署到 GitHub Pages 時，在 GitHub Actions 設定這兩個環境變數即可（deploy.yml 已處理）。
// 本機預覽不需要設定。
const site = process.env.SITE_URL || 'http://localhost:4321';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
});
