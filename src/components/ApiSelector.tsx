import { useState } from 'react'
import { motion } from 'framer-motion'
import { Settings, ExternalLink, CheckCircle2 } from 'lucide-react'
import type { ApiService } from '../types'

const API_SERVICES = [
  {
    id: 'removebg' as ApiService,
    name: 'Remove.bg',
    freeQuota: '50/month',
    pricing: 'From $0.05/image',
    quality: 'Excellent',
    speed: 'Fast',
    docs: 'https://www.remove.bg/api',
    signup: 'https://www.remove.bg/users/sign_up'
  },
  {
    id: 'photoroom' as ApiService,
    name: 'PhotoRoom',
    freeQuota: '25/month',
    pricing: '$0.02/image',
    quality: 'Excellent',
    speed: 'Very Fast',
    docs: 'https://www.photoroom.com/api',
    signup: 'https://www.photoroom.com/api'
  },
  {
    id: 'withoutbg' as ApiService,
    name: 'WithoutBG',
    freeQuota: 'Unlimited (local)',
    pricing: '€0.05/image (Pro)',
    quality: 'Very Good',
    speed: 'Fast',
    docs: 'https://withoutbg.com',
    signup: 'https://withoutbg.com'
  },
  {
    id: 'pixian' as ApiService,
    name: 'Pixian.AI',
    freeQuota: '0.25mpx unlimited',
    pricing: 'Paid for 25mpx',
    quality: 'Good',
    speed: 'Medium',
    docs: 'https://pixian.ai/api',
    signup: 'https://pixian.ai/api'
  },
  {
    id: 'removebgapi' as ApiService,
    name: 'RemovebgAPI',
    freeQuota: '100 credits',
    pricing: 'From $0.001/image',
    quality: 'Very Good',
    speed: 'Very Fast',
    docs: 'https://removebgapi.com',
    signup: 'https://removebgapi.com'
  }
]

export default function ApiSelector() {
  const [selectedService, setSelectedService] = useState<ApiService>('removebg')
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className="glass-effect rounded-2xl p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Settings className="w-6 h-6 text-primary-400" />
          Select API Service
        </h2>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-sm text-primary-400 hover:text-primary-300 transition-colors"
        >
          {showDetails ? 'Hide' : 'Show'} Details
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {API_SERVICES.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedService(service.id)}
            className={`relative cursor-pointer rounded-xl p-4 border-2 transition-all ${
              selectedService === service.id
                ? 'border-primary-400 bg-primary-400/10'
                : 'border-white/20 hover:border-white/40'
            }`}
          >
            {selectedService === service.id && (
              <CheckCircle2 className="absolute top-2 right-2 w-5 h-5 text-primary-400" />
            )}
            <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
            {showDetails && (
              <div className="space-y-1 text-sm text-gray-300">
                <p>🎫 {service.freeQuota}</p>
                <p>💵 {service.pricing}</p>
                <p>⭐ {service.quality}</p>
                <p>⚡ {service.speed}</p>
                <div className="flex gap-2 mt-3">
                  <a
                    href={service.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs text-primary-400 hover:text-primary-300 flex items-center gap-1"
                  >
                    Docs <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={service.signup}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs text-accent-pink hover:text-accent-pink/80 flex items-center gap-1"
                  >
                    Get Key <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
        <p className="text-sm text-yellow-200">
          🔑 <strong>Setup Required:</strong> Copy <code className="bg-black/30 px-2 py-1 rounded">.env.example</code> to <code className="bg-black/30 px-2 py-1 rounded">.env</code> and add your API key for {API_SERVICES.find(s => s.id === selectedService)?.name}.
        </p>
      </div>
    </div>
  )
}