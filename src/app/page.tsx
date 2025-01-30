import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117]">
      <Nav />
      <Hero />
      <Features />
    </main>
  )
}

