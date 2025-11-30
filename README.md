# 🎨 PhotoRemover

<div align="center">

![PhotoRemover Banner](https://img.shields.io/badge/PhotoRemover-AI%20Background%20Removal-blueviolet?style=for-the-badge&logo=react)

**Professional AI-powered background removal tool with stunning 3D interface**

[![Latest Release](https://img.shields.io/github/v/release/kevinriverrrr-sudo/PhotoRemover?style=flat-square&label=version)](https://github.com/kevinriverrrr-sudo/PhotoRemover/releases/latest)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)
[![Deploy Status](https://img.shields.io/badge/deploy-ready-success?style=flat-square)](https://kevinriverrrr-sudo.github.io/PhotoRemover/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.170-black?style=flat-square&logo=three.js)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)

🌍 **[Live Demo](https://kevinriverrrr-sudo.github.io/PhotoRemover/)** | [Features](#-features) • [Installation](#-installation) • [API Setup](#-api-setup) • [Usage](#-usage) • [Contributing](#-contributing)

</div>

---

## ✨ Features

🔥 **Multiple API Providers** - Support for 5 leading background removal services
- **Remove.bg** - Industry leader, 50 free/month
- **PhotoRoom** - Fastest processing, $0.02/image
- **WithoutBG** - Open-source, privacy-focused
- **Pixian.AI** - Free for testing
- **RemovebgAPI** - Developer-friendly, 100 free credits

🌟 **Beautiful 3D Interface** - Stunning animated background with Three.js
- Interactive floating orbs
- Smooth animations with Framer Motion
- Glass morphism design
- Fully responsive layout

🚀 **Modern Tech Stack**
- React 18 + TypeScript
- Vite for lightning-fast builds
- Tailwind CSS for styling
- Three.js + React Three Fiber for 3D
- Axios for API calls

📱 **User-Friendly Features**
- Drag & drop file upload
- Real-time processing status
- Instant preview
- One-click download
- Support for JPG, PNG, WEBP, HEIC

---

## 🌍 Live Demo

**Try it now:** https://kevinriverrrr-sudo.github.io/PhotoRemover/

### Screenshots

> **Note:** Screenshots will be updated soon

---

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- API key from one of the supported services (see [API Setup](#-api-setup))

### Quick Start

```bash
# Clone the repository
git clone https://github.com/kevinriverrrr-sudo/PhotoRemover.git
cd PhotoRemover

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit .env and add your API key
nano .env

# Start development server
npm run dev
```

The application will open at `http://localhost:3000`

---

## 🔑 API Setup

### 1. Choose Your Service

Select one of the following services based on your needs:

#### 🥇 Remove.bg (Recommended for Quality)
- **Free Tier:** 50 images/month
- **Pricing:** From $0.05/image
- **Quality:** ⭐⭐⭐⭐⭐ Excellent
- **Speed:** ⚡⚡⚡⚡ Fast

**Get API Key:** [remove.bg/api](https://www.remove.bg/api)

#### 🥈 PhotoRoom (Recommended for Speed)
- **Free Tier:** 25 images/month
- **Pricing:** $0.02/image (best value)
- **Quality:** ⭐⭐⭐⭐⭐ Excellent
- **Speed:** ⚡⚡⚡⚡⚡ Very Fast

**Get API Key:** [photoroom.com/api](https://www.photoroom.com/api)

#### 🥉 WithoutBG (Recommended for Privacy)
- **Free Tier:** Unlimited with local model
- **Pricing:** €0.05/image for Pro API
- **Quality:** ⭐⭐⭐⭐ Very Good
- **Speed:** ⚡⚡⚡⚡ Fast

**Get API Key:** [withoutbg.com](https://withoutbg.com)

#### 🎯 Pixian.AI (Recommended for Testing)
- **Free Tier:** 0.25mpx unlimited
- **Pricing:** Paid for high-res (25mpx)
- **Quality:** ⭐⭐⭐ Good
- **Speed:** ⚡⚡⚡ Medium

**Get API Key:** [pixian.ai/api](https://pixian.ai/api)

#### 💎 RemovebgAPI (Recommended for Developers)
- **Free Tier:** 100 credits
- **Pricing:** From $0.001/image (cheapest)
- **Quality:** ⭐⭐⭐⭐ Very Good
- **Speed:** ⚡⚡⚡⚡⚡ Very Fast

**Get API Key:** [removebgapi.com](https://removebgapi.com)

### 2. Configure Environment

Edit your `.env` file:

```env
# Example: Using Remove.bg
VITE_REMOVEBG_API_KEY=your_actual_api_key_here
VITE_SELECTED_SERVICE=removebg
```

### 3. Restart Development Server

```bash
npm run dev
```

---

## 💻 Usage

### Basic Workflow

1. **Upload Image**
   - Drag & drop your image onto the upload area
   - Or click to browse and select a file
   - Supported formats: JPG, PNG, WEBP, HEIC

2. **Process**
   - Click "Remove Background" button
   - Wait for processing (usually 1-3 seconds)

3. **Download**
   - Preview the result with transparent background
   - Click "Download Result" to save the image

---

## 🚀 Deployment

### Deploy to GitHub Pages (Automatic)

✅ **Already configured!** Just push to main branch:

```bash
git push origin main
```

Your site will be automatically deployed to:
**https://kevinriverrrr-sudo.github.io/PhotoRemover/**

See [GitHub Pages Setup Guide](docs/GITHUB_PAGES_SETUP.md) for details.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/kevinriverrrr-sudo/PhotoRemover)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kevinriverrrr-sudo/PhotoRemover)

---

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Project Structure

```
PhotoRemover/
├── src/
│   ├── components/          # React components
│   ├── services/            # API integrations
│   ├── types/               # TypeScript types
│   └── App.tsx              # Main app
├── docs/                    # Documentation
├── .github/workflows/       # CI/CD
└── package.json             # Dependencies
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a new branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**Attribution Required:** When using this project, you must:
- Keep the original license notice
- Provide a link to this repository
- Credit the original author: [kevinriverrrr-sudo](https://github.com/kevinriverrrr-sudo)

---

## 💬 Support

- **Issues:** [GitHub Issues](https://github.com/kevinriverrrr-sudo/PhotoRemover/issues)
- **Discussions:** [GitHub Discussions](https://github.com/kevinriverrrr-sudo/PhotoRemover/discussions)
- **Live Demo:** [Try it now](https://kevinriverrrr-sudo.github.io/PhotoRemover/)

---

## 🚀 Roadmap

- [ ] Batch processing support
- [ ] Custom background color/image
- [ ] Image editing tools (crop, resize)
- [ ] History of processed images
- [ ] PWA support for offline use
- [ ] Mobile app (React Native)
- [ ] Video background removal

---

## 📊 Statistics

![GitHub stars](https://img.shields.io/github/stars/kevinriverrrr-sudo/PhotoRemover?style=social)
![GitHub forks](https://img.shields.io/github/forks/kevinriverrrr-sudo/PhotoRemover?style=social)
![GitHub issues](https://img.shields.io/github/issues/kevinriverrrr-sudo/PhotoRemover)
![GitHub Actions](https://img.shields.io/github/actions/workflow/status/kevinriverrrr-sudo/PhotoRemover/deploy.yml?branch=main&label=deploy)

---

## ❤️ Acknowledgments

- [Remove.bg](https://www.remove.bg/) - Background removal API
- [PhotoRoom](https://www.photoroom.com/) - Image editing API
- [WithoutBG](https://withoutbg.com/) - Open-source background removal
- [Three.js](https://threejs.org/) - 3D graphics library
- [React](https://reactjs.org/) - UI framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS

---

<div align="center">

**Made with ❤️ by [kevinriverrrr-sudo](https://github.com/kevinriverrrr-sudo)**

🌍 **[Try Live Demo](https://kevinriverrrr-sudo.github.io/PhotoRemover/)** ⭐ **[Star this repo](https://github.com/kevinriverrrr-sudo/PhotoRemover)**

[Report Bug](https://github.com/kevinriverrrr-sudo/PhotoRemover/issues) · [Request Feature](https://github.com/kevinriverrrr-sudo/PhotoRemover/issues)

</div>