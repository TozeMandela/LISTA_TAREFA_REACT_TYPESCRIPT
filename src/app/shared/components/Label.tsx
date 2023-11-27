import React, { Children } from 'react';

interface IlabelProps {
    for?: string,
    children?: React.ReactNode,
    Class?: string,
}

export const Label: React.FC<IlabelProps> = (props) => {
  return (
    <label className={props.Class} htmlFor={props.for}>
        {props.children}
    </label>
  )
}
