import axios from 'axios'
import type { ApiResponse, ApiService } from '../types'

const getApiConfig = () => {
  const selectedService = (import.meta.env.VITE_SELECTED_SERVICE || 'removebg') as ApiService
  
  const configs = {
    removebg: {
      apiKey: import.meta.env.VITE_REMOVEBG_API_KEY,
      endpoint: 'https://api.remove.bg/v1.0/removebg'
    },
    photoroom: {
      apiKey: import.meta.env.VITE_PHOTOROOM_API_KEY,
      endpoint: 'https://sdk.photoroom.com/v1/segment'
    },
    withoutbg: {
      apiKey: import.meta.env.VITE_WITHOUTBG_API_KEY,
      endpoint: 'https://api.withoutbg.com/v1/remove'
    },
    pixian: {
      apiKey: import.meta.env.VITE_PIXIAN_API_KEY,
      endpoint: 'https://api.pixian.ai/api/v2/remove-background'
    },
    removebgapi: {
      apiKey: import.meta.env.VITE_REMOVEBGAPI_KEY,
      endpoint: 'https://removebgapi.com/api/v1/remove'
    }
  }

  return { selectedService, ...configs[selectedService] }
}

export async function removeBackground(file: File): Promise<ApiResponse> {
  const { selectedService, apiKey, endpoint } = getApiConfig()

  if (!apiKey) {
    throw new Error(`API key not configured for ${selectedService}. Please add it to your .env file.`)
  }

  try {
    const formData = new FormData()
    
    switch (selectedService) {
      case 'removebg':
        return await removeWithRemoveBg(file, apiKey, endpoint)
      
      case 'photoroom':
        return await removeWithPhotoRoom(file, apiKey, endpoint)
      
      case 'withoutbg':
        return await removeWithWithoutBg(file, apiKey, endpoint)
      
      case 'pixian':
        return await removeWithPixian(file, apiKey, endpoint)
      
      case 'removebgapi':
        return await removeWithRemoveBgApi(file, apiKey, endpoint)
      
      default:
        throw new Error(`Unsupported service: ${selectedService}`)
    }
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

// Remove.bg implementation
async function removeWithRemoveBg(file: File, apiKey: string, endpoint: string): Promise<ApiResponse> {
  const formData = new FormData()
  formData.append('image_file', file)
  formData.append('size', 'auto')

  const response = await axios.post(endpoint, formData, {
    headers: {
      'X-Api-Key': apiKey
    },
    responseType: 'blob'
  })

  const imageUrl = URL.createObjectURL(response.data)
  return { success: true, imageUrl }
}

// PhotoRoom implementation
async function removeWithPhotoRoom(file: File, apiKey: string, endpoint: string): Promise<ApiResponse> {
  const formData = new FormData()
  formData.append('image_file', file)

  const response = await axios.post(endpoint, formData, {
    headers: {
      'x-api-key': apiKey
    },
    responseType: 'blob'
  })

  const imageUrl = URL.createObjectURL(response.data)
  return { success: true, imageUrl }
}

// WithoutBG implementation
async function removeWithWithoutBg(file: File, apiKey: string, endpoint: string): Promise<ApiResponse> {
  const formData = new FormData()
  formData.append('image', file)
  formData.append('model', 'focus') // or 'snap' for faster processing

  const response = await axios.post(endpoint, formData, {
    headers: {
      'Authorization': `Bearer ${apiKey}`
    },
    responseType: 'blob'
  })

  const imageUrl = URL.createObjectURL(response.data)
  return { success: true, imageUrl }
}

// Pixian.AI implementation
async function removeWithPixian(file: File, apiKey: string, endpoint: string): Promise<ApiResponse> {
  const formData = new FormData()
  formData.append('image', file)

  const response = await axios.post(endpoint, formData, {
    headers: {
      'Authorization': `Bearer ${apiKey}`
    },
    responseType: 'blob'
  })

  const imageUrl = URL.createObjectURL(response.data)
  return { success: true, imageUrl }
}

// RemovebgAPI implementation
async function removeWithRemoveBgApi(file: File, apiKey: string, endpoint: string): Promise<ApiResponse> {
  const formData = new FormData()
  formData.append('image', file)

  const response = await axios.post(endpoint, formData, {
    headers: {
      'Authorization': `Bearer ${apiKey}`
    },
    responseType: 'blob'
  })

  const imageUrl = URL.createObjectURL(response.data)
  return { success: true, imageUrl }
}