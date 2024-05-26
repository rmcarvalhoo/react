import {useState} from 'react'

const TodoForm = ({ prop }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Enviou form!");
      if (!value || !category) return;

      prop(value, category);      
      setValue("")
      setCategory("")      
  };

  return (
    <div className='todoForm'>
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='Digite o título' 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Selecione uma categoria</option>
        <option value="Estudos">Estudos</option>
        <option value="Pessoal">Pessoal</option>
        <option value="Trabalho">Trabalho</option>
      </select>
      <button type='submit'>Criar tarefa</button>
      </form>
    </div>
  )
}

export default TodoForm
