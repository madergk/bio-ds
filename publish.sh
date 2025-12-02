#!/bin/bash
# Script para publicar Bio Design System a npm
# Versión: 0.1.2

set -e  # Exit on error

echo "🚀 Publishing Bio Design System to npm..."
echo ""

# Step 1: Commit new files
echo "📝 Step 1: Committing new files..."
git add .
git commit -m "chore: add ESLint configuration and build fixes"
echo "✅ Files committed"
echo ""

# Step 2: Push to GitHub
echo "📤 Step 2: Pushing to GitHub..."
git push
echo "✅ Pushed to GitHub"
echo ""

# Step 3: Increment version
echo "🔢 Step 3: Incrementing version to 0.1.2..."
npm version patch
echo "✅ Version incremented"
echo ""

# Step 4: Publish to npm
echo "📦 Step 4: Publishing to npm..."
npm publish
echo "✅ Published to npm!"
echo ""

echo "🎉 Success! Your package is now live at:"
echo "   https://www.npmjs.com/package/@madergk/bio-ds"
echo ""
echo "✅ Next steps:"
echo "   1. Verify publication: npm view @madergk/bio-ds"
echo "   2. Test installation: npm install @madergk/bio-ds"
echo ""
