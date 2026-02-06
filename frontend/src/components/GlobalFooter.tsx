import { ICP_ENABLED } from '../config';

/**
 * Global Footer Component
 * Displays company copyright and legal information
 * Visibility controlled by VITE_OAUTH_ENABLED in .env.local
 */
export default function GlobalFooter() {
  // Only show footer if OAuth is enabled
  if (!ICP_ENABLED) {
    return null;
  }

  return (
    <div className="py-2 text-center text-xs text-gray-400">
      <span>Copyright©2026 光之舟智能科技(北京)有限公司 All Rights Reserved</span>
      <span className="mx-2">|</span>
      <a
        href="https://beian.miit.gov.cn/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-600 transition-colors"
      >
        京ICP备2025103610号-2
      </a>
      <span className="mx-2">|</span>
      <a
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802046014"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-600 transition-colors"
      >
        京公网安备11010802046014号
      </a>
    </div>
  );
}
