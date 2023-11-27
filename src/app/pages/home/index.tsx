import React, { useState } from 'react';
import { Input } from '../../shared/components/Input';
import { Button } from '../../shared/components/Button';
import { tarefasServices} from '../../shared/services/request'
import { ApiException } from '../../shared/services/apiException';

interface IbodyProps {
  name: string,
  descrition: string,
  author: string,
  date: string,
  hour: string,
  status: string,
  [key: string]: string | undefined;
}

export const Home: React.FC = () => {
    const [name, setName] = useState('');
    const [descrition, setDescrition] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [status, setStatus] = useState('');


    const handleSubmit = () => {
      const data: IbodyProps = {
        name,
        descrition,
        author,
        date,
        hour,
        status
      }
      
      for (const key in data) {
       if(!data[key]) return alert('preencha as os campos')
      }
      
     tarefasServices.add(data).then((da)=>{
      if(da instanceof ApiException){
        alert(da.message)
      }else{
        alert('data save with success')
        setName('')
        setDescrition('')
        setAuthor('')
        setDate('')
        setHour('')
        setStatus('')
      }
    });
    }

  return (
  <form>
    <div>
      <Input Type='text' value={name}  namefieldLabol='Titulo da tarefa' onChange={(e)=> setName(e)} placehold='Qual o titulo da tarefa' id='name' /> 

      <div className='DADH'>
        <label htmlFor="descri"><span>Descrição:</span>
            <textarea  name="descrition" id="descri" value={descrition} placeholder='descreva a tarefa' onChange={(e)=> setDescrition(e.target.value)}> 
            </textarea>
        </label>
        <div className='ADH'>
          <Input Type='text' value={author}  namefieldLabol='Author' onChange={(e)=> setAuthor(e)} placehold='Quem fara a tarefa' id='author' />

          <Input Type='date' value={date}  namefieldLabol='Date de realização' onChange={(e)=> setDate(e)}  id='date' />  

          <Input Type='time' value={hour}  namefieldLabol='Hora' onChange={(e)=> setHour(e)} id='hour' /> 

          <select name="status" id="status" onChange={e => setStatus(e.target.selectedOptions[0].value)} >
            <option key='1' value="" >selecione o estado da tarefa</option>
            <option key='Em curso' value="Em curso">Em curso</option>
            <option key='Feito' value="Feito">feito</option>
            <option key='Desconseguiu' value="Desconseguiu">Desconseguiu</option>
            <option key='Negou' value="Negou">Negou</option>
          </select>
        </div>
      </div>
    <Button type='button' ClassN='buttonn' onClick={ handleSubmit}>registrar</Button>
    </div>
  </form>
  )
}
