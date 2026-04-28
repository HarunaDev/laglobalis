import React from 'react'
type Props = {
    isHovered: boolean;
  }

export default function FrenchAcademy({isHovered} : Props) {
  return (
    <main className="relative mt-24">
        <div
          className={`h-0 w-[40rem] absolute lg:top-[10%] top-[3%] right-[2%] -rotate-[30deg] -z-10 ${
            isHovered
              ? "shadow-[0_0_900px_30px_#453059]"
              : "shadow-[0_0_900px_30px_#E99B63]"
          }`}
        />
        
    </main>
  )
}
