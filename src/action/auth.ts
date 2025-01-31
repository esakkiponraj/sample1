/* eslint-disable @typescript-eslint/no-unused-vars */
"use server"

import bcrypt from "bcryptjs"
import { SignJWT } from "jose"
import { db } from "../app/lib/prisma"
import { redirect } from "next/navigation"


export async function signUp(formData: FormData) {
  try {
    const username = formData.get("username") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const userType = formData.get("userType") as string

    // Check if user already exists
    const existingUser = await db.user.findFirst({
      where: {
        OR: [{ email: email }, { username: username }],
      },
    })

    if (existingUser) {
      return { success: false, message: "User already exists" }
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create new user
    await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        userType,
      },
    })

    return { success: true, message: "User created successfully" }
  } catch (error) {
    console.error("Signup error:", error)
    return { success: false, message: "An error occurred during signup" }
  }
}

export async function signIn(formData: FormData) {
  try {
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    // Find user by email
    const user = await db.user.findUnique({ where: { email } })
    if (!user) {
      return { success: false, message: "Invalid credentials" }
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return { success: false, message: "Invalid credentials" }
    }

    // Create and sign JWT
    const token = await new SignJWT({ userId: user.id })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1h")
      .sign(new TextEncoder().encode(process.env.JWT_SECRET))

    // Set JWT as HTTP-only cookie

    return { success: true, message: "Logged in successfully" }
  } catch (error) {
    console.error("Signin error:", error)
    return { success: false, message: "An error occurred during signin" }
  }
}

export async function handleAuthRedirect(result: { success: boolean; message: string }) {
  if (result.success) {
    // You might want to set some auth state in localStorage or cookies here
    localStorage.setItem("isAuthenticated", "true")
    return redirect("/dashboard")
  }
  return null
}


