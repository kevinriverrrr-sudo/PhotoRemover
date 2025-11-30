export interface ImageFile {
  file: File;
  preview: string;
}

export interface ProcessedImage {
  url: string;
  blob: Blob;
}

export type ApiService = 'removebg' | 'photoroom' | 'withoutbg' | 'pixian' | 'removebgapi';

export interface ApiConfig {
  name: string;
  endpoint: string;
  apiKey: string;
  freeQuota: string;
  pricing: string;
  documentation: string;
}

export interface ApiResponse {
  success: boolean;
  imageUrl?: string;
  error?: string;
}