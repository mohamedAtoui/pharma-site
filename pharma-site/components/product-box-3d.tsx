"use client"

import Image from "next/image"

interface ProductBox3DProps {
  className?: string
}

export default function ProductBox3D({ className = "" }: ProductBox3DProps) {
  return (
    <div className={`product-box-container ${className}`}>
      <div className="product-box-wrapper">
        <Image
          src="/synapgen-product.png"
          alt="Synapgen - Memory and Mental Vitality Supplement by HandSon"
          width={640}
          height={352}
          className="product-box-image object-contain"
          priority
        />
        <div className="product-box-reflection" aria-hidden="true" />
      </div>
    </div>
  )
}
