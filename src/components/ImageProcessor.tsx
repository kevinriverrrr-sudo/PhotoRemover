import { useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import { Upload, Download, Loader2, X, Image as ImageIcon } from 'lucide-react'
import { removeBackground } from '../services/api'

interface ImageProcessorProps {
  selectedFile: File | null
  setSelectedFile: (file: File | null) => void
  processedImage: string | null
  setProcessedImage: (url: string | null) => void
  isProcessing: boolean
  setIsProcessing: (processing: boolean) => void
}

export default function ImageProcessor({
  selectedFile,
  setSelectedFile,
  processedImage,
  setProcessedImage,
  isProcessing,
  setIsProcessing
}: ImageProcessorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = useCallback((file: File) => {
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file)
      setProcessedImage(null)
    }
  }, [setSelectedFile, setProcessedImage])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) handleFileSelect(file)
  }, [handleFileSelect])

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFileSelect(file)
  }

  const handleRemoveBackground = async () => {
    if (!selectedFile) return

    setIsProcessing(true)
    try {
      const result = await removeBackground(selectedFile)
      setProcessedImage(result.imageUrl || '')
    } catch (error) {
      console.error('Error removing background:', error)
      alert('Failed to remove background. Please check your API key and try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  const handleDownload = () => {
    if (processedImage) {
      const link = document.createElement('a')
      link.href = processedImage
      link.download = 'removed-background.png'
      link.click()
    }
  }

  const handleReset = () => {
    setSelectedFile(null)
    setProcessedImage(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Upload Section */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass-effect rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Upload className="w-6 h-6 text-primary-400" />
          Upload Image
        </h2>

        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="border-2 border-dashed border-primary-400/50 rounded-xl p-12 text-center hover:border-primary-400 transition-colors cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          {selectedFile ? (
            <div className="relative">
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Selected"
                className="max-h-64 mx-auto rounded-lg"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleReset()
                }}
                className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <ImageIcon className="w-16 h-16 mx-auto text-primary-400" />
              <p className="text-xl">Drag & drop your image here</p>
              <p className="text-sm text-gray-400">or click to browse</p>
              <p className="text-xs text-gray-500">Supports: JPG, PNG, WEBP, HEIC</p>
            </div>
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
        />

        {selectedFile && !processedImage && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={handleRemoveBackground}
            disabled={isProcessing}
            className="w-full mt-6 bg-gradient-to-r from-primary-500 to-accent-purple hover:from-primary-600 hover:to-accent-purple/90 text-white font-semibold py-4 px-6 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing...
              </>
            ) : (
              'Remove Background'
            )}
          </motion.button>
        )}
      </motion.div>

      {/* Result Section */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass-effect rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Download className="w-6 h-6 text-primary-400" />
          Result
        </h2>

        <div className="border-2 border-primary-400/50 rounded-xl p-12 text-center min-h-[400px] flex items-center justify-center bg-checkered">
          {processedImage ? (
            <div className="space-y-4 w-full">
              <img
                src={processedImage}
                alt="Processed"
                className="max-h-64 mx-auto rounded-lg"
              />
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={handleDownload}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Result
              </motion.button>
            </div>
          ) : (
            <div className="text-gray-400">
              <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>Your processed image will appear here</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

// Add checkered background CSS
const style = document.createElement('style')
style.textContent = `
  .bg-checkered {
    background-image:
      linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%),
      linear-gradient(-45deg, rgba(255,255,255,0.05) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.05) 75%),
      linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.05) 75%);
    background-size: 20px 20px;
    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  }
`
document.head.appendChild(style)