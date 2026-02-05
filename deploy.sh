#!/bin/bash

# =============================================================================
# GoHire API 远程部署脚本
# =============================================================================
# 功能: 连接服务器执行 docker-compose up -d 部署
# =============================================================================
# 用法:
#   ./deploy.sh <服务器IP> <用户名> <密码> [项目路径]
#
# 示例:
#   ./deploy.sh 192.168.1.100 root password123
#   ./deploy.sh 192.168.1.100 root password123 /app/myproject
# =============================================================================

set -e

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# 默认配置
DEFAULT_PROJECT_PATH="/data/gohire-api/gohireapi"
HARBOR_URL="harbor.lightark.cc/iagent"
IMAGE_NAME="gohire-api"

# 参数检查
if [ -z "$1" ] || [ -z "$2" ] || [ -z "$3" ]; then
    echo -e "${RED}用法: $0 <服务器IP> <用户名> <密码> [项目路径]${NC}"
    echo ""
    echo "参数说明:"
    echo "  服务器IP    - 目标服务器的 IP 地址"
    echo "  用户名      - SSH 登录用户名"
    echo "  密码        - SSH 密码"
    echo "  项目路径    - (可选) 服务器上的项目路径，默认: ${DEFAULT_PROJECT_PATH}"
    exit 1
fi

# 获取参数
SERVER_IP="$1"
SSH_USER="$2"
SSH_PASS="$3"
SERVER_PROJECT_PATH="${4:-${DEFAULT_PROJECT_PATH}}"

echo -e "${BLUE}╔══════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║           GoHire API 远程部署脚本                        ║${NC}"
echo -e "${BLUE}╚══════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${GREEN}📡 服务器:${NC}   ${SSH_USER}@${SERVER_IP}"
echo -e "${GREEN}📁 项目路径:${NC} ${SERVER_PROJECT_PATH}"
echo ""

# =============================================================================
# 在服务器上执行部署命令
# =============================================================================
echo -e "${YELLOW}🚀 执行部署命令...${NC}"
echo ""

# 执行远程命令
sshpass -p "${SSH_PASS}" ssh -o StrictHostKeyChecking=no "${SSH_USER}@${SERVER_IP}" "
    cd '${SERVER_PROJECT_PATH}'
    
    echo '=========================================='
    echo '       服务器部署开始'
    echo '=========================================='
    echo ''
    
    # 显示当前目录
    echo '📂 项目目录: \$(pwd)'
    echo ''
    
    # 拉取最新代码
    echo '📥 Git 拉取最新代码...'
    git pull origin main
    echo ''
    
    # 停止旧容器
    echo '🛑 停止旧容器...'
    docker-compose down || true
    echo ''
    
    # 构建并启动
    echo '🚀 构建并启动服务...'
    docker-compose build
    docker-compose up -d
    
    echo ''
    echo '=========================================='
    echo '       部署完成!'
    echo '=========================================='
    echo ''
    
    # 显示容器状态
    echo '📊 容器状态:'
    docker ps --filter 'name=gohire-api' --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'
    
    echo ''
    echo '🌐 访问地址:'
    echo '   前端: http://${SERVER_IP}:33607'
    echo '   API:  http://${SERVER_IP}:34607'
    
    echo ''
    echo '📝 最近日志:'
    docker-compose logs --tail=20
"

echo ""
echo -e "${GREEN}✅ 部署完成!${NC}"
echo ""
echo "💡 查看日志: ssh ${SSH_USER}@${SERVER_IP} 'cd ${SERVER_PROJECT_PATH} && docker-compose logs -f'"
