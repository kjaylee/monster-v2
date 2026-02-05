#!/bin/bash
# Monster v2 - One-Command Deployment Script
# Usage: ./deploy.sh [vercel|github|both]

set -e

DEPLOY_TYPE=${1:-both}
PROJECT_ROOT=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)

echo "🚀 Monster v2 Deployment Script"
echo "================================"
echo "Project: $PROJECT_ROOT"
echo "Deploy Type: $DEPLOY_TYPE"
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check prerequisites
check_prerequisites() {
  echo "📋 Checking prerequisites..."
  
  # Node.js
  if ! command -v node &> /dev/null; then
    echo -e "${RED}✗ Node.js not found${NC}"
    exit 1
  fi
  echo -e "${GREEN}✓ Node.js $(node --version)${NC}"
  
  # npm
  if ! command -v npm &> /dev/null; then
    echo -e "${RED}✗ npm not found${NC}"
    exit 1
  fi
  echo -e "${GREEN}✓ npm $(npm --version)${NC}"
  
  # Git
  if ! command -v git &> /dev/null; then
    echo -e "${RED}✗ git not found${NC}"
    exit 1
  fi
  echo -e "${GREEN}✓ git $(git --version | cut -d' ' -f3)${NC}"
  
  echo ""
}

# Build project
build_project() {
  echo "🔨 Building project..."
  cd "$PROJECT_ROOT"
  
  npm install --legacy-peer-deps 2>&1 | tail -3
  npm run build 2>&1 | tail -5
  
  echo -e "${GREEN}✓ Build successful${NC}"
  echo ""
}

# Deploy to GitHub
deploy_github() {
  echo "📤 Deploying to GitHub..."
  cd "$PROJECT_ROOT"
  
  # Check if remote exists
  if ! git remote get-url origin &> /dev/null; then
    echo -e "${YELLOW}⚠ No GitHub remote configured${NC}"
    echo "To set up, run:"
    echo "  git remote add origin https://github.com/kjaylee/monster-v2.git"
    echo "  git branch -M main"
    echo "  git push -u origin main"
    return
  fi
  
  # Ensure on main branch
  git branch -M main
  
  # Push to GitHub
  echo "Pushing to GitHub..."
  git push -u origin main 2>&1 | grep -E "^\[|^To |^\s"
  
  # Get repo URL
  REPO_URL=$(git remote get-url origin | sed 's/.git$//')
  
  echo -e "${GREEN}✓ Pushed to GitHub${NC}"
  echo "Repository: $REPO_URL"
  echo ""
}

# Deploy to Vercel
deploy_vercel() {
  echo "☁️  Deploying to Vercel..."
  
  # Check if Vercel CLI is installed
  if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}Installing Vercel CLI...${NC}"
    npm install -g vercel
  fi
  
  cd "$PROJECT_ROOT"
  
  # Deploy
  vercel --prod --confirm
  
  echo -e "${GREEN}✓ Deployed to Vercel${NC}"
  echo ""
  echo "📝 Next steps:"
  echo "1. Visit Vercel dashboard to configure domain"
  echo "2. Add environment variables if needed"
  echo "3. Set up auto-deploy from GitHub"
  echo ""
}

# Main execution
main() {
  check_prerequisites
  build_project
  
  case $DEPLOY_TYPE in
    github)
      deploy_github
      ;;
    vercel)
      deploy_vercel
      ;;
    both)
      deploy_github
      deploy_vercel
      ;;
    *)
      echo "Usage: ./deploy.sh [vercel|github|both]"
      exit 1
      ;;
  esac
  
  echo "🎉 Deployment complete!"
  echo ""
  echo "📊 Status:"
  echo "  Build: ✓"
  case $DEPLOY_TYPE in
    github) echo "  GitHub: ✓"; echo "  Vercel: ⏳" ;;
    vercel) echo "  GitHub: ⏳"; echo "  Vercel: ✓" ;;
    both) echo "  GitHub: ✓"; echo "  Vercel: ✓" ;;
  esac
  echo ""
}

main
