import React from 'react';
import {Link} from 'react-router-dom'

export const Head: React.FC = () => {
  return (
    <div className="header">
        <Link to='/List'>ver tarefas</Link>
        <Link to='/register'>registrar</Link>
        <Link to='/logout'>sair</Link>
    </div>
  )
}
