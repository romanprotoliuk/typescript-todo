import React, { useRef } from 'react'
import './styles.css'

interface Props{
  todo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void
}

const Inputfield: React.FC<Props> = ({ todo, setToDo, handleAdd }: Props) => {
   const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className='input' onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur()
    }}>
      <input
        ref={inputRef}
        type="text"
        value={todo}
        placeholder='Enter a task'
        className='input__box'
        onChange={(e) => setToDo(e.target.value)}
      />
      <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default Inputfield