import React, { useState } from 'react'
import Alert from './Alert'

export default function FormContainer() {
  const [errorMsg, setErrorMsg] = useState("")
  const [alert, setAlert] = useState(false)
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
    setErrorMsg(null)

    if(inputs.age < 18 || inputs.age >= 50 || isNaN(inputs.age)) {

      setErrorMsg("Your age is not valid")

    }if (inputs.phone.length < 10 || inputs.phone.length > 10 || isNaN(inputs.phone)) {

      setErrorMsg("Invalid phone number")

    }

    setAlert(true)
  }
  return (
    <main>
      <Alert isActive={alert} errorMsg={errorMsg}>
      <button 
          style={{position: "absolute", right: "10px", top: "10px", background: "none", border: "none", cursor: "pointer"}}
          onClick={()=> setAlert(false)}
          >X</button>
      </Alert>
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
