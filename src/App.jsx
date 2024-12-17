import { useState } from 'react'
import './App.css'


function App() {

  const[values,setValues]=useState({
    firstname:'',
    lastname:'',
    email:'',
    gender:'',
    contact:'',
    subject:'',
    about:'',
  })

  const handleChange= (e) =>{
    setValues({...values,[e.target.name]:[e.target.values]})

  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(values);
    

  }


  return (
    <>
    <div className='container'>
      <h1>Registration form</h1>
      <form  onSubmit={handleSubmit}>
        <label htmlFor="first name">First Name</label>
        <input type="text" placeholder='Enter the first name' name='firstname'
        onChange={(e)=>handleChange(e)} required />

        <label htmlFor="Last name">Last Name</label>
        <input type="text" placeholder='Enter the first name' name='Lastname'
        onChange={(e)=>handleChange(e)}
        required />

        <label htmlFor="Email">Email</label>
        <input type="text" placeholder='Email' name='Email'
        onChange={(e)=>handleChange(e)}
        required />

        <label htmlFor="Contact">Contact</label>
        <input type="text" placeholder='Phone Number' name='Contact'
        onChange={(e)=>handleChange(e)} />

        <label htmlFor="Gender">Gender</label>
        <input type="radio" name='Gender' 
        onChange={(e)=>handleChange(e)}/>Male
        <input type="radio" name='Gender' 
        onChange={(e)=>handleChange(e)}/>Female
        <input type="radio" name='Gender' 
        onChange={(e)=>handleChange(e)}/>Other

        <label htmlFor="Subject">Subject</label>
        <select name="Subject" id="Subject" onChange={(e)=>handleChange(e)} >
          <option value="BSC">BSC</option>
          <option value="BSC">BA</option>
          <option value="BSC">BCOM</option>
          <option value="BSC">BBA</option>
        </select>

        <label htmlFor="About">About</label>
        <textarea name="about" id="about" cols="30" rows="10" onChange={(e)=>handleChange(e)} placeholder='Enter description'></textarea>

        <button type='button'>Reset</button>
        <button type='submit'>Submit</button>

      </form>

    </div>

    </>
  )
}

export default App
