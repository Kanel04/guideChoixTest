import * as React from "react";

interface InputProps{
  type?:string , 
  className?: string , 
  placeholder?: string,
}
const Input: React.FC<InputProps> = ({
type , 
className ,
placeholder ,
}) => {
return (
  <>
  <input 
  type={type} 
  className={`
  
 input

  ${className}`} placeholder={placeholder} />
  </>
)
}

export default Input ;


