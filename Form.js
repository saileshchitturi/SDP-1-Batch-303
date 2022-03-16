

import React from 'react'
import './Form.css'

function Form() {
    return (
        
        <div>
 <form>
  <label>

  
    Username:
    <input type="text" placeholder="enter name" name="name" />
  </label><br></br><br></br>
  <label>
    Password:
    <input type="password" placeholder="enter password" name="Password" />
  </label><br></br>
  <input type="submit" value="login" />
</form>
        </div>
    )
}

export default Form
