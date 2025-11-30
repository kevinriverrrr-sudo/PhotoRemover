# Security Policy

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability within PhotoRemover, please send an email to the repository owner. All security vulnerabilities will be promptly addressed.

### What to Include

- Type of vulnerability
- Full paths of source file(s) related to the vulnerability
- Location of the affected source code (tag/branch/commit or direct URL)
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

### What to Expect

- Acknowledgment of your report within 48 hours
- Regular updates on the progress
- Credit for the discovery (if desired)

## Security Best Practices

### API Keys

- Never commit API keys to the repository
- Use environment variables (`.env` file)
- Add `.env` to `.gitignore`
- Use different keys for development and production
- Rotate keys regularly

### Frontend Security

- API keys in frontend code are exposed to users
- Consider implementing a backend proxy for production
- Rate limit API calls to prevent abuse
- Validate and sanitize all user inputs

### Recommended Architecture for Production

```
User Browser → Your Backend API → Background Removal Service
```

Instead of:

```
User Browser → Background Removal Service (exposes API key)
```

### Example Backend Proxy (Node.js/Express)

```javascript
// server.js
const express = require('express')
const axios = require('axios')
const app = express()

app.post('/api/remove-background', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.remove.bg/v1.0/removebg',
      req.body,
      {
        headers: {
          'X-Api-Key': process.env.REMOVEBG_API_KEY // Stored securely on server
        }
      }
    )
    res.send(response.data)
  } catch (error) {
    res.status(500).send('Error processing image')
  }
})

app.listen(3001)
```

## Known Limitations

### Current Architecture

This project is designed as a **frontend-only application** for simplicity and ease of deployment. This means:

- API keys are stored in environment variables
- Keys are bundled in the frontend code
- Users can view keys in browser developer tools

### Mitigation Strategies

1. **Use free tier API keys** for development/testing
2. **Set usage limits** on your API keys in provider dashboard
3. **Implement rate limiting** in your deployment
4. **Monitor API usage** regularly
5. **Rotate keys** if suspicious activity detected

### For Production Use

We recommend:

1. Implement a backend proxy (see example above)
2. Add authentication to your application
3. Implement rate limiting per user
4. Use serverless functions (Vercel, Netlify)
5. Set up usage alerts with your API provider

## Dependency Security

- Dependencies are regularly updated
- Use `npm audit` to check for vulnerabilities
- Review dependency licenses before use

```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

## Disclosure Policy

When we receive a security vulnerability report, we will:

1. Confirm the issue and determine affected versions
2. Audit code to find similar issues
3. Prepare fixes for all supported versions
4. Release security patches as soon as possible
5. Credit the reporter (if desired)

## Contact

For security concerns, please create a security advisory on GitHub or contact the repository owner directly.

---

Thank you for helping keep PhotoRemover secure!