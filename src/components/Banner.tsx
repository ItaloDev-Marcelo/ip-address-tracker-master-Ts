import { type ReactNode } from 'react'

interface childrenProps {
    children : ReactNode
}


const Banner = ({children}:childrenProps) => {
  return (
     <div className="bg-[url(./assets/images/pattern-bg-mobile.png)] bg-cover md:bg-[url(./assets/images/pattern-bg-desktop.png)]    bg-no-repeatw-full h-[40vh] md:h-[35vh]  flex flex-col justify-center items-center px-2">
        {children}
     </div>
  )
}

export default Banner