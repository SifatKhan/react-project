import React from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { useRef } from 'react'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'></label>
        <input
            className='add-item-input'
            autoFocus
            ref={inputRef}
            id="addItem"
            type='text'
            placeholder='Add Item'
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            />
        
        <button
            type='submit'
            aria-label='Add Item'
            className="add-item-button"
            onClick={() => inputRef.current.focus()}
        ><PlusOutlined /></button>
    </form>
  )
}

export default AddItem