import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Float } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Upload, Download, Sparkles, Info, Github } from 'lucide-react'
import Scene3D from './components/Scene3D'
import ImageProcessor from './components/ImageProcessor'
import ApiSelector from './components/ApiSelector'
import './App.css'

function App() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [processedImage, setProcessedImage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Scene3D />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          <Environment preset="night" />
        </Canvas>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-12 h-12 text-primary-400" />
            <h1 className="text-6xl font-bold gradient-text">PhotoRemover</h1>
          </div>
          <p className="text-xl text-gray-300 mb-4">
            Professional AI-powered background removal with stunning 3D interface
          </p>
          <a
            href="https://github.com/kevinriverrrr-sudo/PhotoRemover"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>View on GitHub</span>
          </a>
        </motion.header>

        {/* API Selector */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <ApiSelector />
        </motion.div>

        {/* Image Processor */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ImageProcessor
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            processedImage={processedImage}
            setProcessedImage={setProcessedImage}
            isProcessing={isProcessing}
            setIsProcessing={setIsProcessing}
          />
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 glass-effect rounded-2xl p-6"
        >
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Supported Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>Remove.bg:</strong> 50 free/month, industry leader in quality</li>
                <li>• <strong>PhotoRoom:</strong> 25 free/month, fastest processing ($0.02/image)</li>
                <li>• <strong>WithoutBG:</strong> Open-source models, privacy-focused</li>
                <li>• <strong>Pixian.AI:</strong> Free for low-res, great for testing</li>
                <li>• <strong>RemovebgAPI:</strong> 100 free credits, developer-friendly</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="text-center mt-16 text-gray-400">
          <p>Created with ❤️ by <a href="https://github.com/kevinriverrrr-sudo" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">kevinriverrrr-sudo</a></p>
          <p className="text-sm mt-2">MIT License · Free to use with attribution</p>
        </footer>
      </div>
    </div>
  )
}

export default App