import React from 'react'

const SelectInpute = ({
    name,
    id,
    option,
    selectOption,
    onchange,
    value
}) => {

  
  return (
    <div>
         <select
              name={name}
              id={id}
              className=" block w-full border  border-id_gray rounded-md shadow-sm p-2 text-id_gray text-sm "
              onChange={onchange}
              value={value}
              > 
              <option disabled="disabled" selected="selected" >
              {selectOption}
              </option>
              {option.map((opn,index)=>(
              <option key={index} value={opn.option}>{opn.option}</option>
            ))}
        </select>
    </div>
  )
}

export default SelectInpute
