# API Integration Guide

Detailed guide for integrating background removal APIs into PhotoRemover.

## Table of Contents

1. [Architecture](#architecture)
2. [Adding New Services](#adding-new-services)
3. [Error Handling](#error-handling)
4. [Rate Limiting](#rate-limiting)
5. [Testing](#testing)

## Architecture

### Service Layer Structure

```
src/services/
├── api.ts          # Main API interface
├── config.ts       # Service configurations
└── [service].ts   # Individual service implementations (optional)
```

### Flow Diagram

```
User Upload Image
      ↓
ImageProcessor Component
      ↓
removeBackground(file) function
      ↓
getApiConfig() - reads .env
      ↓
Service-specific implementation
      ↓
API Request
      ↓
Blob Response
      ↓
URL.createObjectURL()
      ↓
Display Result
```

## Adding New Services

### Step 1: Add Configuration

Edit `src/services/config.ts`:

```typescript
export const API_SERVICES: Record<ApiService, ApiConfig> = {
  // ... existing services
  
  newservice: {
    name: 'New Service',
    endpoint: 'https://api.newservice.com/v1/remove-bg',
    apiKey: import.meta.env.VITE_NEWSERVICE_API_KEY || '',
    freeQuota: '100 images per month',
    pricing: '$0.01 per image',
    documentation: 'https://docs.newservice.com'
  }
}
```

### Step 2: Update Types

Edit `src/types/index.ts`:

```typescript
export type ApiService = 
  | 'removebg' 
  | 'photoroom' 
  | 'withoutbg' 
  | 'pixian' 
  | 'removebgapi'
  | 'newservice'  // Add new service
```

### Step 3: Implement API Call

Edit `src/services/api.ts`:

```typescript
async function removeWithNewService(
  file: File, 
  apiKey: string, 
  endpoint: string
): Promise<ApiResponse> {
  const formData = new FormData()
  formData.append('image', file)
  
  // Add service-specific parameters
  formData.append('format', 'png')
  formData.append('quality', 'high')
  
  const response = await axios.post(endpoint, formData, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'multipart/form-data'
    },
    responseType: 'blob'
  })
  
  const imageUrl = URL.createObjectURL(response.data)
  return { success: true, imageUrl }
}

// Add to removeBackground function
export async function removeBackground(file: File): Promise<ApiResponse> {
  // ... existing code
  
  switch (selectedService) {
    // ... existing cases
    
    case 'newservice':
      return await removeWithNewService(file, apiKey, endpoint)
    
    default:
      throw new Error(`Unsupported service: ${selectedService}`)
  }
}
```

### Step 4: Update UI

Edit `src/components/ApiSelector.tsx`:

```typescript
const API_SERVICES = [
  // ... existing services
  
  {
    id: 'newservice' as ApiService,
    name: 'New Service',
    freeQuota: '100/month',
    pricing: '$0.01/image',
    quality: 'Excellent',
    speed: 'Very Fast',
    docs: 'https://docs.newservice.com',
    signup: 'https://newservice.com/signup'
  }
]
```

### Step 5: Update Environment

Edit `.env.example`:

```env
# New Service API
VITE_NEWSERVICE_API_KEY=your_newservice_api_key_here
```

### Step 6: Document

Update `README.md` with:
- Service description
- Pricing information
- How to get API key
- Special features or limitations

## Error Handling

### Common Errors

```typescript
try {
  const result = await removeBackground(file)
} catch (error) {
  if (axios.isAxiosError(error)) {
    switch (error.response?.status) {
      case 401:
        // Invalid API key
        console.error('Authentication failed')
        break
      case 402:
        // Payment required / quota exceeded
        console.error('Quota exceeded')
        break
      case 429:
        // Rate limit exceeded
        console.error('Too many requests')
        break
      case 500:
        // Server error
        console.error('Service unavailable')
        break
      default:
        console.error('Unknown error')
    }
  }
}
```

### User-Friendly Messages

```typescript
const getErrorMessage = (error: unknown): string => {
  if (!axios.isAxiosError(error)) return 'Unknown error occurred'
  
  const status = error.response?.status
  
  switch (status) {
    case 401:
      return 'Invalid API key. Please check your configuration.'
    case 402:
      return 'API quota exceeded. Please upgrade your plan.'
    case 429:
      return 'Too many requests. Please wait a moment.'
    case 500:
      return 'Service temporarily unavailable. Please try again later.'
    default:
      return 'Failed to process image. Please try again.'
  }
}
```

## Rate Limiting

### Client-Side Rate Limiting

```typescript
class RateLimiter {
  private queue: Array<() => Promise<any>> = []
  private processing = false
  private requestsPerMinute = 10
  private interval = 60000 / this.requestsPerMinute
  
  async add<T>(fn: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.queue.push(async () => {
        try {
          const result = await fn()
          resolve(result)
        } catch (error) {
          reject(error)
        }
      })
      
      this.process()
    })
  }
  
  private async process() {
    if (this.processing || this.queue.length === 0) return
    
    this.processing = true
    const fn = this.queue.shift()!
    
    await fn()
    
    setTimeout(() => {
      this.processing = false
      this.process()
    }, this.interval)
  }
}

const rateLimiter = new RateLimiter()

// Usage
export async function removeBackground(file: File): Promise<ApiResponse> {
  return rateLimiter.add(() => actualRemoveBackground(file))
}
```

## Testing

### Manual Testing Checklist

- [ ] Upload supported formats (JPG, PNG, WEBP, HEIC)
- [ ] Test with various image sizes
- [ ] Test error handling (invalid API key)
- [ ] Test rate limiting
- [ ] Verify transparent background in result
- [ ] Test download functionality
- [ ] Check responsive design
- [ ] Test on multiple browsers

### Automated Testing

```typescript
// tests/api.test.ts
import { describe, it, expect, vi } from 'vitest'
import { removeBackground } from '../src/services/api'

describe('removeBackground', () => {
  it('should remove background successfully', async () => {
    const mockFile = new File([''], 'test.jpg', { type: 'image/jpeg' })
    
    const result = await removeBackground(mockFile)
    
    expect(result.success).toBe(true)
    expect(result.imageUrl).toBeDefined()
  })
  
  it('should handle API errors', async () => {
    const mockFile = new File([''], 'test.jpg', { type: 'image/jpeg' })
    
    // Mock API failure
    vi.mock('axios')
    
    await expect(removeBackground(mockFile)).rejects.toThrow()
  })
})
```

### Performance Testing

```typescript
// Measure API response time
const start = performance.now()
const result = await removeBackground(file)
const duration = performance.now() - start

console.log(`Processing took ${duration}ms`)
```

## Best Practices

1. **Always validate file types before upload**
2. **Show clear error messages to users**
3. **Implement retry logic for transient failures**
4. **Cache processed images if applicable**
5. **Monitor API usage and costs**
6. **Keep API keys secure**
7. **Test with real API endpoints**
8. **Document API-specific quirks**

## Troubleshooting

### Issue: CORS Errors

**Solution:** Some APIs may not support direct browser requests. Implement a backend proxy.

### Issue: Large File Uploads

**Solution:** Check API file size limits. Compress images before upload if needed.

### Issue: Slow Processing

**Solution:** 
- Show loading indicators
- Implement timeout handling
- Consider image preprocessing

### Issue: Inconsistent Results

**Solution:**
- Check API documentation for image requirements
- Validate image quality before upload
- Consider image format conversion

## Resources

- [Remove.bg API Docs](https://www.remove.bg/api)
- [PhotoRoom API Docs](https://www.photoroom.com/api)
- [Axios Documentation](https://axios-http.com/)
- [FormData API](https://developer.mozilla.org/en-US/docs/Web/API/FormData)