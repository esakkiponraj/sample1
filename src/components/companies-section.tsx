"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function CompaniesSection() {
  const companies = [
    { name: "Mercedes-Benz", logo: "/placeholder.svg?height=60&width=200" },
    { name: "Ford", logo: "/placeholder.svg?height=60&width=200" },
    { name: "American Airlines", logo: "/placeholder.svg?height=60&width=200" },
    { name: "Société Générale", logo: "/placeholder.svg?height=60&width=200" },
  ]

  return (
    <section className="py-20 bg-[#0d1117]">
      <div className="max-w-[1400px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Trusted by the world's leading organizations</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={company.name}
                width={200}
                height={60}
                className="opacity-50 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

