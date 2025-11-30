import type { ApiService, ApiConfig } from '../types'

export const API_SERVICES: Record<ApiService, ApiConfig> = {
  removebg: {
    name: 'Remove.bg',
    endpoint: 'https://api.remove.bg/v1.0/removebg',
    apiKey: import.meta.env.VITE_REMOVEBG_API_KEY || '',
    freeQuota: '50 images per month',
    pricing: 'From $0.05 per image',
    documentation: 'https://www.remove.bg/api'
  },
  photoroom: {
    name: 'PhotoRoom',
    endpoint: 'https://sdk.photoroom.com/v1/segment',
    apiKey: import.meta.env.VITE_PHOTOROOM_API_KEY || '',
    freeQuota: '25 images per month',
    pricing: '$0.02 per image (1000+ images)',
    documentation: 'https://www.photoroom.com/api'
  },
  withoutbg: {
    name: 'WithoutBG',
    endpoint: 'https://api.withoutbg.com/v1/remove',
    apiKey: import.meta.env.VITE_WITHOUTBG_API_KEY || '',
    freeQuota: 'Unlimited with local model',
    pricing: '€0.05 per image (Pro API)',
    documentation: 'https://withoutbg.com'
  },
  pixian: {
    name: 'Pixian.AI',
    endpoint: 'https://api.pixian.ai/api/v2/remove-background',
    apiKey: import.meta.env.VITE_PIXIAN_API_KEY || '',
    freeQuota: '0.25mpx unlimited use',
    pricing: 'Paid for 25mpx images',
    documentation: 'https://pixian.ai/api'
  },
  removebgapi: {
    name: 'RemovebgAPI',
    endpoint: 'https://removebgapi.com/api/v1/remove',
    apiKey: import.meta.env.VITE_REMOVEBGAPI_KEY || '',
    freeQuota: '100 free credits',
    pricing: 'From $0.001 per image',
    documentation: 'https://removebgapi.com'
  }
}

export function getSelectedService(): ApiService {
  return (import.meta.env.VITE_SELECTED_SERVICE || 'removebg') as ApiService
}

export function getServiceConfig(service: ApiService): ApiConfig {
  return API_SERVICES[service]
}