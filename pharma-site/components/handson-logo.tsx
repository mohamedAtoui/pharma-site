import React from 'react'

interface HandSonLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function HandSonLogo({ className = '', size = 'md' }: HandSonLogoProps) {
  const sizes = {
    sm: { fontSize: '1.5rem' },
    md: { fontSize: '2.5rem' },
    lg: { fontSize: '4rem' }
  }

  return (
    <div className={`inline-flex items-center justify-center font-bold ${className}`} style={{ fontSize: sizes[size].fontSize }}>
      <span style={{ color: 'var(--handson-green)' }}>HANDS</span>
      <span style={{ color: 'var(--handson-orange)' }}>ON</span>
    </div>
  )
}