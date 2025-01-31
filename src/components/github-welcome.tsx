/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GitBranch, GitFork, Plus, Search, Star } from "lucide-react"
import Link from "next/link"

export default function GitHubWelcome() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <svg
              height="32"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              data-view-component="true"
              className="fill-current"
            >
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
            <nav className="hidden md:flex space-x-4">
              <Link href="#" className="hover:text-gray-300">
                Product
              </Link>
              <Link href="#" className="hover:text-gray-300">
                Solutions
              </Link>
              <Link href="#" className="hover:text-gray-300">
                Open Source
              </Link>
              <Link href="#" className="hover:text-gray-300">
                Pricing
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Input
              type="search"
              placeholder="Search or jump to..."
              className="bg-gray-800 text-white placeholder-gray-400 border-gray-700"
            />
            <Button variant="ghost" size="icon">
              <Plus className="h-4 w-4" />
              <span className="sr-only">New repository</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 dark:text-white">Welcome to GitHub</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">Popular Repositories</h2>
            <ul className="space-y-4">
              {["react", "vue", "angular", "svelte", "nextjs"].map((repo) => (
                <li key={repo} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <GitBranch className="h-4 w-4 text-gray-500" />
                    <span className="dark:text-gray-200">{repo}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">10k</span>
                    <GitFork className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">2k</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">Getting Started</h2>
            <ul className="space-y-2 list-disc list-inside dark:text-gray-200">
              <li>Create a repository</li>
              <li>Clone the repository</li>
              <li>Push your first commit</li>
              <li>Create a pull request</li>
              <li>Collaborate with others</li>
            </ul>
            <Button className="mt-4">Create a repository</Button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <svg
                height="24"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                width="24"
                data-view-component="true"
                className="fill-current text-gray-600 dark:text-gray-400"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
            </div>
            <nav className="flex flex-wrap justify-center space-x-4">
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Security
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Status
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Help
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
            © 2023 GitHub, Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

