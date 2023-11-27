import React, { useEffect, useState } from 'react';
import { IdataProps, tarefasServices } from '../../shared/services/request';
import { ApiException } from '../../shared/services/apiException';
import { Link, useNavigate } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  const [list, setList] = useState<IdataProps[]>([]);
  const [inn, setInn] = useState(false);
  const [err, setErr] = useState('');

  function deleted (evt: any){
    console.log(evt.target.dataset.js);
    
    tarefasServices.Delete(evt.target.dataset.js).then((da)=>{

      if(da instanceof ApiException){
        setErr(`Conflict ${da.message}`);
      }else{
        alert('deleted with success');
        window.location.reload()
      }
    });
  } 

  useEffect(()=>{        
    tarefasServices.getAll().then((da)=>{

      if(da instanceof ApiException){
        setErr(`Conflict ${da.message}`);
      }else{
        setList(da)
        setInn(true);
      }
    });
  },[]);
  
  return (
  <div>
    {!inn && <div className='welcoC'><span className='welco'>process... ... ...</span> <br /> <span>{err &&err}</span></div>}
    {inn && <div className='div-table'>
      <table>
        <thead>
          <tr>
          <th>Numero da tarefa</th>
          <th>Titulo da tarefa</th>
          <th>Descrição</th>
          <th>Author</th>
          <th>Data marcada</th>
          <th>Horas para a execução</th>
          <th>status</th>
          <th>controllers</th>
        </tr>
        </thead>
        <tbody>
          {list && list.map((el, index) => (
            <tr key={index}>
              <td>{el.id}</td>
              <td>{el.name}</td>
              <td>{el.descrition}</td>
              <td>{el.author}</td>
              <td>{el.date}</td>
              <td>{el.hour}</td>
              <td>{el.status}</td>
              <td><Link to={`/register/${el.id}`}>updated</Link> <Link to='#' data-js={el.id} onClick={deleted}>Eliminar</Link></td>
            </tr>
          )
          )}
        </tbody>
        
      </table>
    </div>}

  </div>
  )
}