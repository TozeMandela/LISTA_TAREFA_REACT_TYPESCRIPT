import React, {  useEffect, useRef, useState } from 'react';
import { Input } from '../../shared/components/Input';
import { Button } from '../../shared/components/Button';
import { IdataProps, tarefasServices} from '../../shared/services/request'
import { ApiException } from '../../shared/services/apiException';


export const Updated: React.FC = () => {
    const [name, setName] = useState('');
    const [descrition, setDescrition] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [status, setStatus] = useState('');
    const ref= useRef<HTMLSelectElement | null>(null)
    
    let id = window.location.href.replace('http://localhost:3000/register/', '');
    
    function selectedopt (): void{
      document.querySelectorAll('select option').forEach((op: any, index) => {      
        if(op.value.toLowerCase() === status.toLowerCase()) {
          if(ref.current)ref.current.options.selectedIndex = index;
         return op.selected = true;
        }
      });
    }

    useEffect(() =>{
      tarefasServices.getOne(id).then((da)=>{
        if(da instanceof ApiException){
          alert(da.message)
        }else{
          setName(da.name)
          setDescrition(da.descrition)
          setAuthor(da.author)
          setDate(da.date)
          setHour(da.hour)
          setStatus(da.status)         
        }
      })
    },[])
    selectedopt();

    const handleSubmit = () => {
      const data: IdataProps = {
        id,
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
      
     tarefasServices.updated(data).then((da)=>{
      if(da instanceof ApiException){
        alert(da.message)
      }else{
        alert('data updated with success')
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
      <Input Type='text' desabled={true} value={name}  namefieldLabol='Titulo da tarefa' onChange={(e)=> setName(e)} placehold='Qual o titulo da tarefa' id='name' /> 

      <div className='DADH'>
        <label htmlFor="descri"><span>Descrição:</span>
            <textarea  name="descrition" id="descri" value={descrition} placeholder='descreva a tarefa' onChange={(e)=> setDescrition(e.target.value)}> 
            </textarea>
        </label>
        <div className='ADH'>
          <Input Type='text' value={author} namefieldLabol='Author' onChange={(e)=> setAuthor(e)} placehold='Quem fara a tarefa' id='author' />

          <Input Type='date' value={date} desabled={true} namefieldLabol='Date de realização' onChange={(e)=> setDate(e)}  id='date' />  

          <Input Type='time' value={hour}  namefieldLabol='Hora' onChange={(e)=> setHour(e)} id='hour' /> 

          <select name="status" ref={ref} id="status" onChange={e => setStatus(e.target.selectedOptions[0].value)} >
            <option key='1'  value="" >selecione o estado da tarefa</option>
            <option key='Em curso' value="Em curso">Em curso</option>
            <option key='Feito' selected value="Feito">feito</option>
            <option key='Desconseguiu' value="Desconseguiu">Desconseguiu</option>
            <option key='Negou' value="Negou">Negou</option>
          </select>
        </div>
      </div>
    <Button type='button' ClassN='buttonn' onClick={ handleSubmit}>actualizar</Button>
    </div>
  </form>
  )
}
