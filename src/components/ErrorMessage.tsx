import type React from "react"


export const ErrorMessage = ({children} : {children : React.ReactNode}) => {
  return (
    <div className="text-red">
        {children}
    </div>
  )
}
