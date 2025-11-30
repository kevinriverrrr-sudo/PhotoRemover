# Deployment Guide

Comprehensive guide for deploying PhotoRemover to various platforms.

## Table of Contents

1. [Vercel Deployment](#vercel-deployment)
2. [Netlify Deployment](#netlify-deployment)
3. [GitHub Pages](#github-pages)
4. [Docker Deployment](#docker-deployment)
5. [Custom Server](#custom-server)

## Vercel Deployment

### Automatic Deployment

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository

2. **Configure Build Settings**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

3. **Add Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add your API keys:
   ```
   VITE_REMOVEBG_API_KEY=your_key
   VITE_SELECTED_SERVICE=removebg
   ```

4. **Deploy**
   - Click "Deploy"
   - Your app will be live at `your-project.vercel.app`

### Manual Deployment via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Netlify Deployment

### Automatic Deployment

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository

2. **Configure Build Settings**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Add Environment Variables**
   - Go to Site settings → Environment variables
   - Add your API keys

4. **Deploy**
   - Click "Deploy site"
   - Your app will be live at `your-site.netlify.app`

### Manual Deployment via CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Build
npm run build

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

### netlify.toml Configuration

Create `netlify.toml` in your project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## GitHub Pages

### Setup

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/PhotoRemover",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.ts**
   ```typescript
   export default defineConfig({
     base: '/PhotoRemover/',
     // ... other config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages / root
   - Save

### Limitations

- Environment variables must be hardcoded (not recommended for API keys)
- Consider using a backend proxy for production

## Docker Deployment

### Dockerfile

Create `Dockerfile` in project root:

```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf

Create `nginx.conf`:

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

### Build and Run

```bash
# Build image
docker build -t photoremover .

# Run container
docker run -p 8080:80 photoremover

# Access at http://localhost:8080
```

### Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "8080:80"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

Run:
```bash
docker-compose up -d
```

## Custom Server

### Using Node.js + Express

```bash
# Install dependencies
npm install express compression helmet
```

Create `server.js`:

```javascript
const express = require('express')
const compression = require('compression')
const helmet = require('helmet')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false // Adjust based on your needs
}))

// Compression middleware
app.use(compression())

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')))

// Handle SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
```

Update `package.json`:
```json
{
  "scripts": {
    "start": "node server.js",
    "build": "vite build"
  }
}
```

Deploy:
```bash
npm run build
npm start
```

## Environment Variables

### Security Considerations

**⚠️ Warning:** Frontend environment variables are exposed in the browser!

For production, consider:

1. **Backend Proxy** (Recommended)
   - Store API keys on server
   - Create proxy endpoints
   - Frontend calls your backend
   - Backend calls API services

2. **Serverless Functions**
   - Use Vercel/Netlify Functions
   - Store keys in function environment
   - Frontend calls your functions

### Example Backend Proxy

```javascript
// api/remove-background.js (Vercel Function)
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const formData = new FormData()
    formData.append('image_file', req.body)

    const response = await fetch('https://api.remove.bg/v1.0/removebg', {
      method: 'POST',
      headers: {
        'X-Api-Key': process.env.REMOVEBG_API_KEY // Stored securely
      },
      body: formData
    })

    const data = await response.arrayBuffer()
    res.setHeader('Content-Type', 'image/png')
    res.send(Buffer.from(data))
  } catch (error) {
    res.status(500).json({ error: 'Processing failed' })
  }
}
```

## Performance Optimization

### Build Optimization

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
```

### Caching Headers

```nginx
# nginx.conf
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

## Monitoring

### Add Analytics

```html
<!-- index.html -->
<script>
  // Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

### Error Tracking

```typescript
// src/main.tsx
import * as Sentry from '@sentry/react'

Sentry.init({
  dsn: 'YOUR-SENTRY-DSN',
  environment: import.meta.env.MODE
})
```

## Troubleshooting

### Build Failures

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Environment Variables Not Loading

- Restart dev server after changing .env
- Variables must start with `VITE_`
- Check deployment platform docs

### CORS Issues

- Implement backend proxy
- Check API service CORS policy
- Add proper headers

## Checklist

- [ ] Build succeeds locally
- [ ] Environment variables configured
- [ ] API keys tested
- [ ] Custom domain configured (optional)
- [ ] SSL/HTTPS enabled
- [ ] Analytics setup
- [ ] Error tracking configured
- [ ] Performance optimized
- [ ] Monitoring enabled

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Docker Documentation](https://docs.docker.com/)