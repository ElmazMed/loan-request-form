import React, { useState } from 'react'
import Alert from './Alert'

export default function FormContainer() {
  const [inputs, setInputs] = useState(
  {
    name: "",
    phone: "",
    age: "",
    checked: false,
    salary: "Less than 5000 DH"
  }
)
let isDisabled = inputs.name === "" || inputs.phone === "" || inputs.age === ""

  function handleSubmitBtn(e) {
    e.preventDefault()
    if(inputs.name.length <= 2) {
      <Alert>
        <h1 style={{color: "crimson", fontSize: "1.3rem"}}>Invalid Name</h1>
      </Alert>
    }else {
      console.log("All False");
    }
  }
  return (
    <main>
      {handleSubmitBtn}
        <h1>Request A Loan</h1>
        <form>
          <label>Name:</label>
          <input type="text" value={inputs.name} onChange={e => setInputs({...inputs, name: e.target.value})}/>

          <label>Phone Number:</label>
          <input type="text" value={inputs.phone} onChange={e => setInputs({...inputs, phone: e.target.value})}/>

          <label>Age:</label>
          <input type="text" value={inputs.age} onChange={e => setInputs({...inputs, age: e.target.value})}/>

          <label>Are you an employee? <input type="checkbox" checked={inputs.checked} onChange={e => setInputs({...inputs, checked: e.target.checked})}/></label>
          
          <label>Salary:</label>
          <select value={inputs.salary} onChange={e => setInputs({...inputs, salary: e.target.value})}>
            <option>Less than 5000 DH</option>
            <option>Between 5000 DH and 10.000 DH</option>
            <option>Above 10.000 DH</option>
          </select>
          <button className={isDisabled ? "inactive" : ""} disabled={isDisabled} onClick={handleSubmitBtn} >Submit</button>
        </form>
    </main>
  )
}
