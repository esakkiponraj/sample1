/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"


import { useState } from "react"
import { signUp, signIn } from "@/action/auth"
import { Eye, EyeOff, Loader } from "lucide-react"
import Link from "next/link"


export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    userType: "user",
  })
  const [message, setMessage] = useState<{ type: "error" | "success"; text: string } | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    validateField(name, value)
  }

  const validateField = (name: string, value: string) => {
    let error = ""
    switch (name) {
      case "username":
        if (value.length < 3) error = "Username must be at least 3 characters long"
        break
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) error = "Email is invalid"
        break
      case "password":
        if (value.length < 6) error = "Password must be at least 6 characters long"
        break
    }
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)
    setIsLoading(true)

    if (!formData.username || !formData.email || !formData.password || Object.values(errors).some((error) => error)) {
      setMessage({ type: "error", text: "Please fill in all fields correctly." })
      setIsLoading(false)
      return
    }

    try {
      const form = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value)
      })

      const result = isSignUp ? await signUp(form) : await signIn(form)

      if (result.success) {
        setMessage({ type: "success", text: "Sign in successful! Redirecting..." })
        if (rememberMe) {
          localStorage.setItem("rememberedUser", formData.username)
        }
        localStorage.setItem("isAuthenticated", "true")
        setTimeout(() => {
          window.location.href = "/dashboard"
        }, 1000)
      } else {
        setMessage({
          type: "error",
          text: result.message.toLowerCase().includes("already exists")
            ? "An account with this email already exists. Please login instead."
            : result.message,
        })
      }
    } catch (error) {
      setMessage({ type: "error", text: "An unexpected error occurred. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  const toggleForm = () => {
    setIsSignUp(!isSignUp)
    setFormData({
      username: "",
      email: "",
      password: "",
      userType: "user",
    })
    setMessage(null)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0d1117]">
      <div className="w-full max-w-md p-8 space-y-8 bg-[#161b22] rounded-lg shadow-md">
        <div className="text-center">
          <Link href="/" className="inline-block">
            <svg height="48" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="48" className="fill-white">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-white">{isSignUp ? "Create Account" : "Sign In"}</h2>
        </div>

        {message && (
          <div
            className={`p-4 rounded-md ${
              message.type === "error" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-300">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 mt-1 bg-[#0d1117] text-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.username ? "border-red-500" : "border-gray-700"
              }`}
              required
            />
            {errors.username && <p className="mt-1 text-xs text-red-500">{errors.username}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 mt-1 bg-[#0d1117] text-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-700"
              }`}
              required
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 mt-1 bg-[#0d1117] text-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.password ? "border-red-500" : "border-gray-700"
                }`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
          </div>

          {!isSignUp && (
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-700 rounded focus:ring-blue-500"
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-300">
                Remember me
              </label>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-2 text-white bg-[#238636] rounded-md hover:bg-[#2ea043] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#238636] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <Loader className="w-5 h-5 animate-spin mr-2" />
                <span>Processing...</span>
              </div>
            ) : isSignUp ? (
              "Create Account"
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-400">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button onClick={toggleForm} className="text-[#58a6ff] hover:underline focus:outline-none">
              {isSignUp ? "Sign in here" : "Sign up here"}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

