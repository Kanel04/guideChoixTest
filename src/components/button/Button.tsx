import * as React from "react"

interface ButtonProps{
    type?: "button" | "submit"|"reset", 
    className?: string , 
    text?: string ,
  
    
}


export const Button: React.FC<ButtonProps> = ({
  type , 
  className ,
  text
  }) => {
    return (
      
    <button
    type={type}  
    className={` 
     
     button
     
    ${className}
    `}>
      {text}
    </button>
      
    )
  }