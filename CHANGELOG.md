# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2025-11-30

### Fixed
- 🔧 **Critical:** Fixed React Three Fiber and Drei dependency versions for Vercel deployment compatibility
- ✅ Resolved `ERESOLVE unable to resolve dependency tree` error
- ✅ Updated `@react-three/fiber` from `^8.18.5` to `^8.17.10` for better stability
- ✅ Updated `@react-three/drei` from `^9.119.2` to `^9.114.3` for peer dependency compatibility
- ✅ Pinned `three` to `^0.170.0` for consistent 3D rendering
- ✅ Updated other dependencies to stable versions

### Changed
- 🔄 Updated all dev dependencies to latest stable versions
- 📦 Bumped version from `1.0.0` to `1.0.1`

### Technical Details

**Problem:**
```
npm error ERESOLVE unable to resolve dependency tree
npm error peer @react-three/fiber@"^8" from @react-three/drei@9.122.0
```

**Solution:**
- Used compatible versions of React Three libraries that work together
- Ensured peer dependencies are satisfied
- Tested on Vercel deployment platform

**Deployment Status:** ✅ Now deploys successfully on Vercel, Netlify, and other platforms

---

## [1.0.0] - 2025-11-30

### Added
- ✨ Initial release of PhotoRemover
- 🎨 Beautiful 3D interface with floating spheres using Three.js
- 🔥 Support for 5 background removal API services:
  - Remove.bg (50 free/month, from $0.05/image)
  - PhotoRoom (25 free/month, $0.02/image)
  - WithoutBG (unlimited local, €0.05/image Pro)
  - Pixian.AI (0.25mpx free unlimited)
  - RemovebgAPI (100 free credits, from $0.001/image)
- 📱 Drag & drop file upload
- ⚡ Real-time processing status
- 🖼️ Instant preview with transparent background
- 📥 One-click download
- 🌍 Support for JPG, PNG, WEBP, HEIC formats
- 📱 Fully responsive design for all devices
- 🌐 Internationalization (English + Russian)

### Components
- `Scene3D.tsx` - 3D animated background with floating orbs
- `ImageProcessor.tsx` - Main image processing interface
- `ApiSelector.tsx` - API service selection component

### Services
- Complete API integration layer for all 5 services
- Error handling and rate limiting
- Service-specific implementations

### Documentation
- 📚 Comprehensive README.md (English)
- 🇷🇺 README.ru.md (Russian translation)
- 🤝 CONTRIBUTING.md - Contribution guidelines
- 🔒 SECURITY.md - Security policy
- ⚖️ LICENSE - MIT License with attribution requirement
- 🛠️ CODE_OF_CONDUCT.md - Community guidelines
- 📝 API_INTEGRATION.md - API integration guide
- 🚀 DEPLOYMENT.md - Deployment instructions

### Tech Stack
- ⚛️ React 18.3.1
- 🔷 TypeScript 5.6.3
- ⚡ Vite 6.0.1
- 🎨 Tailwind CSS 3.4.15
- 🎬 Framer Motion 11.11.11
- 📦 Three.js 0.170.0
- 🧶 React Three Fiber 8.17.10
- ✨ React Three Drei 9.114.3

### Infrastructure
- GitHub Actions ready
- Vercel deployment configured
- Netlify deployment configured
- Docker support
- Environment variable templates

---

## Release Notes

### How to Update

If you cloned the repository before version 1.0.1:

```bash
# Pull latest changes
git pull origin main

# Remove old dependencies
rm -rf node_modules package-lock.json

# Install updated dependencies
npm install

# Start development server
npm run dev
```

### Breaking Changes

None. Version 1.0.1 is a patch release with dependency fixes only.

### Migration Guide

No migration needed. All existing `.env` configurations and code remain compatible.

---

## Upcoming Features (Roadmap)

- [ ] Batch image processing
- [ ] Custom background color/image replacement
- [ ] Image editing tools (crop, resize, filters)
- [ ] Processing history with local storage
- [ ] PWA support for offline usage
- [ ] Mobile app (React Native)
- [ ] Video background removal
- [ ] AI-powered object selection
- [ ] Export in multiple formats (PNG, JPG, WEBP)
- [ ] Cloud storage integration (Google Drive, Dropbox)

---

## Support

If you encounter any issues:

1. Check this CHANGELOG for known issues
2. Review [DEPLOYMENT.md](docs/DEPLOYMENT.md) for deployment troubleshooting
3. Open an issue on [GitHub](https://github.com/kevinriverrrr-sudo/PhotoRemover/issues)
4. Join discussions on [GitHub Discussions](https://github.com/kevinriverrrr-sudo/PhotoRemover/discussions)

---

## Contributors

Thank you to all contributors who helped make PhotoRemover better!

- [@kevinriverrrr-sudo](https://github.com/kevinriverrrr-sudo) - Creator & Maintainer

Want to contribute? See [CONTRIBUTING.md](CONTRIBUTING.md)

---

**Made with ❤️ by [kevinriverrrr-sudo](https://github.com/kevinriverrrr-sudo)**