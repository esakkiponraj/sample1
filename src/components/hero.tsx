/* eslint-disable react/no-unescaped-entities */
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1117] via-[#161b22] to-[#0d1117] flex items-center justify-center pt-16">
      <div className="max-w-[1400px] mx-auto px-4 text-center relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8 max-w-[1200px] mx-auto leading-tight"
        >
          Build and ship software on a single, collaborative platform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 mb-12 max-w-[800px] mx-auto"
        >
          Join the world's most widely adopted AI-powered developer platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-[600px] mx-auto"
        >
          <div className="flex-1 w-full">
            <Input type="email" placeholder="Enter your email" className="w-full bg-white text-gray-900" />
          </div>
          <Button
            size="lg"
            className="w-full md:w-auto bg-[#238636] hover:bg-[#2ea043] text-white"
            onClick={() => (window.location.href = "/signup")}
          >
            Sign up for GitHub
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10"
        >
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/30 rounded-full filter blur-3xl animate-pulse delay-1000" />
        </motion.div>
      </div>
    </div>
  )
}

