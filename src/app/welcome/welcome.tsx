"use client"

import { Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-[#0d1117]">
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-white">
              <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" className="fill-white">
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="#" className="text-white hover:text-gray-300">
                Product
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                Solutions
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                Open Source
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                Pricing
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative max-w-[240px] hidden md:block">
              <Input
                type="text"
                placeholder="Search or jump to..."
                className="bg-[#1f2937] text-white border-gray-700 pl-8"
              />
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <Link href="/login" className="text-white hover:text-gray-300">
              Sign in
            </Link>
            <Button variant="outline" className="text-white border-gray-700 hover:border-white">
              Sign up
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-[1400px] mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 max-w-[1200px] mx-auto leading-tight">
          Build and ship software on a single, collaborative platform
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Join the world's most widely adopted AI-powered developer platform.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-[600px] mx-auto">
          <div className="flex-1 w-full">
            <Input type="email" placeholder="Enter your email" className="w-full bg-white text-gray-900" />
          </div>
          <Button className="w-full md:w-auto bg-[#238636] hover:bg-[#2ea043] text-white">Sign up for GitHub</Button>
          <Button variant="outline" className="w-full md:w-auto border-gray-700 text-white hover:border-white">
            Try GitHub Copilot
          </Button>
        </div>
      </main>
    </div>
  )
}

