#!/bin/bash

# Samayshri Agro Website - Setup Script
# This script helps you get started quickly

echo "🌾 Samayshri Agro and Foods Industries - Website Setup"
echo "========================================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm found: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "✅ Dependencies installed successfully!"
echo ""

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local from template..."
    cp .env.example .env.local
    echo "✅ .env.local created!"
    echo ""
    echo "⚠️  IMPORTANT: Edit .env.local and add your Firebase credentials"
    echo "   See QUICKSTART.md for instructions"
    echo ""
else
    echo "✅ .env.local already exists"
    echo ""
fi

# Create necessary directories
echo "📁 Creating asset directories..."
mkdir -p public/products
mkdir -p public/team
mkdir -p public/assets
echo "✅ Directories created!"
echo ""

# Summary
echo "========================================================"
echo "🎉 Setup Complete!"
echo "========================================================"
echo ""
echo "Next steps:"
echo ""
echo "1️⃣  Edit .env.local with your Firebase credentials"
echo "   (See QUICKSTART.md or DEPLOYMENT.md for help)"
echo ""
echo "2️⃣  Start the development server:"
echo "   npm run dev"
echo ""
echo "3️⃣  Open http://localhost:5173 in your browser"
echo ""
echo "📚 Documentation:"
echo "   - QUICKSTART.md - Get started in 5 minutes"
echo "   - README.md - Full documentation"
echo "   - DEPLOYMENT.md - Deploy to Firebase"
echo "   - PROJECT_SUMMARY.md - Project overview"
echo ""
echo "💡 Need help? Check the documentation or contact support."
echo ""
