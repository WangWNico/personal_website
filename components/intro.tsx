import Image from 'next/image'
import React from 'react'

export default function Intro() {
  return (
    <section>
        <div className="flex items-center justify-center">
            <div>
                <Image src="https://media.licdn.com/dms/image/D4E03AQF0fxzeaYl5Ug/profile-displayphoto-shrink_800_800/0/1694239795358?e=1720656000&v=beta&t=T-HDbTtLnW1Dozul_CaGgWsjVoZx9nv81Y1ar5rm5wY"
                alt="Nico portrait"
                width="192"
                height="192"
                quality="95"
                priority={true}
                />
            </div>
        </div>
    </section>
  )
}
