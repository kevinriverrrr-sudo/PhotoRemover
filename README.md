# 🎨 PhotoRemover

<div align="center">

![PhotoRemover Banner](https://img.shields.io/badge/PhotoRemover-AI%20Background%20Removal-blueviolet?style=for-the-badge&logo=react)

**Professional AI-powered background removal tool with stunning 3D interface**

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.171-black?style=flat-square&logo=three.js)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [API Setup](#-api-setup) • [Usage](#-usage) • [Contributing](#-contributing)

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

## 🖼️ Demo

### Screenshots

> **Note:** Screenshots will be added after deployment

**Main Interface**
![Main Interface](./screenshots/main.png)

**Processing**
![Processing](./screenshots/processing.png)

**Result**
![Result](./screenshots/result.png)

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
# or
yarn install
# or
pnpm install

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

**Get API Key:**
1. Visit [remove.bg/api](https://www.remove.bg/api)
2. Sign up for a free account
3. Navigate to Dashboard → API Keys
4. Copy your API key

#### 🥈 PhotoRoom (Recommended for Speed)
- **Free Tier:** 25 images/month
- **Pricing:** $0.02/image (best value)
- **Quality:** ⭐⭐⭐⭐⭐ Excellent
- **Speed:** ⚡⚡⚡⚡⚡ Very Fast

**Get API Key:**
1. Visit [photoroom.com/api](https://www.photoroom.com/api)
2. Create an account
3. Go to API Dashboard
4. Generate your API key

#### 🥉 WithoutBG (Recommended for Privacy)
- **Free Tier:** Unlimited with local model
- **Pricing:** €0.05/image for Pro API
- **Quality:** ⭐⭐⭐⭐ Very Good
- **Speed:** ⚡⚡⚡⚡ Fast

**Get API Key:**
1. Visit [withoutbg.com](https://withoutbg.com)
2. Sign up for API access
3. Get your API key from dashboard

#### 🎯 Pixian.AI (Recommended for Testing)
- **Free Tier:** 0.25mpx unlimited
- **Pricing:** Paid for high-res (25mpx)
- **Quality:** ⭐⭐⭐ Good
- **Speed:** ⚡⚡⚡ Medium

**Get API Key:**
1. Visit [pixian.ai/api](https://pixian.ai/api)
2. Register for API access
3. Obtain your API credentials

#### 💎 RemovebgAPI (Recommended for Developers)
- **Free Tier:** 100 credits
- **Pricing:** From $0.001/image (cheapest)
- **Quality:** ⭐⭐⭐⭐ Very Good
- **Speed:** ⚡⚡⚡⚡⚡ Very Fast

**Get API Key:**
1. Visit [removebgapi.com](https://removebgapi.com)
2. Sign up for free account
3. Generate API key instantly (no credit card)

### 2. Configure Environment

Edit your `.env` file:

```env
# Example: Using Remove.bg
VITE_REMOVEBG_API_KEY=your_actual_api_key_here
VITE_SELECTED_SERVICE=removebg

# Or using PhotoRoom
VITE_PHOTOROOM_API_KEY=your_actual_api_key_here
VITE_SELECTED_SERVICE=photoroom

# Or using WithoutBG
VITE_WITHOUTBG_API_KEY=your_actual_api_key_here
VITE_SELECTED_SERVICE=withoutbg

# Or using Pixian
VITE_PIXIAN_API_KEY=your_actual_api_key_here
VITE_SELECTED_SERVICE=pixian

# Or using RemovebgAPI
VITE_REMOVEBGAPI_KEY=your_actual_api_key_here
VITE_SELECTED_SERVICE=removebgapi
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

### Switching API Services

To switch between services:

1. Update `VITE_SELECTED_SERVICE` in your `.env` file
2. Make sure the corresponding API key is set
3. Restart the development server

```env
# Switch to PhotoRoom
VITE_SELECTED_SERVICE=photoroom
VITE_PHOTOROOM_API_KEY=your_key_here
```

---

## 🛠️ Development

### Project Structure

```
PhotoRemover/
├── src/
│   ├── components/          # React components
│   │   ├── Scene3D.tsx       # 3D background scene
│   │   ├── ImageProcessor.tsx # Main image processing UI
│   │   └── ApiSelector.tsx   # API service selector
│   ├── services/            # API integrations
│   │   ├── api.ts            # API service implementations
│   │   └── config.ts         # API configurations
│   ├── types/               # TypeScript types
│   │   └── index.ts          # Type definitions
│   ├── App.tsx              # Main application component
│   ├── App.css              # Application styles
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
├── tailwind.config.js       # Tailwind config
└── .env.example             # Environment template
```

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

### Adding New API Service

1. Add API configuration to `src/services/config.ts`
2. Implement API call in `src/services/api.ts`
3. Update TypeScript types in `src/types/index.ts`
4. Add service to `ApiSelector.tsx` component
5. Update `.env.example` with new environment variables

---

## 📤 Building for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

The built files will be in the `dist/` directory, ready for deployment.

---

## 🚀 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/kevinriverrrr-sudo/PhotoRemover)

1. Click the button above
2. Add your API keys as environment variables
3. Deploy!

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kevinriverrrr-sudo/PhotoRemover)

1. Click the button above
2. Configure environment variables
3. Deploy!

### Manual Deployment

```bash
npm run build
# Upload the dist/ folder to your hosting provider
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a new branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation if needed

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**Attribution Required:** When using this project, you must:
- Keep the original license notice
- Provide a link to this repository: https://github.com/kevinriverrrr-sudo/PhotoRemover
- Credit the original author: [kevinriverrrr-sudo](https://github.com/kevinriverrrr-sudo)

---

## 💬 Support

- **Issues:** [GitHub Issues](https://github.com/kevinriverrrr-sudo/PhotoRemover/issues)
- **Discussions:** [GitHub Discussions](https://github.com/kevinriverrrr-sudo/PhotoRemover/discussions)

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
![GitHub pull requests](https://img.shields.io/github/issues-pr/kevinriverrrr-sudo/PhotoRemover)

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

**Star ⭐ this repo if you find it useful!**

[Report Bug](https://github.com/kevinriverrrr-sudo/PhotoRemover/issues) · [Request Feature](https://github.com/kevinriverrrr-sudo/PhotoRemover/issues)

</div>