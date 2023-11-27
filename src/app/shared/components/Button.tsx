import React from 'react';

interface IpropsButon {
    type: "button" | "submit" | "reset" | undefined,
    onClick: () => void,
    children: React.ReactNode,
    ClassN?: string
}

export const Button: React.FC<IpropsButon> = ({type, onClick, children, ClassN}) => {
  return <button type={type} className={ClassN} onClick={onClick}>
    {children}
  </button>;
}