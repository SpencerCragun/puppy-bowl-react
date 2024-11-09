import { useState } from "react"

const AddPuppy = () => {
  const [inputName, setInputName] = useState('');
  const [inputBreed, setInputBreed] = useState('')
  const [inputStatus, setInputStatus] = useState('')
  const [inputImage, setInputImage] = useState('')

  const addPuppy = async (event) => {
    event.preventDefault();
    console.log(`Name: `, inputName);
    console.log(`Breed: `, inputBreed);
    console.log(`Status: `, inputStatus)
    console.log(`Image URL: `, inputImage)

    const response =  await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/players', {
      method: `POST`,
      body: JSON.stringify({
        name: inputName,
        breed: inputBreed,
        status: inputStatus,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const x = await response.json();
    console.log(x)
  }

return (
<>
  <h2>Add a Puppy Warrior</h2>
  <form onSubmit={addPuppy}>
    <input 
    onChange={(event) => { setInputName(event.target.value) }} 
    type="text" placeholder="Puppy Name"
    />
    <input 
    onChange={(event) => { setInputBreed(event.target.value)}}
    type="text" placeholder="Type of Dog"
    />
    <input 
    onChange={(event) => { setInputStatus(event.target.value)}} 
    type="text" placeholder="Field or Bench"
    />
    <input 
    onChange={(event) => { setInputImage(event.target.value)}}
    type="text" placeholder="Image URL"
    /> 
    <button>Add Puppy</button>
  </form>

</>
)}
export default AddPuppy