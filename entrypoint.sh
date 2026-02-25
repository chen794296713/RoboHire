#!/bin/bash
set -e

echo "=========================================="
echo "       GoHire API Startup Script"
echo "=========================================="

# 设置环境变量
export NODE_ENV=production

# 1. 使用 PM2 启动后端服务
echo "[1/2] Starting backend server on port 4607 with PM2..."
pm2 start /app/backend/index.js --name "gohire-backend"

# 2. 等待后端服务启动
echo "Waiting for backend to be ready..."
for i in {1..30}; do
    if curl -s http://localhost:4607/api/v1/health > /dev/null 2>&1; then
        echo "Backend is ready!"
        break
    fi
    if [ $i -eq 30 ]; then
        echo "Backend failed to start within 30 seconds."
        pm2 logs gohire-backend --lines 20 --nostream
        exit 1
    fi
    sleep 1
done

# 3. 启动 nginx（🚨 注意：这里去掉了 daemon off; 让他转为后台运行）
echo "[2/2] Starting nginx on port 80 (background)..."
/usr/sbin/nginx

# 4. 挂起容器并实时输出 PM2 日志（🚨 关键操作：将 PM2 日志作为前台主进程）
echo "Streaming PM2 logs..."
exec pm2 logs gohire-backend