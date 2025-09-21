import React from 'react'
import Image from 'next/image'

interface HandSonLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function HandSonLogo({ className = '', size = 'md' }: HandSonLogoProps) {
  const sizes = {
    sm: { width: 120, height: 60 },
    md: { width: 200, height: 100 },
    lg: { width: 320, height: 160 }
  }

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <Image
        src="/handson-logo.png"
        alt="HandSon Logo"
        width={sizes[size].width}
        height={sizes[size].height}
        priority
        className="object-contain"
      />
    </div>
  )
}