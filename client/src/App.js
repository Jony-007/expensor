import React, { useState } from 'react'

const App = () => {
    const [forms, setforms] = useState({
        amount:0,
        description:"",
        date:""
    })

    const handleSubmit = async (e)=>{
        e.preventDefault();

        alert("It's working")
        const res = await fetch("http://localhost:4000/transaction",{
            method:"POST",
            body: forms,


        })
    }

    const handleInput = (e)=>{
        setforms(prevForm=>{
            return {
                ...prevForm,
                [e.target.name]:e.target.value,
                [e.target.name]:e.target.value,
                [e.target.name]:e.target.value
                
            }
        });

        console.log(e.target.value);

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="number" name='amount' value={forms.amount} onChange={handleInput} placeholder='Enter transaction amount'/>
            <input type="text" name='description' value={forms.description} onChange={handleInput} placeholder='Enter transaction details'/>
            <input type="date" name='date' onChange={handleInput} value={forms.date}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default App