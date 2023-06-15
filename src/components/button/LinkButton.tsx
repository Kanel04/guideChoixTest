import * as React from "react";
import { Link } from "react-router-dom";
import "./LinkButton.css"
interface LinkButtonProps{
    to: string | undefined;
      className?: string , 
      text?: string ,
      href?: string
      
  }
  const LinkButton: React.FC<LinkButtonProps> = ({
    to , 
    className ,
    text
    }) => {
      return (
        <Link to={to !== undefined ? to : ''}>
      <div  
      className={` 
     linkbutton
      ${className}
      `}>
        {text}
      </div>
        </Link>
      )
    }
    
    export default LinkButton ;
    

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
      
      