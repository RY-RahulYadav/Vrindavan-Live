"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface Petal {
  id: number
  left: number
  delay: number
  duration: number
  size: number
}

export default function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    // Generate random petals
    const generatedPetals: Petal[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
      size: 20 + Math.random() * 20
    }))
    setPetals(generatedPetals)
  }, [])

  return (
    <div className="fixed left-0 right-0 bottom-0 pointer-events-none z-0 overflow-hidden" style={{ top: '100px' }}>
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal absolute opacity-60"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
          }}
        >
          <Image
            src="/lotus-flower-petals-falling-gently-soft--a1bfd804-20251106081941.jpg"
            alt="Petal"
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  )
}