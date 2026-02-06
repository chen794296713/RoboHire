import { OAUTH_ENABLED } from '../config';

/**
 * Global Footer Component
 * Displays company copyright and legal information
 * Visibility controlled by VITE_OAUTH_ENABLED in .env.local
 */
export default function GlobalFooter() {
  // Only show footer if OAuth is enabled
  if (OAUTH_ENABLED) {
    return null;
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-3 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-gray-600">
          <span>Copyright©2026 光之舟智能科技(北京)有限公司 All Rights Reserved</span>
          <span>|</span>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition-colors"
          >
            京ICP备2025103610号-2
          </a>
          <span>|</span>
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802046014"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition-colors"
          >
            京公网安备11010802046014号
          </a>
        </div>
      </div>
    </footer>
  );
}
