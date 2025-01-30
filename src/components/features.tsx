"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Features() {
  const [activeTab, setActiveTab] = useState("code")

  const features = {
    code: {
      title: "Code",
      description: "Build code quickly and more securely with GitHub Copilot embedded throughout your workflows.",
    },
    plan: {
      title: "Plan",
      description: "Create and manage your project roadmap with powerful planning tools.",
    },
    collaborate: {
      title: "Collaborate",
      description: "Work together seamlessly with built-in code review and team management features.",
    },
    automate: {
      title: "Automate",
      description: "Streamline your workflow with GitHub Actions for CI/CD and automation.",
    },
    secure: {
      title: "Secure",
      description: "Keep your code secure with advanced security features and automated vulnerability scanning.",
    },
  }

  return (
    <section className="py-20 bg-[#0d1117]">
      <div className="max-w-[1400px] mx-auto px-4">
        <Tabs defaultValue="code" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="w-full max-w-2xl mx-auto bg-transparent border rounded-full p-1">
            {Object.entries(features).map(([key, value]) => (
              <TabsTrigger key={key} value={key} className="rounded-full data-[state=active]:bg-white/10">
                {value.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(features).map(([key, value]) => (
            <TabsContent key={key} value={key} className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold text-white mb-4">{value.title}</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-8">{value.description}</p>
                <div className="bg-[#161b22] rounded-lg p-8 max-w-4xl mx-auto">
                  {/* Placeholder for feature-specific content */}
                  <div className="aspect-video bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg" />
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

