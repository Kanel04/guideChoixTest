import * as React from "react";
import { Link } from "react-router-dom";
import "./LinkButtonSecondary.css"
interface LinkButtonProps{
    to: string | undefined;
      className?: string , 
      text?: string ,
      href?: string
      
  }
export const LinkButtonSecondary: React.FC<LinkButtonProps> = ({
    to , 
    className ,
    text
    }) => {
      return (
        <Link to={to !== undefined ? to : ''}>
      <div  
      className={` 
     linkbuttonsecodary
      ${className}
      `}>
        {text}
      </div>
        </Link>
      )
    }