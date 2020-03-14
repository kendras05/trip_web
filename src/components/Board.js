import React from 'react'
import Button from './Button'

const Board = ()=> {
  return (
    <form>
  <label>
    Street:
    <input type="text" name="name" />
  </label>
  <br></br>
<label>
  City:
  <input type="text" name="name" />
</label>
<br></br>
<label>
  State:
  <input type="text" name="name" />
</label>
<br></br>
<label>
  Zip:
  <input type="number" name="name" />
</label>
<br></br>
</form>
  )
}
    
export default Board