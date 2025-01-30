"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const features = [
  {
    category: "Code management",
    items: [
      { name: "Public repositories", free: true, team: true, enterprise: true },
      { name: "Private repositories", free: true, team: true, enterprise: true },
      { name: "Protected branches", free: false, team: true, enterprise: true },
    ],
  },
  {
    category: "Code workflow",
    items: [
      { name: "GitHub Actions", free: "2,000 minutes", team: "3,000 minutes", enterprise: "50,000 minutes" },
      { name: "GitHub Packages", free: "500MB", team: "2GB", enterprise: "Unlimited" },
      { name: "GitHub Codespaces", free: false, team: true, enterprise: true },
    ],
  },
]

export function FeatureComparison() {
  return (
    <div id="features" className="py-24">
      <motion.h2
        className="text-3xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Compare features
      </motion.h2>

      <div className="space-y-16">
        {features.map((section, index) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-8">{section.category}</h3>
            <div className="space-y-4">
              {section.items.map((feature, featureIndex) => (
                <div key={feature.name} className="grid grid-cols-4 gap-4 py-4 border-b border-gray-800">
                  <div>{feature.name}</div>
                  <div className="text-center">
                    {typeof feature.free === "boolean" ? (
                      feature.free ? (
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      ) : (
                        "-"
                      )
                    ) : (
                      feature.free
                    )}
                  </div>
                  <div className="text-center">
                    {typeof feature.team === "boolean" ? (
                      feature.team ? (
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      ) : (
                        "-"
                      )
                    ) : (
                      feature.team
                    )}
                  </div>
                  <div className="text-center">
                    {typeof feature.enterprise === "boolean" ? (
                      feature.enterprise ? (
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      ) : (
                        "-"
                      )
                    ) : (
                      feature.enterprise
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

