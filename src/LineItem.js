import React from 'react'
import {DeleteTwoTone} from '@ant-design/icons'

const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <li className='item' key={item.id}>
        <input 
            type='checkbox'
            checked={item.checked}
            onChange={()=>handleCheck(item.id)}>
        </input>
        <label 
            style={(item.checked)?{textDecoration:'line-through'}:null}
            onDoubleClick={()=>handleCheck(item.id)}>
                {item.item}
        </label>
        <DeleteTwoTone 
            className='newicon' 
            onClick={() => handleDelete(item.id)}
        />
    </li>
  )
}

export default LineItem