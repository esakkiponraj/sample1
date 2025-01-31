/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import {
  Search,
  Bell,
  Plus,
  ChevronDown,
  History,
  GitPullRequest,
  Play,
  Star,
  Menu,
  Clock,
  HelpCircle,
  MoreVertical,
} from "lucide-react"

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-[#0d1117]">
      {/* Top Navigation */}
      <nav className="border-b border-gray-800 bg-[#161b22] sticky top-0 z-50">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-400">
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/" className="text-white flex items-center space-x-2">
              <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" className="fill-white">
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
              <span className="font-semibold">Dashboard</span>
            </Link>
          </div>

          <div className="flex-1 max-w-2xl px-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Type / to search"
                className="w-full bg-[#0d1117] border-gray-700 focus:border-blue-500 pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <span className="absolute right-2.5 top-2 text-xs border border-gray-600 rounded px-1.5 text-gray-400">
                /
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-400">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400">
              <Plus className="h-4 w-4 mr-1" />
              <ChevronDown className="h-3 w-3" />
            </Button>
            <img src="/placeholder.svg?height=32&width=32" alt="User avatar" className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="col-span-3">
            <div className="bg-[#161b22] rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-semibold text-white mb-4">Create your first project</h2>
              <p className="text-gray-400 mb-4">
                Ready to start building? Create a repository for a new idea or bring over an existing repository to keep
                contributing to it.
              </p>
              <div className="space-y-3">
                <Button className="w-full bg-[#238636] hover:bg-[#2ea043] text-white">Create repository</Button>
                <Button variant="outline" className="w-full border-gray-700 text-blue-400 hover:border-gray-600">
                  Import repository
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-6">
            {/* Copilot Search */}
            <div className="mb-8">
              <div className="relative">
                <Input
                  placeholder="Ask Copilot"
                  className="w-full bg-[#161b22] border-gray-700 focus:border-blue-500 pl-10"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex space-x-4 mb-8">
              <Button variant="ghost" className="text-gray-400">
                <Clock className="h-4 w-4 mr-2" />
                Open issues in facebook/react
              </Button>
              <Button variant="ghost" className="text-gray-400">
                <GitPullRequest className="h-4 w-4 mr-2" />
                Latest nodejs/node release
              </Button>
              <Button variant="ghost" className="text-gray-400">
                <HelpCircle className="h-4 w-4 mr-2" />
                How can you help?
              </Button>
            </div>

            {/* Home Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Home</h2>

              <div className="flex items-center space-x-2 text-sm text-blue-400 mb-4">
                <Play className="h-4 w-4" />
                <span>Learn with a tutorial project</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-[#161b22] border-gray-800 p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Introduction to GitHub</h3>
                  <p className="text-gray-400">Get started using GitHub in less than an hour.</p>
                </Card>

                <Card className="bg-[#161b22] border-gray-800 p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">GitHub Pages</h3>
                  <p className="text-gray-400">
                    Create a site or blog from your GitHub repositories with GitHub Pages.
                  </p>
                </Card>

                <Card className="bg-[#161b22] border-gray-800 p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Code with Copilot</h3>
                  <p className="text-gray-400">
                    Develop with AI-powered code suggestions using GitHub Copilot, Codespaces, and VS Code.
                  </p>
                </Card>

                <Card className="bg-[#161b22] border-gray-800 p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Hello GitHub Actions</h3>
                  <p className="text-gray-400">Create a GitHub Action and use it in a workflow.</p>
                </Card>
              </div>

              <Button variant="link" className="text-blue-400 p-0">
                See more tutorial projects
              </Button>
            </div>

            {/* Recent Activity Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <Card className="bg-[#161b22] border-gray-800 p-4">
                  <div className="flex items-center">
                    <History className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <p className="text-sm text-gray-300">
                        You starred <span className="text-blue-400">facebook/react</span>
                      </p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                </Card>
                <Card className="bg-[#161b22] border-gray-800 p-4">
                  <div className="flex items-center">
                    <GitPullRequest className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <p className="text-sm text-gray-300">
                        You opened a pull request in <span className="text-blue-400">your-username/your-project</span>
                      </p>
                      <p className="text-xs text-gray-500">Yesterday</p>
                    </div>
                  </div>
                </Card>
                <Card className="bg-[#161b22] border-gray-800 p-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <p className="text-sm text-gray-300">
                        You forked <span className="text-blue-400">vercel/next.js</span>
                      </p>
                      <p className="text-xs text-gray-500">3 days ago</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3">
            <div className="bg-[#161b22] rounded-lg p-6 border border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">Your Repositories</h2>
                <Button variant="ghost" size="sm" className="text-gray-400">
                  <Plus className="h-4 w-4 mr-1" />
                  New
                </Button>
              </div>

              <div className="space-y-4">
                <Card className="bg-[#0d1117] border-gray-800 p-4">
                  <h3 className="text-blue-400 font-medium mb-1">your-username/project-1</h3>
                  <p className="text-sm text-gray-400">Your awesome project description</p>
                  <div className="flex items-center mt-2 text-sm">
                    <span className="flex items-center text-gray-400">
                      <Star className="h-3 w-3 mr-1" />
                      10
                    </span>
                    <span className="ml-3 text-gray-400">JavaScript</span>
                  </div>
                </Card>

                <Card className="bg-[#0d1117] border-gray-800 p-4">
                  <h3 className="text-blue-400 font-medium mb-1">your-username/project-2</h3>
                  <p className="text-sm text-gray-400">Another cool project</p>
                  <div className="flex items-center mt-2 text-sm">
                    <span className="flex items-center text-gray-400">
                      <Star className="h-3 w-3 mr-1" />5
                    </span>
                    <span className="ml-3 text-gray-400">TypeScript</span>
                  </div>
                </Card>
              </div>

              <Button variant="link" className="text-blue-400 p-0 mt-4">
                Show more
              </Button>
            </div>
            <div className="mt-6 bg-[#161b22] rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-semibold text-white mb-4">Explore repositories</h2>
              <div className="space-y-4">
                <Card className="bg-[#0d1117] border-gray-800 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-blue-400 font-medium mb-1">nerves-hub / nerves_hub_web</h3>
                      <p className="text-sm text-gray-400">Manage firmware updates for Nerves devices</p>
                    </div>
                    <Button variant="ghost" size="icon" className="text-gray-400">
                      <Star className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center mt-2 text-sm">
                    <span className="flex items-center text-gray-400">
                      <Star className="h-3 w-3 mr-1" />
                      220
                    </span>
                    <span className="ml-3 text-gray-400">Elixir</span>
                  </div>
                </Card>

                <Card className="bg-[#0d1117] border-gray-800 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-blue-400 font-medium mb-1">internetarchive / openlibrary</h3>
                      <p className="text-sm text-gray-400">One webpage for every book ever published!</p>
                    </div>
                    <Button variant="ghost" size="icon" className="text-gray-400">
                      <Star className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center mt-2 text-sm">
                    <span className="flex items-center text-gray-400">
                      <Star className="h-3 w-3 mr-1" />
                      5.4k
                    </span>
                    <span className="ml-3 text-gray-400">Python</span>
                  </div>
                </Card>
              </div>

              <Button variant="link" className="text-blue-400 p-0 mt-4">
                Explore more →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

