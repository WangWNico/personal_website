import Image from 'next/image'
import React from 'react'

export default function Intro() {
  return (
    <section>
        <div className="flex items-center justify-center">
            <div>
                <img src="/portrait.jpg" width={192} height={192} 
                    className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-x1"
                />
                <span className="text-4xl">✌️</span>
            </div>
        </div>
    </section>
  )
}
