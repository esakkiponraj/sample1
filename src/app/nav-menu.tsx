"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, Menu, Search } from "lucide-react"

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProductOpen, setIsProductOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isOpenSourceOpen, setIsOpenSourceOpen] = useState(false)
  const productMenuRef = useRef<HTMLDivElement>(null)
  const solutionsMenuRef = useRef<HTMLDivElement>(null)
  const openSourceMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (productMenuRef.current && !productMenuRef.current.contains(event.target as Node)) {
        setIsProductOpen(false)
      }
      if (solutionsMenuRef.current && !solutionsMenuRef.current.contains(event.target as Node)) {
        setIsSolutionsOpen(false)
      }
      if (openSourceMenuRef.current && !openSourceMenuRef.current.contains(event.target as Node)) {
        setIsOpenSourceOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-800 bg-[#0d1117]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <svg height="32" viewBox="0 0 16 16" width="32" className="text-white">
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <div ref={productMenuRef} className="relative">
                  <Button variant="ghost" className="text-white" onClick={() => setIsProductOpen(!isProductOpen)}>
                    Product <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                  {isProductOpen && (
                    <div className="absolute left-0 mt-2 w-80 rounded-lg bg-[#0d1117] border border-gray-800 shadow-lg">
                      <div className="p-4 space-y-4">
                        <Link href="/copilot" className="flex items-start space-x-3 p-3 rounded-md hover:bg-gray-800">
                          <div className="mt-1">
                            <svg height="24" viewBox="0 0 24 24" width="24" className="text-white">
                              <path
                                d="M12 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 01-1.484.211c-.04-.282-.163-.547-.37-.847a8.695 8.695 0 00-.542-.68c-.084-.1-.173-.205-.268-.32C7.06 7.784 6.5 6.819 6.5 5.25 6.5 2.31 8.863 0 12 0s5.5 2.31 5.5 5.25c0 1.57-.56 2.534-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.542.681-.208.3-.33.565-.37.847a.75.75 0 01-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.089.147-.173.214-.253.56-.679.984-1.32.984-2.304 0-2.06-1.637-3.75-4-3.75z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-semibold text-white">GitHub Copilot</h3>
                            <p className="text-sm text-gray-400">Write better code with AI</p>
                          </div>
                        </Link>
                        <Link href="/security" className="flex items-start space-x-3 p-3 rounded-md hover:bg-gray-800">
                          <div className="mt-1">
                            <svg height="24" viewBox="0 0 24 24" width="24" className="text-white">
                              <path
                                d="M12 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 01-1.484.211c-.04-.282-.163-.547-.37-.847a8.695 8.695 0 00-.542-.68c-.084-.1-.173-.205-.268-.32C7.06 7.784 6.5 6.819 6.5 5.25 6.5 2.31 8.863 0 12 0s5.5 2.31 5.5 5.25c0 1.57-.56 2.534-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.542.681-.208.3-.33.565-.37.847a.75.75 0 01-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.089.147-.173.214-.253.56-.679.984-1.32.984-2.304 0-2.06-1.637-3.75-4-3.75z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-semibold text-white">Security</h3>
                            <p className="text-sm text-gray-400">Find and fix vulnerabilities</p>
                          </div>
                        </Link>
                        <Link href="/actions" className="flex items-start space-x-3 p-3 rounded-md hover:bg-gray-800">
                          <div className="mt-1">
                            <svg height="24" viewBox="0 0 24 24" width="24" className="text-white">
                              <path
                                d="M12 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 01-1.484.211c-.04-.282-.163-.547-.37-.847a8.695 8.695 0 00-.542-.68c-.084-.1-.173-.205-.268-.32C7.06 7.784 6.5 6.819 6.5 5.25 6.5 2.31 8.863 0 12 0s5.5 2.31 5.5 5.25c0 1.57-.56 2.534-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.542.681-.208.3-.33.565-.37.847a.75.75 0 01-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.089.147-.173.214-.253.56-.679.984-1.32.984-2.304 0-2.06-1.637-3.75-4-3.75z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-semibold text-white">Actions</h3>
                            <p className="text-sm text-gray-400">Automate any workflow</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <div ref={solutionsMenuRef} className="relative">
                  <Button variant="ghost" className="text-white" onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}>
                    Solutions <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                  {isSolutionsOpen && (
                    <div className="absolute left-0 mt-2 w-[480px] rounded-lg bg-[#0d1117] border border-gray-800 shadow-lg">
                      <div className="p-6 grid grid-cols-2 gap-8">
                        <div>
                          <h3 className="font-semibold text-white mb-4">By company size</h3>
                          <div className="space-y-3">
                            <Link href="/enterprise" className="block text-gray-300 hover:text-white">
                              Enterprises
                            </Link>
                            <Link href="/teams" className="block text-gray-300 hover:text-white">
                              Small and medium teams
                            </Link>
                            <Link href="/startups" className="block text-gray-300 hover:text-white">
                              Startups
                            </Link>
                            <Link href="/nonprofits" className="block text-gray-300 hover:text-white">
                              Nonprofits
                            </Link>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-4">By industry</h3>
                          <div className="space-y-3">
                            <Link href="/healthcare" className="block text-gray-300 hover:text-white">
                              Healthcare
                            </Link>
                            <Link href="/financial-services" className="block text-gray-300 hover:text-white">
                              Financial services
                            </Link>
                            <Link href="/manufacturing" className="block text-gray-300 hover:text-white">
                              Manufacturing
                            </Link>
                            <Link href="/government" className="block text-gray-300 hover:text-white">
                              Government
                            </Link>
                            <Link href="/industries" className="block text-gray-300 hover:text-white">
                              View all industries
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-800 p-4">
                        <Link href="/solutions" className="text-sm text-gray-400 hover:text-white">
                          View all solutions →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <div ref={openSourceMenuRef} className="relative">
                  <Button variant="ghost" className="text-white" onClick={() => setIsOpenSourceOpen(!isOpenSourceOpen)}>
                    Open Source <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                  {isOpenSourceOpen && (
                    <div className="absolute left-0 mt-2 w-[480px] rounded-lg bg-[#0d1117] border border-gray-800 shadow-lg">
                      <div className="p-6 grid grid-cols-2 gap-8">
                        <div>
                          <h3 className="font-semibold text-white mb-4">Topics</h3>
                          <div className="space-y-3">
                            <Link href="/topics/ai" className="block text-gray-300 hover:text-white">
                              AI
                            </Link>
                            <Link href="/topics/devops" className="block text-gray-300 hover:text-white">
                              DevOps
                            </Link>
                            <Link href="/topics/security" className="block text-gray-300 hover:text-white">
                              Security
                            </Link>
                            <Link href="/topics/software-development" className="block text-gray-300 hover:text-white">
                              Software Development
                            </Link>
                            <Link href="/topics" className="block text-gray-300 hover:text-white">
                              View all
                            </Link>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-4">Explore</h3>
                          <div className="space-y-3">
                            <Link href="/learning" className="block text-gray-300 hover:text-white">
                              Learning Pathways
                            </Link>
                            <Link href="/resources" className="block text-gray-300 hover:text-white">
                              White papers, Ebooks, Webinars
                            </Link>
                            <Link href="/customer-stories" className="block text-gray-300 hover:text-white">
                              Customer Stories
                            </Link>
                            <Link href="/partners" className="block text-gray-300 hover:text-white">
                              Partners
                            </Link>
                            <Link href="/insights" className="block text-gray-300 hover:text-white">
                              Executive Insights
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <Link
                  href="/pricing"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Pricing
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search or jump to..."
                  className="w-72 bg-gray-900 text-white placeholder-gray-400 border-gray-700"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <kbd className="border border-gray-700 rounded px-1.5 text-xs text-gray-400">/</kbd>
                </div>
              </div>
              <Link href="/login" className="text-white hover:text-gray-300">
                Sign in
              </Link>
              <Button>Sign up</Button>
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

