/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ChevronDown } from "lucide-react"

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.h1
          className="text-center text-5xl font-bold tracking-tight mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get the complete developer platform.
        </motion.h1>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="relative p-8 bg-[#161b22] border-gray-800">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Free</h3>
                <p className="text-gray-400">The basics for individuals and organizations</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="ml-1 text-gray-400">USD</span>
                  <span className="ml-2 text-gray-400">per user/month</span>
                </div>
                <Button className="w-full" variant="outline" onClick={() => setSelectedPlan("free")}>
                  Join for free
                </Button>
                <ul className="space-y-3 pt-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Unlimited public/private repositories</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>2,000 CI/CD minutes/month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>500MB of Packages storage</span>
                  </li>
                </ul>
              </div>
            </Card>
          </motion.div>

          {/* Team Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="relative p-8 bg-[#161b22] border-gray-800">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Team</h3>
                <p className="text-gray-400">Advanced collaboration for teams</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">$4</span>
                  <span className="ml-1 text-gray-400">USD</span>
                  <span className="ml-2 text-gray-400">per user/month</span>
                </div>
                <Button className="w-full" onClick={() => setSelectedPlan("team")}>
                  Continue with Team
                </Button>
                <ul className="space-y-3 pt-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Everything in Free</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Protected branches</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Multiple reviewers in pull requests</span>
                  </li>
                </ul>
              </div>
            </Card>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="relative p-8 bg-[#161b22] border-gray-800 ring-2 ring-blue-500">
              <Badge className="absolute -top-3 right-8 bg-blue-500">RECOMMENDED</Badge>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Enterprise</h3>
                <p className="text-gray-400">Security, compliance, and flexible deployment</p>
                <div className="flex items-baseline">
                  <span className="text-sm text-gray-400">Starting at</span>
                  <span className="ml-2 text-4xl font-bold">$21</span>
                  <span className="ml-1 text-gray-400">USD</span>
                  <span className="ml-2 text-gray-400">per user/month</span>
                </div>
                <div className="space-y-2">
                  <Button className="w-full" onClick={() => setSelectedPlan("enterprise")}>
                    Start a free trial
                  </Button>
                  <Button className="w-full" variant="outline">
                    Contact Sales
                  </Button>
                </div>
                <ul className="space-y-3 pt-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Everything in Team</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>SAML single sign-on</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Advanced auditing</span>
                  </li>
                </ul>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Add-ons Section */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">Additional add-ons</h2>
          <div className="grid gap-8 lg:grid-cols-4">
            {/* GitHub Copilot */}
            <Card className="p-6 bg-[#161b22] border-gray-800">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-500" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.71c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48C19.14 20.17 22 16.42 22 12c0-5.523-4.477-10-10-10z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">GitHub Copilot</h3>
                <p className="text-gray-400">
                  Get started for free with up to 2,000 completions and 50 chat requests per month.
                </p>
                <Button variant="outline" className="w-full">
                  Compare plans
                </Button>
              </div>
            </Card>

            {/* Codespaces */}
            <Card className="p-6 bg-[#161b22] border-gray-800">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <svg className="h-6 w-6 text-purple-500" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm10 4H7v2h10v-2zM7 15h7v2H7v-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl text-white font-bold">Codespaces</h3>
                <p className="text-white text-gray-400">
                  Starting at $0.18 per hour of compute and $0.07 per GB of storage.
                </p>
                <Button variant="outline" className="w-full">
                  Learn more
                </Button>
              </div>
            </Card>

            {/* Large File Storage */}
            <Card className="p-6 bg-[#161b22] border-gray-800">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
                  <svg className="h-6 w-6 text-yellow-500" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                  </svg>
                </div>
                <h3 className="text-xl text-white font-bold">Large File Storage</h3>
                <p className="text-white text-gray-400">$5 per month for 50 GB bandwidth and 50 GB for storage.</p>
                <Button variant="outline" className="w-full">
                  Learn more
                </Button>
              </div>
            </Card>

            {/* GitHub Advanced Security */}
            <Card className="p-6 bg-[#161b22] border-gray-800">
              <div className="space-y-4">
                <div className="relative">
                  <Badge className="absolute -top-1 right-0 bg-gray-700">Enterprise Only</Badge>
                  <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                    <svg className="h-6 w-6 text-green-500" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl text-white font-bold">GitHub Advanced Security</h3>
                <p className="text-white text-gray-400">$49 per month per active committer.</p>
                <Button variant="outline" className="w-full">
                  Learn more
                </Button>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Compare Features Button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button
            variant="ghost"
            className="text-blue-500 hover:text-blue-400"
            onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
          >
            Compare all features
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

