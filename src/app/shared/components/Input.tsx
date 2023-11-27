import React from 'react';
import { Label } from './Label';

interface Iinputsprops {
name?: string,
namefieldLabol?: string,
ClassN?: string,
classLabol?: string,
Type: string,
placehold?: string,
id?: string,
value: string,
desabled?: boolean,
onChange: (old: string) => void,
}


export const Input: React.FC<Iinputsprops> = ({namefieldLabol, desabled, name, ClassN, Type, placehold, id, value, onChange, classLabol}) => {

  return (
    <Label for={id} Class={classLabol}>

        {namefieldLabol && <span>{namefieldLabol}: </span>}

        <input type={Type} disabled={desabled} name={name} className={ClassN} placeholder={placehold} id={id} value={value} onChange={(e) => onChange(e.target.value)} />        
    </Label>
  )
}
